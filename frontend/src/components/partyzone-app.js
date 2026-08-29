import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import 'web-animations-js';

// Polyfill defensivo para timeline.play requerido por neon-animation en navegadores modernos
if (typeof document !== 'undefined') {
  if (!document.timeline) {
    document.timeline = { currentTime: 0 };
  }
  if (typeof document.timeline.play !== 'function') {
    document.timeline.play = function(anim) {
      try {
        if (anim && typeof anim.play === 'function') {
          return anim.play();
        }
      } catch (e) {
        console.warn('Animación neon omitida:', e);
      }
      return null;
    };
  }
}

import '@polymer/neon-animation/neon-animated-pages.js';
import '@polymer/neon-animation/neon-animatable.js';
import '@polymer/neon-animation/animations/fade-in-animation.js';
import '@polymer/neon-animation/animations/fade-out-animation.js';
import '@polymer/neon-animation/animations/slide-from-right-animation.js';
import '@polymer/neon-animation/animations/slide-left-animation.js';

import './partyzone-header.js';
import './partyzone-landing.js';
import './partyzone-booking.js';
import './partyzone-login.js';
import './partyzone-admin.js';
import { fetchBranches, fetchServices } from '../services/api.js';

/**
 * Componente principal contenedor de la aplicación PartyZone.
 * Controla la navegación entre vistas mediante @polymer/neon-animation.
 * @customElement
 * @polymer
 */
