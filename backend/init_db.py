import os
import psycopg2
from psycopg2.extensions import ISOLATION_LEVEL_AUTOCOMMIT
from werkzeug.security import generate_password_hash
from dotenv import load_dotenv

load_dotenv()

DB_HOST = os.getenv('DB_HOST', 'localhost')
DB_PORT = os.getenv('DB_PORT', '5432')
DB_NAME = os.getenv('DB_NAME', 'db_banqueteshub')
DB_USER = os.getenv('DB_USER', 'postgres')
DB_PASSWORD = os.getenv('DB_PASSWORD', 'root')

def create_database_if_not_exists():
    """Conecta a PostgreSQL y crea db_banqueteshub si no existe."""
    try:
        conn = psycopg2.connect(
            host=DB_HOST,
            port=DB_PORT,
            user=DB_USER,
            password=DB_PASSWORD,
            dbname='postgres'
        )
        conn.set_isolation_level(ISOLATION_LEVEL_AUTOCOMMIT)
        cursor = conn.cursor()
        
        cursor.execute(f"SELECT 1 FROM pg_catalog.pg_database WHERE datname = '{DB_NAME}'")
        exists = cursor.fetchone()
        if not exists:
            cursor.execute(f"CREATE DATABASE {DB_NAME}")
            print(f"[OK] Base de datos '{DB_NAME}' creada con éxito.")
        else:
            print(f"[INFO] La base de datos '{DB_NAME}' ya existe.")
        cursor.close()
        conn.close()
    except Exception as e:
        print(f"[ERROR] Error al verificar/crear la base de datos: {e}")
        raise e

def seed_initial_data():
    """Inicializa las tablas y siembra datos iniciales de sucursales, servicios y admin."""
    from flask import Flask
    from config import Config
    from database import db
    from models import User, Branch, Service

    app = Flask(__name__)
    app.config.from_object(Config)
    db.init_app(app)

    with app.app_context():
        # Sincronizar esquema limpio
        db.drop_all()
        db.create_all()
        print("[OK] Tablas de PostgreSQL creadas correctamente con el esquema actualizado.")

        # 1. Usuario Administrador por defecto
        admin_user = User(
            username='admin',
            password_hash=generate_password_hash('admin123', method='scrypt'),
            role='admin',
            is_active=True
        )
        db.session.add(admin_user)
        print("[OK] Usuario administrador 'admin' creado (password: admin123).")

        # 2. Las 6 Sucursales Principales de PartyZone
        branches_data = [
            {
                'name': 'PartyZone Cumbres',
                'capacity': 350,
                'base_price_mxn': 24500.00,
                'image_url': 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=800&q=80',
                'description': 'Elegante salón con acabados en madera noble, terraza panorámica y candelabros de cristal templado.',
                'address': 'Av. Paseo de los Leones #4500, Sector Cumbres'
            },
            {
                'name': 'PartyZone San Jerónimo',
                'capacity': 250,
                'base_price_mxn': 18500.00,
                'image_url': 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=800&q=80',
                'description': 'Ambiente íntimo y sofisticado con iluminación arquitectónica regulable y jardín interior.',
                'address': 'Av. San Jerónimo #820, Col. San Jerónimo'
            },
            {
                'name': 'PartyZone Valle Real',
                'capacity': 500,
                'base_price_mxn': 38000.00,
                'image_url': 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800&q=80',
                'description': 'Majestuoso salón de gala para eventos masivos, pista de baile iluminada y lobby de recepción de lujo.',
                'address': 'Calzada del Valle #1200, San Pedro'
            },
            {
                'name': 'PartyZone Linda Vista',
                'capacity': 200,
                'base_price_mxn': 15000.00,
                'image_url': 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=800&q=80',
                'description': 'Espacio moderno y acogedor ideal para aniversarios, graduaciones y recepciones familiares de alto nivel.',
                'address': 'Av. Miguel Alemán #3100, Col. Linda Vista'
            }
        ]

        for b_data in branches_data:
            branch = Branch(
                name=b_data['name'],
                capacity=b_data['capacity'],
                base_price_mxn=b_data['base_price_mxn'],
                image_url=b_data['image_url'],
                description=b_data['description'],
                address=b_data['address'],
                is_active=True
            )
            db.session.add(branch)
            print(f"[OK] Sucursal '{b_data['name']}' registrada.")

        # 3. Servicios adicionales
        services_data = [
            {
                'name': 'Banquete Gourmet 3 Tiempos',
                'price_mxn': 6500.00,
                'category': 'Alimentos & Bebidas',
                'description': 'Menú de tres tiempos con opciones de carne y pollo, guarniciones finas y pan artesanal.'
            },
            {
                'name': 'DJ Profesional & Iluminación Robótica',
                'price_mxn': 7500.00,
                'category': 'Audio & Entretenimiento',
                'description': 'Audio envolvente, rayos láser, cabezas móviles y animación por 5 horas.'
            },
            {
                'name': 'Barra Libre de Coctelería de Autor',
                'price_mxn': 5800.00,
                'category': 'Bebidas',
                'description': 'Bartender profesional, insumos y cocteles ilimitados durante 4 horas.'
            },
            {
                'name': 'Mesa de Postres Finos y Chocolatería',
                'price_mxn': 3200.00,
                'category': 'Postres',
                'description': 'Variedad de tartas miniatura, macarons, bombones belgas y shot desserts.'
            },
            {
                'name': 'Cabina de Video 360° con Luces LED',
                'price_mxn': 4500.00,
                'category': 'Fotografía & Video',
                'description': 'Plataforma para 4 personas, efectos de cámara lenta y entrega instantánea por QR.'
            },
            {
                'name': 'Decoración Floral Imperial & Velas',
                'price_mxn': 6200.00,
                'category': 'Decoración',
                'description': 'Centros de mesa altos con flores naturales de temporada y arcos florales de bienvenida.'
            }
        ]

        for s_data in services_data:
            svc = Service(
                name=s_data['name'],
                price_mxn=s_data['price_mxn'],
                category=s_data['category'],
                description=s_data['description'],
                is_active=True
            )
            db.session.add(svc)
            print(f"[OK] Servicio '{s_data['name']}' registrado.")

        db.session.commit()
        print("[SUCCESS] Inicialización y siembra de base de datos completada con éxito.")

if __name__ == '__main__':
    create_database_if_not_exists()
    seed_initial_data()
