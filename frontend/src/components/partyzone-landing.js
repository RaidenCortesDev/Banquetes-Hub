import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/polymer/lib/elements/dom-repeat.js';
import { BRAND_TEXTS, ASSET_PATHS, formatMXN } from '../config/constants.js';

/**
 * Componente Landing Page One-Page para PartyZone.
 * Muestra el Hero banner, las 6 Sucursales principales con botón único de cotización y paquetes.
 * @customElement
 * @polymer
 */
export class PartyZoneLanding extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }

        /* Hero Section */
        .hero-section {
          position: relative;
          background: linear-gradient(rgba(44, 44, 44, 0.55), rgba(122, 28, 48, 0.65)),
                      url('https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1600&q=80') center/cover no-repeat;
          color: #FFFFFF;
          padding: 6rem 2rem 7rem;
          text-align: center;
        }

        .hero-content {
          max-width: 900px;
          margin: 0 auto;
        }

        .hero-badge {
          display: inline-block;
          background: rgba(212, 175, 55, 0.25);
          border: 1px solid var(--pz-gold-main, #D4AF37);
          color: var(--pz-gold-light, #F3E5AB);
          padding: 0.4rem 1.2rem;
          border-radius: 20px;
          font-size: 0.85rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin-bottom: 1.5rem;
          backdrop-filter: blur(4px);
        }

        .hero-title {
          font-size: 3.2rem;
          font-family: var(--pz-font-serif, 'Playfair Display', Georgia, serif);
          color: #FFFFFF;
          line-height: 1.15;
          margin-bottom: 1.25rem;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.4);
        }

        .hero-subtitle {
          font-size: 1.15rem;
          font-family: var(--pz-font-sans, sans-serif);
          color: #FDFBF7;
          margin-bottom: 2.5rem;
          line-height: 1.6;
          font-weight: 300;
        }

        .hero-actions {
          display: flex;
          justify-content: center;
          gap: 1.2rem;
          flex-wrap: wrap;
        }

        .btn-hero-primary {
          background: var(--pz-wine-main, #7A1C30);
          color: #FFFFFF;
          font-size: 1.05rem;
          font-weight: 600;
          padding: 0.9rem 2.2rem;
          border-radius: 30px;
          border: 1px solid var(--pz-gold-main, #D4AF37);
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
          transition: all 0.3s ease;
        }

        .btn-hero-primary:hover {
          background: var(--pz-wine-hover, #5E1423);
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4);
        }

        .btn-hero-secondary {
          background: rgba(255, 255, 255, 0.15);
          color: #FFFFFF;
          font-size: 1.05rem;
          font-weight: 600;
          padding: 0.9rem 2.2rem;
          border-radius: 30px;
          border: 1px solid #FFFFFF;
          backdrop-filter: blur(6px);
          transition: all 0.3s ease;
        }

        .btn-hero-secondary:hover {
          background: rgba(255, 255, 255, 0.3);
          transform: translateY(-2px);
        }

        /* Features Bar */
        .features-bar {
          background: #FFFFFF;
          border-bottom: 1px solid var(--pz-border-color, #E8E2D5);
          padding: 2rem 1.5rem;
          box-shadow: 0 4px 15px rgba(122, 28, 48, 0.04);
        }

        .features-grid {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 2rem;
        }

        .feature-item {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .feature-icon {
          width: 48px;
          height: 48px;
          background: var(--pz-wine-soft, #F9ECEE);
          border: 1px solid var(--pz-gold-border, #E6D29A);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--pz-wine-main, #7A1C30);
          font-size: 1.3rem;
          font-weight: bold;
          flex-shrink: 0;
        }

        .feature-text h4 {
          font-family: var(--pz-font-sans, sans-serif);
          font-size: 0.95rem;
          color: var(--pz-text-main, #2C2C2C);
          font-weight: 700;
        }

        .feature-text p {
          font-size: 0.85rem;
          color: var(--pz-text-muted, #5E5E5E);
        }

        /* Branches Section */
        .branches-section {
          max-width: 1280px;
          margin: 0 auto;
          padding: 5rem 2rem 4rem;
        }

        .section-header {
          text-align: center;
          margin-bottom: 3.5rem;
        }

        .section-tag {
          color: var(--pz-gold-dark, #B89325);
          font-weight: 700;
          text-transform: uppercase;
          font-size: 0.85rem;
          letter-spacing: 0.15em;
          margin-bottom: 0.5rem;
          display: block;
        }

        .section-title {
          font-size: 2.4rem;
          color: var(--pz-wine-main, #7A1C30);
          margin-bottom: 1rem;
        }

        .section-desc {
          max-width: 650px;
          margin: 0 auto;
          color: var(--pz-text-muted, #5E5E5E);
          font-size: 1.05rem;
        }

        .branches-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2.2rem;
        }

        .branch-card {
          background: #FFFFFF;
          border-radius: 14px;
          overflow: hidden;
          box-shadow: 0 6px 22px rgba(122, 28, 48, 0.08);
          border: 1px solid var(--pz-border-color, #E8E2D5);
          display: flex;
          flex-direction: column;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .branch-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 14px 35px rgba(122, 28, 48, 0.14);
          border-color: var(--pz-gold-main, #D4AF37);
        }

        .branch-image-wrapper {
          position: relative;
          height: 220px;
          overflow: hidden;
          background: #EFE8DB;
        }

        .branch-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .branch-card:hover .branch-image {
          transform: scale(1.05);
        }

        .branch-capacity-badge {
          position: absolute;
          top: 14px;
          right: 14px;
          background: rgba(44, 44, 44, 0.85);
          color: #FFFFFF;
          font-size: 0.8rem;
          font-weight: 600;
          padding: 0.35rem 0.8rem;
          border-radius: 20px;
          border: 1px solid var(--pz-gold-main, #D4AF37);
          backdrop-filter: blur(4px);
        }

        .branch-body {
          padding: 1.8rem 1.6rem;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        .branch-name {
          font-size: 1.4rem;
          color: var(--pz-text-main, #2C2C2C);
          margin-bottom: 0.4rem;
        }

        .branch-address {
          font-size: 0.85rem;
          color: var(--pz-text-muted, #5E5E5E);
          margin-bottom: 0.9rem;
          display: flex;
          align-items: center;
          gap: 0.3rem;
        }

        .branch-description {
          font-size: 0.92rem;
          color: var(--pz-text-main, #2C2C2C);
          line-height: 1.5;
          margin-bottom: 1.4rem;
          flex-grow: 1;
        }

        .branch-pricing-box {
          background: var(--pz-bg-subtle, #F7F3EB);
          border: 1px solid var(--pz-gold-border, #E6D29A);
          border-radius: 10px;
          padding: 1rem;
          margin-bottom: 1.4rem;
          text-align: center;
        }

        .pricing-label {
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--pz-gold-dark, #B89325);
          font-weight: 700;
        }

        .pricing-amount {
          font-size: 1.35rem;
          font-weight: 700;
          color: var(--pz-wine-main, #7A1C30);
          font-family: var(--pz-font-serif, Georgia, serif);
        }

        /* REGLA CRÍTICA: UN SOLO BOTÓN LIMPIO Y CENTRADO */
        .branch-action-container {
          text-align: center;
          margin-top: auto;
        }

        .btn-quote-branch {
          width: 100%;
          background: var(--pz-wine-main, #7A1C30);
          color: #FFFFFF;
          font-size: 0.95rem;
          font-weight: 700;
          padding: 0.85rem 1.5rem;
          border-radius: 8px;
          border: 1px solid var(--pz-gold-main, #D4AF37);
          transition: all 0.25s ease;
          box-shadow: 0 3px 10px rgba(122, 28, 48, 0.15);
        }

        .btn-quote-branch:hover {
          background: var(--pz-wine-hover, #5E1423);
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(122, 28, 48, 0.25);
        }

        /* Services & Packages Section */
        .packages-section {
          background: var(--pz-bg-subtle, #F7F3EB);
          border-top: 1px solid var(--pz-border-color, #E8E2D5);
          padding: 5rem 2rem 6rem;
        }

        .packages-container {
          max-width: 1280px;
          margin: 0 auto;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 1.8rem;
        }

        .service-card {
          background: #FFFFFF;
          border-radius: 12px;
          padding: 1.8rem;
          border: 1px solid var(--pz-border-color, #E8E2D5);
          box-shadow: 0 4px 15px rgba(122, 28, 48, 0.05);
          display: flex;
          flex-direction: column;
        }

        .service-category {
          display: inline-block;
          align-self: flex-start;
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--pz-gold-dark, #B89325);
          text-transform: uppercase;
          letter-spacing: 0.08em;
          background: var(--pz-bg-subtle, #F7F3EB);
          padding: 0.25rem 0.6rem;
          border-radius: 6px;
          margin-bottom: 0.7rem;
        }

        .service-name {
          font-size: 1.25rem;
          color: var(--pz-text-main, #2C2C2C);
          margin-bottom: 0.5rem;
        }

        .service-desc {
          font-size: 0.9rem;
          color: var(--pz-text-muted, #5E5E5E);
          line-height: 1.5;
          margin-bottom: 1.2rem;
          flex-grow: 1;
        }

        .service-price {
          font-size: 1.2rem;
          font-weight: 700;
          color: var(--pz-wine-main, #7A1C30);
          font-family: var(--pz-font-serif, Georgia, serif);
          margin-bottom: 1rem;
        }

        .btn-choose-package {
          width: 100%;
          background: #FFFFFF;
          color: var(--pz-wine-main, #7A1C30);
          font-size: 0.9rem;
          font-weight: 700;
          padding: 0.75rem 1.2rem;
          border-radius: 8px;
          border: 1.5px solid var(--pz-wine-main, #7A1C30);
          transition: all 0.25s ease;
        }

        .btn-choose-package:hover {
          background: var(--pz-wine-main, #7A1C30);
          color: #FFFFFF;
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.2rem;
          }
          .hero-section {
            padding: 4rem 1.5rem;
          }
        }
      </style>

      <!-- Hero Banner -->
      <section class="hero-section">
        <div class="hero-content">
          <span class="hero-badge">Excelencia & Tradición en Eventos</span>
          <h1 class="hero-title">Momentos Inolvidables en el Salón Perfecto</h1>
          <p class="hero-subtitle">
            Descubre nuestras 6 exclusivas sucursales diseñadas para bodas de ensueño, XV años mágicos, aniversarios de gala y eventos corporativos con la más alta distinción.
          </p>
          <div class="hero-actions">
            <button class="btn-hero-primary" on-click="_scrollToBranches">
              Explorar Salones
            </button>
            <button class="btn-hero-secondary" on-click="_goToBooking">
              Cotizar en Línea
            </button>
          </div>
        </div>
      </section>

      <!-- Features Bar -->
      <section class="features-bar">
        <div class="features-grid">
          <div class="feature-item">
            <div class="feature-icon">★</div>
            <div class="feature-text">
              <h4>Capacidad desde 200 a 500 Pax</h4>
              <p>Espacios versátiles y climatizados</p>
            </div>
          </div>
          <div class="feature-item">
            <div class="feature-icon">✓</div>
            <div class="feature-text">
              <h4>Garantía de Disponibilidad</h4>
              <p>Reserva en tiempo real con folio único</p>
            </div>
          </div>
          <div class="feature-item">
            <div class="feature-icon">♦</div>
            <div class="feature-text">
              <h4>Banquetería & Show de Luces</h4>
              <p>Servicios integrales de primer nivel</p>
            </div>
          </div>
          <div class="feature-item">
            <div class="feature-icon">♥</div>
            <div class="feature-text">
              <h4>Atención Personalizada</h4>
              <p>Asesoría experta para tu evento</p>
            </div>
          </div>
        </div>
      </section>

      <!-- 4 Branches Showcase -->
      <section id="branches" class="branches-section">
        <div class="section-header">
          <span class="section-tag">Nuestras Sedes Exclusivas</span>
          <h2 class="section-title">6 Sucursales Diseñadas para Celebrar</h2>
          <p class="section-desc">
            Cada salón ofrece un concepto arquitectónico único, estacionamiento privado, suite nupcial y la mejor acústica de la ciudad.
          </p>
        </div>

        <div class="branches-grid">
          <template is="dom-repeat" items="[[branches]]" as="branch">
            <div class="branch-card">
              <div class="branch-image-wrapper">
                <!-- TODO: Update media asset path for production -->
                <img class="branch-image" src$="[[branch.image_url]]" alt$="[[branch.name]]" loading="lazy" />
                <span class="branch-capacity-badge">Capacidad: [[branch.capacity]] Personas</span>
              </div>
              <div class="branch-body">
                <h3 class="branch-name">[[branch.name]]</h3>
                <div class="branch-address">
                  <span>📍 [[branch.address]]</span>
                </div>
                <p class="branch-description">[[branch.description]]</p>
                <div class="branch-pricing-box">
                  <div class="pricing-label">Precio Base Salón</div>
                  <div class="pricing-amount">[[_formatPrice(branch.base_price_mxn)]]</div>
                </div>
                <!-- UN SOLO BOTÓN LIMPIO Y CENTRADO -->
                <div class="branch-action-container">
                  <button class="btn-quote-branch" on-click="_selectBranchToQuote">
                    Cotizar Sucursal
                  </button>
                </div>
              </div>
            </div>
          </template>
        </div>
      </section>

      <!-- Packages & Additional Services Section -->
      <section class="packages-section">
        <div class="packages-container">
          <div class="section-header">
            <span class="section-tag">Servicios Integrales</span>
            <h2 class="section-title">Complementa tu Fiesta de Ensueño</h2>
            <p class="section-desc">
              Agrega servicios prémium a tu paquete con transparencia de costos en Pesos Mexicanos.
            </p>
          </div>

          <div class="services-grid">
            <template is="dom-repeat" items="[[services]]" as="service">
              <div class="service-card">
                <span class="service-category">[[service.category]]</span>
                <h4 class="service-name">[[service.name]]</h4>
                <p class="service-desc">[[service.description]]</p>
                <div class="service-price">[[_formatPrice(service.price_mxn)]]</div>
                <!-- UN SOLO BOTÓN LIMPIO Y CENTRADO -->
                <button class="btn-choose-package" on-click="_goToBooking">
                  Elegir Paquete
                </button>
              </div>
            </template>
          </div>
        </div>
      </section>
    `;
  }

  static get properties() {
    return {
      branches: {
        type: Array,
        value: () => []
      },
      services: {
        type: Array,
        value: () => []
      }
    };
  }

  _formatPrice(amount) {
    return formatMXN(amount);
  }

  _scrollToBranches() {
    const el = this.shadowRoot.querySelector('#branches');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }

  _goToBooking() {
    this.dispatchEvent(new CustomEvent('navigate', {
      bubbles: true,
      composed: true,
      detail: { page: 'booking' }
    }));
  }

  _selectBranchToQuote(e) {
    const branch = e.model.branch;
    this.dispatchEvent(new CustomEvent('navigate', {
      bubbles: true,
      composed: true,
      detail: { page: 'booking', branchId: branch.id }
    }));
  }
}

customElements.define('partyzone-landing', PartyZoneLanding);