export class PartyZoneApp extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
          background-color: var(--pz-bg-main, #FDFBF7);
        }

        main {
          flex: 1 0 auto;
          display: block;
          position: relative;
          width: 100%;
          min-height: 70vh;
        }

        neon-animated-pages {
          display: block;
          position: relative;
          width: 100%;
          min-height: 70vh;
        }

        neon-animatable {
          display: block !important;
          position: relative !important;
          width: 100%;
          min-height: 70vh;
        }

        neon-animatable:not(.iron-selected) {
          display: none !important;
        }

        footer {
          background: #FFFFFF;
          border-top: 1px solid var(--pz-border-color, #E8E2D5);
          padding: 3rem 2rem 2rem;
          color: var(--pz-text-muted, #5E5E5E);
          margin-top: auto;
          position: relative;
          z-index: 10;
        }

        .footer-container {
          max-width: 1280px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 2.5rem;
          margin-bottom: 2rem;
        }

        .footer-brand h3 {
          font-size: 1.5rem;
          color: var(--pz-wine-main, #7A1C30);
          margin-bottom: 0.5rem;
        }

        .footer-brand p {
          font-size: 0.9rem;
          line-height: 1.5;
        }

        .footer-col h4 {
          font-size: 1rem;
          color: var(--pz-text-main, #2C2C2C);
          margin-bottom: 0.8rem;
          font-family: var(--pz-font-sans, sans-serif);
        }

        .footer-col ul {
          list-style: none;
          font-size: 0.88rem;
        }

        .footer-col ul li {
          margin-bottom: 0.5rem;
        }

        .footer-bottom {
          max-width: 1280px;
          margin: 0 auto;
          padding-top: 1.5rem;
          border-top: 1px solid var(--pz-border-subtle, #F0EAE1);
          text-align: center;
          font-size: 0.85rem;
        }
      </style>

      <partyzone-header 
        current-page="[[currentPage]]"
        is-admin-logged-in="[[isAdminLoggedIn]]"
        admin-user="[[adminUser]]"
        on-navigate="_onNavigate"
        on-logout="_onLogout">
      </partyzone-header>

      <main>
        <neon-animated-pages 
          selected="[[currentPageIndex]]" 
          entry-animation="fade-in-animation" 
          exit-animation="fade-out-animation">

          <!-- Página 0: Landing -->
          <neon-animatable>
            <partyzone-landing 
              branches="[[branches]]" 
              services="[[services]]"
              on-navigate="_onNavigate">
            </partyzone-landing>
          </neon-animatable>

          <!-- Página 1: Booking -->
          <neon-animatable>
            <partyzone-booking 
              id="bookingComponent"
              branches="[[branches]]" 
              services="[[services]]"
              on-navigate="_onNavigate">
            </partyzone-booking>
          </neon-animatable>

          <!-- Página 2: Login -->
          <neon-animatable>
            <partyzone-login 
              on-login-success="_onLoginSuccess">
            </partyzone-login>
          </neon-animatable>

          <!-- Página 3: Admin -->
          <neon-animatable>
            <partyzone-admin 
              id="adminComponent">
            </partyzone-admin>
          </neon-animatable>

        </neon-animated-pages>
      </main>

      <footer>
        <div class="footer-container">
          <div class="footer-brand">
            <h3>Banquetes Hub</h3>
            <p>La cadena de salones de banquetes y eventos más distinguida, con cobertura en Cumbres, San Jerónimo, Valle Real y Linda Vista.</p>
          </div>
          <div class="footer-col">
            <h4>Nuestras Sucursales</h4>
            <ul>
              <li>• Banquetes Hub Cumbres</li>
              <li>• Banquetes Hub San Jerónimo</li>
              <li>• Banquetes Hub Valle Real</li>
              <li>• Banquetes Hub Linda Vista</li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>Servicios & Banquetes</h4>
            <ul>
              <li>• Banquetes Gourmet 3 Tiempos</li>
              <li>• Audio & DJ Profesional</li>
              <li>• Barra Libre Premium</li>
              <li>• Cabinas 360° & Fotografía</li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>Atención & Soporte</h4>
            <ul>
              <li>• Horario: Lun - Dom 09:00 a 20:00 hrs</li>
              <li>• Tel: (81) 8000-BANQUETES</li>
              <li>• Correo: contacto@banqueteshub.mx</li>
            </ul>
          </div>
        </div>
        <div class="footer-bottom">
          &copy; 2026 Banquetes Hub | Salones de Eventos & Banquetes de Gala. Todos los derechos reservados.
        </div>
      </footer>
    `;
  }

  static get properties() {
    return {
      currentPage: {
        type: String,
        value: 'landing'
      },
      currentPageIndex: {
        type: Number,
        computed: '_computePageIndex(currentPage)'
      },
      branches: {
        type: Array,
        value: function() { return []; }
      },
      services: {
        type: Array,
        value: function() { return []; }
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

  ready() {
    super.ready();
    this._loadInitialData();
  }

  async _loadInitialData() {
    try {
      const [branchesData, servicesData] = await Promise.all([
        fetchBranches(),
        fetchServices()
      ]);
      this.branches = Array.isArray(branchesData) ? branchesData : [];
      this.services = Array.isArray(servicesData) ? servicesData : [];
    } catch (err) {
      console.error('Error al cargar catálogo inicial:', err);
      this.branches = [];
      this.services = [];
    }
  }

  _computePageIndex(page) {
    switch (page) {
      case 'landing': return 0;
      case 'booking': return 1;
      case 'login': return 2;
      case 'admin': return 3;
      default: return 0;
    }
  }

  _onNavigate(e) {
    try {
      const targetPage = e.detail?.page || 'landing';
      this.currentPage = targetPage;

      if (targetPage === 'booking' && e.detail?.branchId) {
        const bookingEl = this.$.bookingComponent;
        if (bookingEl) {
          bookingEl.selectedBranchId = Number(e.detail.branchId);
        }
      }

      if (targetPage === 'admin' && !this.isAdminLoggedIn) {
        this.currentPage = 'login';
      }

      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (err) {
      console.warn('Fallback visual activado (Animación omitida de forma segura):', err);
    }
  }

  _onLoginSuccess(e) {
    try {
      this.isAdminLoggedIn = true;
      this.adminUser = e.detail?.user?.username || 'Administrador';
      this.currentPage = 'admin';
      const adminEl = this.$.adminComponent;
      if (adminEl && typeof adminEl._loadBookings === 'function') {
        adminEl._loadBookings();
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (err) {
      console.warn('Fallback visual en login activado:', err);
    }
  }

  _onLogout() {
    try {
      this.isAdminLoggedIn = false;
      this.adminUser = '';
      this.currentPage = 'landing';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (err) {
      console.warn('Fallback visual en logout activado:', err);
    }
  }
}

customElements.define('partyzone-app', PartyZoneApp);
