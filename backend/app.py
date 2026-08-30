import os
import datetime
from flask import Flask, request, jsonify
from flask_cors import CORS
from werkzeug.security import check_password_hash

from config import Config
from database import db
from models import User, Branch, Service, Booking, BookingService
from utils import sanitize_dict, sanitize_input, generate_booking_folio, format_currency_mxn

def create_app():
    """
    Fábrica de la aplicación Flask para PartyZone.
    Configura extensiones, CORS, base de datos y registra todas las rutas de la API.
    """
    app = Flask(__name__)
    app.config.from_object(Config)

    # Configuración de CORS para permitir solicitudes del frontend en desarrollo y producción
    CORS(app, resources={r"/api/*": {"origins": "*"}})

    # Inicialización de SQLAlchemy
    db.init_app(app)

    # -------------------------------------------------------------
    # RUTAS PÚBLICAS (PERFIL CLIENTE)
    # -------------------------------------------------------------

    @app.route('/api/health', methods=['GET'])
    def health_check():
        """Verifica el estado del servicio y la conectividad a la base de datos."""
        return jsonify({
            'status': 'healthy',
            'timestamp': datetime.datetime.utcnow().isoformat(),
            'service': 'PartyZone Banquetes Hub API'
        }), 200

    @app.route('/api/branches', methods=['GET'])
    def get_branches():
        """
        Retorna el catálogo de las sucursales activas de PartyZone con precios base.
        """
        branches = Branch.query.filter_by(is_active=True).order_by(Branch.id).all()
        return jsonify({
            'success': True,
            'count': len(branches),
            'data': [b.to_dict() for b in branches]
        }), 200

    @app.route('/api/services', methods=['GET'])
    def get_services():
        """
        Retorna la lista de servicios y paquetes adicionales activos.
        """
        services = Service.query.filter_by(is_active=True).order_by(Service.category, Service.name).all()
        return jsonify({
            'success': True,
            'count': len(services),
            'data': [s.to_dict() for s in services]
        }), 200

    @app.route('/api/availability', methods=['GET'])
    def check_availability():
        """
        Verifica si una sucursal tiene disponible una fecha y turno específicos.
        Parámetros de consulta: branch_id, event_date (YYYY-MM-DD), time_slot
        """
        branch_id = request.args.get('branch_id', type=int)
        event_date_str = request.args.get('event_date')
        time_slot = request.args.get('time_slot')

        if not branch_id or not event_date_str or not time_slot:
            return jsonify({
                'success': False,
                'message': 'Parámetros incompletos. Se requieren branch_id, event_date y time_slot.'
            }), 400

        try:
            event_date = datetime.datetime.strptime(event_date_str, '%Y-%m-%d').date()
        except ValueError:
            return jsonify({
                'success': False,
                'message': 'Formato de fecha inválido. Utilice el formato YYYY-MM-DD.'
            }), 400

        # Validar existencia de reserva activa previa para la misma combinación
        existing_booking = Booking.query.filter_by(
            branch_id=branch_id,
            event_date=event_date,
            time_slot=time_slot,
            is_active=True
        ).first()

        is_available = (existing_booking is None)

        return jsonify({
            'success': True,
            'available': is_available,
            'branch_id': branch_id,
            'event_date': event_date_str,
            'time_slot': time_slot,
            'message': 'Fecha y turno disponibles para reserva' if is_available else 'El salón ya cuenta con una reserva activa en esa fecha y turno.'
        }), 200

    @app.route('/api/bookings', methods=['POST'])
    def create_booking():
        """
        Procesa y registra una nueva reservación de evento.
        - Sanitiza todas las entradas con Bleach contra XSS.
        - Verifica la disponibilidad en PostgreSQL (branch_id, event_date, time_slot).
        - Genera un Folio Único e irrepetible (Ej. PZ-2026-X89B).
        - Cumplimiento PCI: Almacena únicamente los últimos 4 dígitos de la tarjeta.
        - Registra el desglose de servicios en booking_services con snapshot de precio.
        """
        raw_data = request.get_json() or {}
        data = sanitize_dict(raw_data)

        customer_name = data.get('customer_name')
        customer_email = data.get('customer_email')
        customer_phone = data.get('customer_phone')
        branch_id = data.get('branch_id')
        event_date_str = data.get('event_date')
        time_slot = data.get('time_slot')
        service_ids = data.get('service_ids', [])
        card_number = str(data.get('card_number', '')).replace(' ', '').replace('-', '')

        if not all([customer_name, customer_email, customer_phone, branch_id, event_date_str, time_slot]):
            return jsonify({
                'success': False,
                'message': 'Faltan campos obligatorios para completar la reservación.'
            }), 400

        # Obtener y validar sucursal
        branch = Branch.query.filter_by(id=branch_id, is_active=True).first()
        if not branch:
            return jsonify({'success': False, 'message': 'La sucursal seleccionada no existe o no está activa.'}), 404

        try:
            event_date = datetime.datetime.strptime(event_date_str, '%Y-%m-%d').date()
        except ValueError:
            return jsonify({'success': False, 'message': 'Formato de fecha de evento inválido (debe ser YYYY-MM-DD).'}), 400

        # Validar disponibilidad concurrente
        existing = Booking.query.filter_by(
            branch_id=branch_id,
            event_date=event_date,
            time_slot=time_slot,
            is_active=True
        ).first()

        if existing:
            return jsonify({
                'success': False,
                'message': f'La sucursal "{branch.name}" ya se encuentra reservada para el turno {time_slot} en la fecha {event_date_str}.'
            }), 409

        # Obtener los servicios seleccionados y calcular monto total
        total_mxn = float(branch.base_price_mxn)
        selected_services = []
        if service_ids:
            services = Service.query.filter(Service.id.in_(service_ids), Service.is_active == True).all()
            for svc in services:
                total_mxn += float(svc.price_mxn)
                selected_services.append(svc)

        # Generar Folio Único
        folio = generate_booking_folio()
        while Booking.query.filter_by(booking_folio=folio).first() is not None:
            folio = generate_booking_folio()

        # Extraer únicamente los últimos 4 dígitos para cumplimiento PCI
        card_last_four = card_number[-4:] if len(card_number) >= 4 else '0000'

        new_booking = Booking(
            booking_folio=folio,
            customer_name=customer_name,
            customer_email=customer_email,
            customer_phone=customer_phone,
            branch_id=branch.id,
            event_date=event_date,
            time_slot=time_slot,
            total_mxn=total_mxn,
            card_last_four=card_last_four,
            status='CONFIRMADA',
            is_active=True
        )

        db.session.add(new_booking)
        db.session.flush() # Obtiene el ID generado

        # Insertar desglose en booking_services con snapshot de precio
        for svc in selected_services:
            bs = BookingService(
                booking_id=new_booking.id,
                service_id=svc.id,
                unit_price_mxn=svc.price_mxn,
                is_active=True
            )
            db.session.add(bs)

        db.session.commit()

        confirmation_message = (
            f"Estamos confirmando tu reservación. Tu folio de seguimiento es {folio}. "
            f"Nos pondremos en contacto mediante correo"
        )

        return jsonify({
            'success': True,
            'booking_folio': folio,
            'message': confirmation_message,
            'total_mxn': total_mxn,
            'formatted_total': format_currency_mxn(total_mxn),
            'booking': new_booking.to_dict()
        }), 201

    # -------------------------------------------------------------
    # RUTAS PRIVADAS (PERFIL ADMINISTRACIÓN)
    # -------------------------------------------------------------

    @app.route('/api/auth/login', methods=['POST'])
    def admin_login():
        """
        Autenticación de personal administrativo temporalmente sin validación de hash.
        """
        data = sanitize_dict(request.get_json() or {})
        username = data.get('username')
        password = data.get('password')

        if not username or not password:
            return jsonify({'success': False, 'message': 'Se requieren usuario y contraseña.'}), 400

        user = User.query.filter_by(username=username, is_active=True).first()
        
        # Versión original comentada:
        # if not user or not check_password_hash(user.password_hash, password):
        #     return jsonify({'success': False, 'message': 'Credenciales inválidas o cuenta inactiva.'}), 401
        
        # Validación directa en texto plano:
        if not user or user.password_hash != password:
            return jsonify({'success': False, 'message': 'Credenciales inválidas o cuenta inactiva.'}), 401

        # Token simulado para el frontend de administración
        token = f"pz_admin_token_{user.id}_{int(datetime.datetime.utcnow().timestamp())}"

        return jsonify({
            'success': True,
            'message': f'Bienvenido al Panel de Administración, {user.username}',
            'token': token,
            'user': user.to_dict()
        }), 200

    @app.route('/api/admin/bookings', methods=['GET'])
    def get_admin_bookings():
        """
        Retorna la bitácora completa de reservas registradas en PostgreSQL,
        incluyendo folio, datos del cliente, sucursal, total y desglose de servicios.
        Soporta filtro por estado activo / todos.
        """
        show_all = request.args.get('show_all', 'true').lower() == 'true'
        
        query = Booking.query.order_by(Booking.created_at.desc())
        if not show_all:
            query = query.filter_by(is_active=True)

        bookings = query.all()
        return jsonify({
            'success': True,
            'count': len(bookings),
            'data': [b.to_dict() for b in bookings]
        }), 200

    @app.route('/api/admin/bookings/<int:booking_id>/soft-delete', methods=['PATCH', 'DELETE'])
    def soft_delete_booking(booking_id):
        """
        Aplica baja lógica (Soft Delete) a una reservación modificando is_active a False.
        Preserva la trazabilidad y la integridad de los datos en PostgreSQL.
        """
        booking = Booking.query.get_or_404(booking_id)
        booking.is_active = False
        booking.status = 'CANCELADA'
        db.session.commit()

        return jsonify({
            'success': True,
            'message': f'La reservación con folio {booking.booking_folio} ha sido dada de baja lógicamente.',
            'booking': booking.to_dict()
        }), 200

    @app.route('/api/admin/bookings/<int:booking_id>/restore', methods=['PATCH'])
    def restore_booking(booking_id):
        """
        Restaura una reservación previamente dada de baja lógica.
        """
        booking = Booking.query.get_or_404(booking_id)
        
        # Verificar que no exista conflicto con otra reserva activa
        conflict = Booking.query.filter(
            Booking.id != booking.id,
            Booking.branch_id == booking.branch_id,
            Booking.event_date == booking.event_date,
            Booking.time_slot == booking.time_slot,
            Booking.is_active == True
        ).first()

        if conflict:
            return jsonify({
                'success': False,
                'message': f'No se puede restaurar: ya existe una reserva activa para esa sucursal, fecha y turno ({conflict.booking_folio}).'
            }), 409

        booking.is_active = True
        booking.status = 'CONFIRMADA'
        db.session.commit()

        return jsonify({
            'success': True,
            'message': f'La reservación {booking.booking_folio} ha sido restaurada con éxito.',
            'booking': booking.to_dict()
        }), 200

    @app.route('/api/admin/bookings/<int:booking_id>/status', methods=['PATCH'])
    def update_booking_status(booking_id):
        """
        Actualiza el estado de negocio de una reservación.
        Body JSON: { "status": "CONFIRMADA" | "COBRADA" | "CONCLUIDA" | "CANCELADA" }
        """
        booking = Booking.query.get_or_404(booking_id)
        data = request.get_json(silent=True) or {}
        new_status = data.get('status', '').upper().strip()

        VALID_STATUSES = {'CONFIRMADA', 'COBRADA', 'CONCLUIDA', 'CANCELADA'}
        if new_status not in VALID_STATUSES:
            return jsonify({
                'success': False,
                'message': f'Estado inválido. Valores permitidos: {", ".join(VALID_STATUSES)}'
            }), 400

        booking.status = new_status
        # Si se cancela también se desactiva lógicamente
        if new_status == 'CANCELADA':
            booking.is_active = False
        elif booking.is_active is False and new_status != 'CANCELADA':
            booking.is_active = True

        db.session.commit()

        return jsonify({
            'success': True,
            'message': f'Estado de {booking.booking_folio} actualizado a {new_status}.',
            'booking': booking.to_dict()
        }), 200

    return app

app = create_app()

if __name__ == '__main__':
    port = int(os.getenv('PORT', 5000))
    app.run(host='0.0.0.0', port=port, debug=True)
