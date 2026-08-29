import os
from dotenv import load_dotenv

# Carga variables desde el archivo .env
load_dotenv()

class Config:
    """Configuración centralizada para la aplicación Flask y conexión a PostgreSQL."""
    SECRET_KEY = os.getenv('SECRET_KEY', 'banquetes_hub_fallback_secret_key_2026')

    # 1. Intentar obtener URL completa (para producción/Supabase)
    db_url = os.getenv('DATABASE_URL')

    # 2. Si no hay DATABASE_URL, se arman las credenciales locales (tu máquina)
    if not db_url:
        DB_USER = os.getenv('DB_USER', 'postgres')
        DB_PASSWORD = os.getenv('DB_PASSWORD', 'root')
        DB_HOST = os.getenv('DB_HOST', 'localhost')
        DB_PORT = os.getenv('DB_PORT', '5432')
        DB_NAME = os.getenv('DB_NAME', 'db_banqueteshub')
        
        db_url = f"postgresql://{DB_USER}:{DB_PASSWORD}@{DB_HOST}:{DB_PORT}/{DB_NAME}"

    # Corregir prefijo por si el proveedor de nube envía "postgres://" en vez de "postgresql://"
    if db_url.startswith("postgres://"):
        db_url = db_url.replace("postgres://", "postgresql://", 1)

    SQLALCHEMY_DATABASE_URI = db_url
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    SQLALCHEMY_ECHO = False