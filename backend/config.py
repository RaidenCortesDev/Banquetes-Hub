import os
from dotenv import load_dotenv

# Carga variables desde el archivo .env
load_dotenv()

class Config:
    """Configuración centralizada para la aplicación Flask y conexión a PostgreSQL."""
    SECRET_KEY = os.getenv('SECRET_KEY', 'partyzone_fallback_secret_key_2026')
    
    DB_USER = os.getenv('DB_USER', 'postgres')
    DB_PASSWORD = os.getenv('DB_PASSWORD', 'root')
    DB_HOST = os.getenv('DB_HOST', 'localhost')
    DB_PORT = os.getenv('DB_PORT', '5432')
    DB_NAME = os.getenv('DB_NAME', 'db_banqueteshub')
    
    SQLALCHEMY_DATABASE_URI = (
        f"postgresql://{DB_USER}:{DB_PASSWORD}@{DB_HOST}:{DB_PORT}/{DB_NAME}"
    )
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    SQLALCHEMY_ECHO = False
