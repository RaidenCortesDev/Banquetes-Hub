import os
from dotenv import load_dotenv

load_dotenv()

class Config:
    """Configuración centralizada para la aplicación Flask y conexión a PostgreSQL."""
    SECRET_KEY = os.getenv('SECRET_KEY', 'banquetes_hub_fallback_secret_key_2026')

    db_url = os.getenv('DATABASE_URL')

    if not db_url:
        DB_USER = os.getenv('DB_USER', 'postgres')
        DB_PASSWORD = os.getenv('DB_PASSWORD', 'root')
        DB_HOST = os.getenv('DB_HOST', 'localhost')
        DB_PORT = os.getenv('DB_PORT', '5432')
        DB_NAME = os.getenv('DB_NAME', 'db_banqueteshub')
        db_url = f"postgresql://{DB_USER}:{DB_PASSWORD}@{DB_HOST}:{DB_PORT}/{DB_NAME}"

    if db_url.startswith("postgres://"):
        db_url = db_url.replace("postgres://", "postgresql://", 1)

    SQLALCHEMY_DATABASE_URI = db_url
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    SQLALCHEMY_ECHO = False

    # Configuración de seguridad SSL explícita para evitar errores de conexión externa
    SQLALCHEMY_ENGINE_OPTIONS = {
        "connect_args": {"sslmode": "require"} if "supabase.co" in db_url or "pooler.supabase.com" in db_url else {}
    }