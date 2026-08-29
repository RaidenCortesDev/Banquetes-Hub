import datetime
from database import db

class User(db.Model):
    """Modelo de usuario para el personal administrativo con soporte de baja lógica."""
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False, index=True)
    password_hash = db.Column(db.String(255), nullable=False)
    role = db.Column(db.String(50), default='admin', nullable=False)
    is_active = db.Column(db.Boolean, default=True, nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.datetime.utcnow, nullable=False)

    def to_dict(self):
        return {
            'id': self.id,
            'username': self.username,
            'role': self.role,
            'is_active': self.is_active,
            'created_at': self.created_at.isoformat() if self.created_at else None
        }


class Branch(db.Model):
    """Modelo de sucursal/salón de eventos PartyZone."""
    __tablename__ = 'branches'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), nullable=False, unique=True)
    capacity = db.Column(db.Integer, nullable=False)
    base_price_mxn = db.Column(db.Numeric(10, 2), nullable=False)
    image_url = db.Column(db.String(500), nullable=False)
    description = db.Column(db.Text, nullable=True)
    address = db.Column(db.String(255), nullable=True)
    is_active = db.Column(db.Boolean, default=True, nullable=False)

    bookings = db.relationship('Booking', backref='branch', lazy=True)

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'capacity': self.capacity,
            'base_price_mxn': float(self.base_price_mxn),
            'image_url': self.image_url,
            'description': self.description or '',
            'address': self.address or '',
            'is_active': self.is_active
        }


class Service(db.Model):
    """Modelo de servicios adicionales (banquete, DJ, decoración, etc.)."""
    __tablename__ = 'services'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(150), nullable=False, unique=True)
    price_mxn = db.Column(db.Numeric(10, 2), nullable=False)
    category = db.Column(db.String(80), nullable=False)
    description = db.Column(db.Text, nullable=True)
    is_active = db.Column(db.Boolean, default=True, nullable=False)

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'price_mxn': float(self.price_mxn),
            'category': self.category,
            'description': self.description or '',
            'is_active': self.is_active
        }


class Booking(db.Model):
    """Modelo de reservación con validación de unicidad de fecha/turno por sucursal."""
    __tablename__ = 'bookings'
    __table_args__ = (
        db.UniqueConstraint('branch_id', 'event_date', 'time_slot', name='uq_branch_event_slot'),
    )

    id = db.Column(db.Integer, primary_key=True)
    booking_folio = db.Column(db.String(50), unique=True, nullable=False, index=True)
    customer_name = db.Column(db.String(150), nullable=False)
    customer_email = db.Column(db.String(150), nullable=False)
    customer_phone = db.Column(db.String(50), nullable=False)
    branch_id = db.Column(db.Integer, db.ForeignKey('branches.id'), nullable=False)
    event_date = db.Column(db.Date, nullable=False)
    time_slot = db.Column(db.String(50), nullable=False) # 'Matutino', 'Vespertino', 'Nocturno'
    total_mxn = db.Column(db.Numeric(10, 2), nullable=False)
    card_last_four = db.Column(db.String(4), nullable=False) # Solo últimos 4 dígitos según PCI
    status = db.Column(db.String(50), default='CONFIRMADA', nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.datetime.utcnow, nullable=False)
    is_active = db.Column(db.Boolean, default=True, nullable=False)

    booking_services = db.relationship('BookingService', backref='booking', cascade='all, delete-orphan', lazy=True)

    def to_dict(self):
        return {
            'id': self.id,
            'booking_folio': self.booking_folio,
            'customer_name': self.customer_name,
            'customer_email': self.customer_email,
            'customer_phone': self.customer_phone,
            'branch_id': self.branch_id,
            'branch_name': self.branch.name if self.branch else 'Desconocida',
            'event_date': self.event_date.strftime('%Y-%m-%d') if self.event_date else '',
            'time_slot': self.time_slot,
            'total_mxn': float(self.total_mxn),
            'card_last_four': self.card_last_four,
            'status': self.status,
            'created_at': self.created_at.strftime('%Y-%m-%d %H:%M:%S') if self.created_at else '',
            'is_active': self.is_active,
            'services': [bs.to_dict() for bs in self.booking_services if bs.is_active]
        }


class BookingService(db.Model):
    """Tabla intermedia para snapshot de servicios y precios contratados por reserva."""
    __tablename__ = 'booking_services'

    id = db.Column(db.Integer, primary_key=True)
    booking_id = db.Column(db.Integer, db.ForeignKey('bookings.id'), nullable=False)
    service_id = db.Column(db.Integer, db.ForeignKey('services.id'), nullable=False)
    unit_price_mxn = db.Column(db.Numeric(10, 2), nullable=False)
    is_active = db.Column(db.Boolean, default=True, nullable=False)

    service = db.relationship('Service', lazy=True)

    def to_dict(self):
        return {
            'id': self.id,
            'booking_id': self.booking_id,
            'service_id': self.service_id,
            'service_name': self.service.name if self.service else 'Servicio no encontrado',
            'category': self.service.category if self.service else 'General',
            'unit_price_mxn': float(self.unit_price_mxn),
            'is_active': self.is_active
        }
