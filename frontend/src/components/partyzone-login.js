import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/polymer/lib/elements/dom-if.js';
import { loginSchema } from '../schemas/validation.js';
import { adminLogin } from '../services/api.js';

/**
 * Componente de inicio de sesión administrativo para PartyZone.
 * @customElement
 * @polymer
 */
export class PartyZoneLogin extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
          max-width: 480px;
          margin: 4rem auto;
          padding: 0 1.5rem;
        }

        .login-card {
          background: #FFFFFF;
          border-radius: 14px;
          border: 1px solid var(--pz-border-color, #E8E2D5);
          box-shadow: 0 8px 30px rgba(122, 28, 48, 0.08);
          padding: 2.8rem 2.2rem;
          text-align: center;
        }

        .login-icon {
          width: 58px;
          height: 58px;
          background: var(--pz-wine-soft, #F9ECEE);
          border: 1px solid var(--pz-gold-main, #D4AF37);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.2rem;
          color: var(--pz-wine-main, #7A1C30);
          font-size: 1.6rem;
        }

        .login-title {
          font-size: 1.8rem;
          color: var(--pz-wine-main, #7A1C30);
          margin-bottom: 0.4rem;
        }

        .login-subtitle {
          font-size: 0.9rem;
          color: var(--pz-text-muted, #5E5E5E);
          margin-bottom: 2rem;
        }

        .form-group {
          margin-bottom: 1.4rem;
          text-align: left;
        }

        label {
          display: block;
          font-size: 0.88rem;
          font-weight: 600;
          color: var(--pz-text-main, #2C2C2C);
          margin-bottom: 0.4rem;
        }

        input[type="text"],
        input[type="password"] {
          width: 100%;
          padding: 0.75rem 1rem;
          border: 1px solid var(--pz-border-color, #E8E2D5);
          border-radius: 8px;
          font-family: var(--pz-font-sans, sans-serif);
          font-size: 0.95rem;
          color: var(--pz-text-main, #2C2C2C);
          background: var(--pz-bg-main, #FDFBF7);
          box-sizing: border-box;
          transition: all 0.2s ease;
        }

        input:focus {
          outline: none;
          border-color: var(--pz-gold-main, #D4AF37);
          box-shadow: 0 0 0 3px rgba(212, 175, 55, 0.2);
          background: #FFFFFF;
        }

        .btn-login {
          width: 100%;
          background: var(--pz-wine-main, #7A1C30);
          color: #FFFFFF;
          font-size: 1rem;
          font-weight: 700;
          padding: 0.85rem;
          border-radius: 8px;
          border: 1px solid var(--pz-gold-main, #D4AF37);
          box-shadow: 0 4px 12px rgba(122, 28, 48, 0.2);
          transition: all 0.25s ease;
          margin-top: 1rem;
        }

        .btn-login:hover:not(:disabled) {
          background: var(--pz-wine-hover, #5E1423);
          transform: translateY(-1px);
        }

        .btn-login:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .alert-error {
          background: #FDF0ED;
          color: #8C1D18;
          border: 1px solid #F5C6CB;
          padding: 0.75rem 1rem;
          border-radius: 8px;
          font-size: 0.88rem;
          margin-bottom: 1.4rem;
          text-align: left;
        }

        .demo-credentials-box {
          margin-top: 1.8rem;
          padding: 0.8rem;
          background: var(--pz-bg-subtle, #F7F3EB);
          border-radius: 6px;
          font-size: 0.8rem;
          color: var(--pz-text-muted, #5E5E5E);
          border: 1px dashed var(--pz-border-color, #E8E2D5);
        }
      </style>

      <div class="login-card">
        <div class="login-icon">🔒</div>
        <h2 class="login-title">Acceso Administrativo</h2>
        <p class="login-subtitle">Gestión de Reservas y Bitácora</p>

        <template is="dom-if" if="[[errorMessage]]">
          <div class="alert-error">
            [[errorMessage]]
          </div>
        </template>

        <form on-submit="_handleSubmit">
          <div class="form-group">
            <label for="username">Usuario</label>
            <input id="username" type="text" placeholder="admin" value="{{username::input}}" required />
          </div>

          <div class="form-group">
            <label for="password">Contraseña</label>
            <input id="password" type="password" placeholder="••••••••" value="{{password::input}}" required />
          </div>

          <button type="submit" class="btn-login" disabled$="[[loading]]">
            <template is="dom-if" if="[[!loading]]">
              Ingresar al Panel
            </template>
            <template is="dom-if" if="[[loading]]">
              Autenticando...
            </template>
          </button>
        </form>

        <div class="demo-credentials-box">
          Credenciales por defecto: <strong>admin</strong> / <strong>admin123</strong>
        </div>
      </div>
    `;
  }

  static get properties() {
    return {
      username: {
        type: String,
        value: ''
      },
      password: {
        type: String,
        value: ''
      },
      loading: {
        type: Boolean,
        value: false
      },
      errorMessage: {
        type: String,
        value: ''
      }
    };
  }

  async _handleSubmit(e) {
    if (e) e.preventDefault();
    this.errorMessage = '';

    const payload = {
      username: (this.username || '').trim(),
      password: (this.password || '').trim()
    };

    // Validación cliente Zod
    const validation = loginSchema.safeParse(payload);
    if (!validation.success) {
      this.errorMessage = validation.error.errors[0]?.message || 'Verifica los campos ingresados.';
      return;
    }

    this.loading = true;

    try {
      const response = await adminLogin(payload.username, payload.password);
      this.dispatchEvent(new CustomEvent('login-success', {
        bubbles: true,
        composed: true,
        detail: {
          token: response.token,
          user: response.user
        }
      }));
    } catch (err) {
      this.errorMessage = err.message || 'Error al iniciar sesión';
    } finally {
      this.loading = false;
    }
  }
}

customElements.define('partyzone-login', PartyZoneLogin);
