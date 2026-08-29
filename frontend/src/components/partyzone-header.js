import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import { BRAND_TEXTS, ASSET_PATHS } from '../config/constants.js';

/**
 * Componente de encabezado elegante para PartyZone.
 * @customElement
 * @polymer
 */
export class PartyZoneHeader extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
          background: #FFFFFF;
          border-bottom: 2px solid var(--pz-gold-border, #E6D29A);
          box-shadow: 0 4px 15px rgba(122, 28, 48, 0.05);
          position: sticky;
          top: 0;
          z-index: 1000;
        }

        .header-container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 1rem 2rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .brand-link {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          text-decoration: none;
          cursor: pointer;
        }

        .brand-icon {
          width: 42px;
          height: 42px;
          background: linear-gradient(135deg, var(--pz-gold-main, #D4AF37), var(--pz-wine-main, #7A1C30));
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #FFFFFF;
          font-family: var(--pz-font-serif, Georgia, serif);
          font-size: 1.5rem;
          font-weight: bold;
          box-shadow: 0 2px 6px rgba(122, 28, 48, 0.2);
        }

        .brand-titles {
          display: flex;
          flex-direction: column;
        }

        .brand-name {
          font-family: var(--pz-font-serif, 'Playfair Display', Georgia, serif);
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--pz-wine-main, #7A1C30);
          letter-spacing: 0.03em;
          line-height: 1.1;
        }

        .brand-subtitle {
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--pz-gold-dark, #B89325);
          text-transform: uppercase;
          letter-spacing: 0.12em;
        }

        nav.nav-links {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }

        .nav-btn {
          background: transparent;
          color: var(--pz-text-main, #2C2C2C);
          font-size: 0.95rem;
          font-weight: 600;
          padding: 0.5rem 1rem;
          border-radius: 6px;
          transition: all 0.2s ease;
          border: 1px solid transparent;
        }

        .nav-btn:hover {
          color: var(--pz-wine-main, #7A1C30);
          background: var(--pz-bg-subtle, #F7F3EB);
        }

        .nav-btn.active {
          color: var(--pz-wine-main, #7A1C30);
          border-bottom: 2px solid var(--pz-gold-main, #D4AF37);
          font-weight: 700;
        }

        .cta-btn {
          background: var(--pz-wine-main, #7A1C30);
          color: #FFFFFF;
          font-weight: 600;
          font-size: 0.95rem;
          padding: 0.6rem 1.4rem;
          border-radius: 25px;
          border: 1px solid var(--pz-gold-main, #D4AF37);
          box-shadow: 0 3px 10px rgba(122, 28, 48, 0.2);
          transition: all 0.25s ease;
        }

        .cta-btn:hover {
          background: var(--pz-wine-hover, #5E1423);
          transform: translateY(-1px);
          box-shadow: 0 5px 14px rgba(122, 28, 48, 0.3);
        }

        .admin-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          background: var(--pz-wine-soft, #F9ECEE);
          color: var(--pz-wine-main, #7A1C30);
          padding: 0.35rem 0.8rem;
          border-radius: 12px;
          font-size: 0.8rem;
          font-weight: 700;
          border: 1px solid var(--pz-gold-border, #E6D29A);
        }

        @media (max-width: 768px) {
          .header-container {
            flex-direction: column;
            text-align: center;
          }
          nav.nav-links {
            flex-wrap: wrap;
            justify-content: center;
          }
        }
      </style>

      <header>
        <div class="header-container">
          <div class="brand-link" on-click="_navigateToLanding">
            <div class="brand-icon" style="font-size: 1.1rem; letter-spacing: 0.05em;">BH</div>
            <div class="brand-titles">
              <span class="brand-name">Banquetes Hub</span>
              <span class="brand-subtitle">Salones de Eventos</span>
            </div>
          </div>

          <nav class="nav-links">
            <button class$="nav-btn [[_computeActiveClass(currentPage, 'landing')]]" on-click="_navigateToLanding">
              Inicio & Salones
            </button>


            <template is="dom-if" if="[[!isAdminLoggedIn]]">
              <button class$="nav-btn [[_computeActiveClass(currentPage, 'login')]]" on-click="_navigateToLogin">
                Acceso Personal
              </button>
            </template>

            <template is="dom-if" if="[[isAdminLoggedIn]]">
              <button class$="nav-btn [[_computeActiveClass(currentPage, 'admin')]]" on-click="_navigateToAdmin">
                Panel Administrativo
              </button>
              <div class="admin-badge">Admin: [[adminUser]]</div>
              <button class="nav-btn" on-click="_handleLogout" style="color: #93263D;">
                Cerrar Sesión
              </button>
            </template>

            <button class="cta-btn" on-click="_navigateToBooking">
              Reservar Fecha
            </button>
          </nav>
        </div>
      </header>
    `;
  }

  static get properties() {
    return {
      currentPage: {
        type: String,
        value: 'landing'
      },
      isAdminLoggedIn: {
        type: Boolean,
        value: false
      },
      adminUser: {
        type: String,
        value: ''
      }
    };
  }

  _computeActiveClass(current, target) {
    return current === target ? 'active' : '';
  }

  _navigateToLanding() {
    this.dispatchEvent(new CustomEvent('navigate', { bubbles: true, composed: true, detail: { page: 'landing' } }));
  }

  _navigateToBooking() {
    this.dispatchEvent(new CustomEvent('navigate', { bubbles: true, composed: true, detail: { page: 'booking' } }));
  }

  _navigateToLogin() {
    this.dispatchEvent(new CustomEvent('navigate', { bubbles: true, composed: true, detail: { page: 'login' } }));
  }

  _navigateToAdmin() {
    this.dispatchEvent(new CustomEvent('navigate', { bubbles: true, composed: true, detail: { page: 'admin' } }));
  }

  _handleLogout() {
    this.dispatchEvent(new CustomEvent('logout', { bubbles: true, composed: true }));
  }
}

customElements.define('partyzone-header', PartyZoneHeader);
