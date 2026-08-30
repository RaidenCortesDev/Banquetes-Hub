# Banquetes Hub| Salones de Eventos & Banquetes de Gala

Plataforma web integral para la cadena de salones de eventos **PartyZone**, desarrollada con una arquitectura desacoplada de alto rendimiento y diseño cálido y elegante (*Warm & Elegant*).

---

## 🏛️ 1. Stack Tecnológico

### Frontend
- **Framework UI:** Polymer 2 (Web Components).
- **Bundler:** Vite (configuración optimizada para desarrollo y build de producción).
- **Animaciones:** `@polymer/neon-animation` para transiciones fluidas entre secciones (Landing, Reserva, Login y Admin).
- **Validación de Esquemas:** `Zod` para validación y sanitización estricta de formularios del lado del cliente.
- **Paleta Visual (Warm & Elegant):**
  - Fondo Principal: Blanco puro (`#FFFFFF`) y Crema suave / Beige cálido (`#FDFBF7`).
  - Acento Elegante: Champagne / Dorado (`#D4AF37`).
  - Botones y Acciones Principales: Borgoña / Vino cálido (`#7A1C30`).
  - Tipografía Principal: Gris carbón (`#2C2C2C`) para máxima legibilidad.

### Backend
- **Framework Web:** Python / Flask.
- **ORM & Base de Datos:** Flask-SQLAlchemy con PostgreSQL (`db_banqueteshub`).
- **Seguridad & Sanitización:** `bleach` para neutralización de XSS, consultas parametrizadas del ORM contra SQLi y `werkzeug.security` para hashing criptográfico de contraseñas.
- **Cumplimiento PCI:** Almacenamiento exclusivo de los últimos 4 dígitos de la tarjeta (`card_last_four`).

---

## 🏗️ 2. Arquitectura de Dos Perfiles

```
                                  ┌──────────────────────────┐
                                  │   Banquetes HubFrontend     │
                                  │ (Polymer 2 + Neon + Zod) │
                                  └─────────────┬────────────┘
                                                │
                       ┌────────────────────────┴────────────────────────┐
                       ▼                                                 ▼
        ┌─────────────────────────────┐                   ┌─────────────────────────────┐
        │       Perfil Cliente        │                   │    Perfil Administración    │
        │      (100% Público)         │                   │      (Privado / Login)      │
        ├─────────────────────────────┤                   ├─────────────────────────────┤
        │ • Landing 6 Sucursales      │                   │ • Login con hash seguro     │
        │ • Cotizador interactivo     │                   │ • Bitácora completa de BD   │
        │ • Verificación tiempo real  │                   │ • Modal desglose servicios  │
        │ • Folio Único PZ-YYYY-XXXX  │                   │ • Baja Lógica (Soft Delete) │
        └──────────────┬──────────────┘                   └──────────────┬──────────────┘
                       │                                                 │
                       └────────────────────────┬────────────────────────┘
                                                │ REST API / JSON
                                                ▼
                                  ┌──────────────────────────┐
                                  │    Flask Backend API     │
                                  │ (Bleach + CORS + Auth)   │
                                  └─────────────┬────────────┘
                                                │ SQLAlchemy ORM
                                                ▼
                                  ┌──────────────────────────┐
                                  │  PostgreSQL Relational   │
                                  │    (db_banqueteshub)     │
                                  └──────────────────────────┘
```

### A) Perfil Cliente (Público, sin Login)
1. **Landing One-Page:** Presentación de las 6 Sucursales principales con botón único y centrado ("Cotizar Sucursal").
2. **Flujo de Reserva:** Selector dinámico de sucursal, fecha de evento, turno (`Matutino`, `Vespertino`, `Nocturno`) y servicios adicionales seleccionables con cálculo en tiempo real.
3. **Verificación de Disponibilidad:** Validación en backend para evitar empalmes en la misma terna `(branch_id, event_date, time_slot)`.
4. **Generación de Folio Único:** Formato `PZ-2026-XXXX`.
5. **Confirmación Oficial:**
   > *"Estamos confirmando tu reservación. Tu folio de seguimiento es [FOLIO]. Nos pondremos en contacto mediante correo"*

