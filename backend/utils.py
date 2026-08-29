import random
import string
import datetime
import bleach

def sanitize_input(value: str) -> str:
    """
    Sanitiza cadenas de texto para prevenir ataques XSS usando Bleach.
    """
    if not isinstance(value, str):
        return value
    cleaned = bleach.clean(value.strip(), tags=[], strip=True)
    return cleaned


def sanitize_dict(data: dict) -> dict:
    """
    Aplica sanitización recursiva a valores de tipo string en un diccionario.
    """
    sanitized = {}
    for key, val in data.items():
        if isinstance(val, str):
            sanitized[key] = sanitize_input(val)
        elif isinstance(val, dict):
            sanitized[key] = sanitize_dict(val)
        else:
            sanitized[key] = val
    return sanitized


def generate_booking_folio() -> str:
    """
    Genera un folio único e irrepetible en formato PZ-YYYY-XXXX (ej. PZ-2026-X89B).
    """
    year = datetime.datetime.utcnow().year
    random_chars = ''.join(random.choices(string.ascii_uppercase + string.digits, k=4))
    return f"PZ-{year}-{random_chars}"


def format_currency_mxn(amount: float) -> str:
    """
    Formatea cantidades en formato monetario en Pesos Mexicanos (ej: $18,500.00 MXN).
    """
    return f"${amount:,.2f} MXN"