### B) Perfil Administración (Privado con Login)
1. **Acceso Administrativo:** Login validado por Zod y autenticado en Flask con credenciales seguras.
2. **Dashboard & Bitácora:** Visualización de todas las reservaciones en PostgreSQL con Folio, cliente, sucursal, fecha, turno, total y tarjeta de respaldo.
3. **Modal de Desglose:** Visualización de servicios contratados almacenados en `booking_services` con snapshot de precio unitario.
4. **Baja Lógica (Soft Delete):** Prohibido el uso de `DELETE` físico. Las cancelaciones modifican `is_active = False` preservando la trazabilidad.

---

## 🗄️ 3. Modelo Relacional de Base de Datos

| Tabla | Columnas Principales | Descripción / Restricciones |
|---|---|---|
| `users` | `id`, `username`, `password_hash`, `role`, `is_active`, `created_at` | Cuentas de administradores con contraseñas hasheadas. |
| `branches` | `id`, `name`, `capacity`, `base_price_mxn`, `image_url`, `description`, `address`, `is_active` | Sucursales Banquetes Hub(Cumbres, San Jerónimo, Valle Real, Linda Vista). |
| `services` | `id`, `name`, `price_mxn`, `category`, `description`, `is_active` | Catálogo de servicios adicionales (Banquete, DJ, Barra Libre, etc.). |
| `bookings` | `id`, `booking_folio`, `customer_name`, `customer_email`, `customer_phone`, `branch_id`, `event_date`, `time_slot`, `total_mxn`, `card_last_four`, `status`, `created_at`, `is_active` | Reservas oficiales. Restricción `UNIQUE(branch_id, event_date, time_slot)`. |
| `booking_services` | `id`, `booking_id`, `service_id`, `unit_price_mxn`, `is_active` | Relación N:M con snapshot de precio al momento de la reserva. |

---

## 🚀 4. Instrucciones de Instalación y Ejecución Local

### Prerrequisitos
- Node.js (v18+)
- Python (v3.10+)
- PostgreSQL (v14+)

### Paso 1: Configurar Variables de Entorno
Verifica o edita el archivo `backend/.env`:
```env
DB_HOST=localhost
DB_PORT=5432
DB_NAME=db_banqueteshub
DB_USER=postgres
DB_PASSWORD=root
SECRET_KEY=banquetes_hub_super_secret_production_key_2026
FLASK_ENV=development
PORT=5000
```

### Paso 2: Instalar Dependencias del Backend e Inicializar BD
```powershell
cd "D:\repos\Banquetes Hub\backend"
pip install -r requirements.txt
python init_db.py
```
> **Credenciales de Administrador por Defecto:**
> - **Usuario:** `admin`
> - **Contraseña:** `admin123`

### Paso 3: Iniciar el Servidor Backend Flask
```powershell
cd "D:\repos\Banquetes Hub\backend"
python app.py
```
*El backend quedará escuchando en `http://localhost:5000`.*

### Paso 4: Instalar Dependencias del Frontend e Iniciar Vite
```powershell
cd "D:\repos\Banquetes Hub\frontend"
npm install
npm run dev
```
*El frontend estará disponible en `http://localhost:5173`.*

### Paso 5: Compilación para Producción
```powershell
cd "D:\repos\Banquetes Hub\frontend"
npm run build
```
*Los artefactos optimizados se generarán en la carpeta `frontend/dist`.*

---

## 🧪 5. Pruebas y Validación de Endpoints
Para ejecutar las pruebas automáticas del backend:
```powershell
cd "D:\repos\Banquetes Hub\backend"
python -c "from test_api import *; print('API OK')"
```

---

## 📄 6. Convenciones de Código y Mantenimiento
- **JSDoc:** Todas las funciones, componentes y servicios en JavaScript cuentan con tipado y documentación estándar.
- **Docstrings:** Los modelos y controladores de Flask están debidamente documentados.
- **Assets:** Todas las rutas de imágenes y textos estáticos se encuentran centralizadas en `frontend/src/config/constants.js` con el tag `<!-- TODO: Update media asset path for production -->`.
