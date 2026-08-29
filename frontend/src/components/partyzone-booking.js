import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/polymer/lib/elements/dom-repeat.js';
import '@polymer/polymer/lib/elements/dom-if.js';
import { TIME_SLOTS, formatMXN, BRAND_TEXTS } from '../config/constants.js';
import { bookingSchema } from '../schemas/validation.js';
import { checkAvailability, createBooking } from '../services/api.js';

/**
 * Componente interactivo para cotización, verificación de disponibilidad y reserva.
 * @customElement
 * @polymer
 */
export class PartyZoneBooking extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
          width: 100%;
          min-height: 80vh;
          position: relative;
          z-index: 1;
          background-color: var(--pz-bg-main, #FDFBF7);
          padding: 2.5rem 0 4rem;
        }

        .booking-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
          position: relative;
          z-index: 2;
        }

        .booking-header {
          text-align: center;
          margin-bottom: 2.5rem;
        }

        .booking-tag {
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--pz-gold-dark, #B89325);
          text-transform: uppercase;
          letter-spacing: 0.12em;
        }

        .booking-title {
          font-size: 2.4rem;
          color: var(--pz-wine-main, #7A1C30);
          margin-top: 0.3rem;
        }

        .booking-subtitle {
          color: var(--pz-text-muted, #5E5E5E);
          max-width: 600px;
          margin: 0.5rem auto 0;
          font-size: 1rem;
        }

        /* Layout Grid */
        .booking-layout {
          display: grid;
          grid-template-columns: 1fr 380px;
          gap: 24px;
          max-width: 1100px;
          margin: 0 auto;
          align-items: start;
          width: 100%;
          position: relative;
        }

        .booking-form-card {
          background: #FFFFFF;
          border-radius: 14px;
          border: 1px solid var(--pz-border-color, #E8E2D5);
          box-shadow: 0 6px 25px rgba(122, 28, 48, 0.07);
          padding: 2.2rem 2.2rem 2.2rem 2.2rem;
          padding-right: 24px;
          box-sizing: border-box;
          position: relative;
        }

        .summary-card {
          background: #FFFFFF;
          border-radius: 14px;
          border: 1px solid var(--pz-border-color, #E8E2D5);
          box-shadow: 0 6px 25px rgba(122, 28, 48, 0.07);
          padding: 2.2rem;
          position: sticky;
          top: 24px;
        }

        .confirmation-card {
          background: #FFFFFF;
          border-radius: 14px;
          border: 1px solid var(--pz-border-color, #E8E2D5);
          box-shadow: 0 6px 25px rgba(122, 28, 48, 0.07);
          padding: 2.2rem;
        }

        .exp-input-group {
          display: flex;
          align-items: center;
          gap: 8px;
          width: auto;
        }

        .exp-input-group input {
          width: 60px;
          text-align: center;
          padding: 0.75rem 0.5rem;
          box-sizing: border-box;
        }

        .exp-divider {
          font-size: 1.2rem;
          font-weight: bold;
          color: var(--pz-text-muted, #5E5E5E);
        }

        .form-section-title {
          font-size: 1.25rem;
          color: var(--pz-wine-main, #7A1C30);
          margin-bottom: 1.2rem;
          padding-bottom: 0.5rem;
          border-bottom: 1px solid var(--pz-border-subtle, #F0EAE1);
          display: flex;
          align-items: center;
          gap: 0.6rem;
        }

        .form-section-title .step-num {
          background: var(--pz-wine-main, #7A1C30);
          color: #FFFFFF;
          width: 26px;
          height: 26px;
          border-radius: 50%;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-size: 0.85rem;
          font-family: var(--pz-font-sans, sans-serif);
        }

        .form-group {
          margin-bottom: 1.4rem;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }

        label {
          display: block;
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--pz-text-main, #2C2C2C);
          margin-bottom: 0.4rem;
        }

        .required-star {
          color: var(--pz-wine-main, #7A1C30);
        }

        input[type="text"],
        input[type="email"],
        input[type="tel"],
        input[type="date"],
        select {
          width: 100%;
          padding: 0.75rem 1rem;
          border: 1px solid var(--pz-border-color, #E8E2D5);
          border-radius: 8px;
          font-family: var(--pz-font-sans, sans-serif);
          font-size: 0.95rem;
          color: var(--pz-text-main, #2C2C2C);
          background: var(--pz-bg-main, #FDFBF7);
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
          box-sizing: border-box;
          max-width: 100%;
        }

        input:focus, select:focus {
          outline: none;
          border-color: var(--pz-gold-main, #D4AF37);
          box-shadow: 0 0 0 3px rgba(212, 175, 55, 0.2);
          background: #FFFFFF;
        }

        /* ── Fix de desborde estricto para inputs específicos ── */
        #eventDate,
        #cardHolder {
          width: 100%;
          max-width: 100%;
          box-sizing: border-box;
          overflow: hidden;
          display: block;
        }

        /* ── Datepicker premium: herencia tipográfica + theming Guinda/Dorado ── */
        input[type="date"] {
          font-family: inherit;
          cursor: pointer;
          position: relative;
        }

        /* Quitar el ícono nativo de calendario en Chrome/Edge y reemplazar visualmente */
        input[type="date"]::-webkit-calendar-picker-indicator {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%237A1C30' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect x='3' y='4' width='18' height='18' rx='2' ry='2'%3E%3C/rect%3E%3Cline x1='16' y1='2' x2='16' y2='6'%3E%3C/line%3E%3Cline x1='8' y1='2' x2='8' y2='6'%3E%3C/line%3E%3Cline x1='3' y1='10' x2='21' y2='10'%3E%3C/line%3E%3C/svg%3E");
          background-size: 16px 16px;
          background-repeat: no-repeat;
          background-position: center;
          width: 20px;
          height: 20px;
          opacity: 0.75;
          cursor: pointer;
          border-radius: 4px;
          padding: 2px;
          transition: opacity 0.2s ease, background-color 0.2s ease;
        }

        input[type="date"]::-webkit-calendar-picker-indicator:hover {
          opacity: 1;
          background-color: rgba(122, 28, 48, 0.08);
        }

        input[type="date"]::-webkit-datetime-edit {
          font-family: inherit;
          color: var(--pz-text-main, #2C2C2C);
        }

        input[type="date"]::-webkit-datetime-edit-fields-wrapper {
          padding: 0;
        }

        input[type="date"]::-webkit-datetime-edit-month-field,
        input[type="date"]::-webkit-datetime-edit-day-field,
        input[type="date"]::-webkit-datetime-edit-year-field {
          font-family: inherit;
          color: var(--pz-text-main, #2C2C2C);
          border-radius: 3px;
          padding: 0 2px;
        }

        input[type="date"]::-webkit-datetime-edit-month-field:focus,
        input[type="date"]::-webkit-datetime-edit-day-field:focus,
        input[type="date"]::-webkit-datetime-edit-year-field:focus {
          background: rgba(122, 28, 48, 0.10);
          color: var(--pz-wine-main, #7A1C30);
          outline: none;
        }

        input[type="date"]::-webkit-datetime-edit-text {
          color: var(--pz-gold-main, #D4AF37);
          font-weight: 700;
          padding: 0 2px;
        }

        /* Branch Selector Cards */
        .branch-options-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 1rem;
          margin-bottom: 1.5rem;
        }

        .branch-option-card {
          border: 2px solid var(--pz-border-color, #E8E2D5);
          border-radius: 10px;
          padding: 1rem;
          cursor: pointer;
          transition: all 0.2s ease;
          background: var(--pz-bg-main, #FDFBF7);
        }

        .branch-option-card:hover {
          border-color: var(--pz-gold-main, #D4AF37);
          background: #FFFFFF;
        }

        .branch-option-card.selected {
          border-color: var(--pz-wine-main, #7A1C30);
          background: var(--pz-wine-soft, #F9ECEE);
        }

        .branch-option-name {
          font-weight: 700;
          color: var(--pz-text-main, #2C2C2C);
          font-size: 1rem;
        }

        .branch-option-price {
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--pz-wine-main, #7A1C30);
          margin-top: 0.3rem;
        }

        /* Slot Selector */
        .slot-options-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0.8rem;
        }

        .slot-option-card {
          border: 2px solid var(--pz-border-color, #E8E2D5);
          border-radius: 8px;
          padding: 0.8rem;
          text-align: center;
          cursor: pointer;
          transition: all 0.2s ease;
          background: var(--pz-bg-main, #FDFBF7);
        }

        .slot-option-card:hover {
          border-color: var(--pz-gold-main, #D4AF37);
        }

        .slot-option-card.selected {
          border-color: var(--pz-wine-main, #7A1C30);
          background: var(--pz-wine-soft, #F9ECEE);
          font-weight: 700;
        }

        /* Availability Banner */
        .availability-banner {
          padding: 0.75rem 1rem;
          border-radius: 8px;
          font-size: 0.9rem;
          margin-top: 0.8rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .availability-banner.available {
          background: #EAF7ED;
          color: #1E6B2C;
          border: 1px solid #C3E6CB;
        }

        .availability-banner.unavailable {
          background: #FDF0ED;
          color: #8C1D18;
          border: 1px solid #F5C6CB;
        }

        /* Services Checkboxes */
        .services-selection-list {
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
        }

        .service-checkbox-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.85rem 1rem;
          background: var(--pz-bg-main, #FDFBF7);
          border: 1px solid var(--pz-border-color, #E8E2D5);
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .service-checkbox-item:hover {
          background: #FFFFFF;
          border-color: var(--pz-gold-main, #D4AF37);
        }

        .service-checkbox-item.checked {
          background: var(--pz-wine-soft, #F9ECEE);
          border-color: var(--pz-wine-main, #7A1C30);
        }

        .service-checkbox-left {
          display: flex;
          align-items: center;
          gap: 0.8rem;
        }

        .service-checkbox-left input[type="checkbox"] {
          width: 18px;
          height: 18px;
          accent-color: var(--pz-wine-main, #7A1C30);
        }

        .service-checkbox-price {
          font-weight: 700;
          color: var(--pz-wine-main, #7A1C30);
          font-size: 0.95rem;
        }

        /* Summary Sidebar */
        .summary-title {
          font-size: 1.4rem;
          color: var(--pz-wine-main, #7A1C30);
          margin-bottom: 1.2rem;
          border-bottom: 2px solid var(--pz-gold-border, #E6D29A);
          padding-bottom: 0.5rem;
        }

        .summary-line {
          display: flex;
          justify-content: space-between;
          margin-bottom: 0.75rem;
          font-size: 0.95rem;
          color: var(--pz-text-main, #2C2C2C);
        }

        .summary-line.sub {
          font-size: 0.88rem;
          color: var(--pz-text-muted, #5E5E5E);
          padding-left: 0.5rem;
        }

        .summary-divider {
          border-top: 1px dashed var(--pz-border-color, #E8E2D5);
          margin: 1.2rem 0;
        }

        .summary-total {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--pz-wine-main, #7A1C30);
          font-family: var(--pz-font-serif, Georgia, serif);
        }

        .pci-notice {
          font-size: 0.78rem;
          color: var(--pz-text-muted, #5E5E5E);
          background: var(--pz-bg-subtle, #F7F3EB);
          padding: 0.6rem 0.8rem;
          border-radius: 6px;
          margin: 1.2rem 0;
          line-height: 1.4;
          border: 1px solid var(--pz-border-color, #E8E2D5);
        }

        .btn-submit-booking {
          width: 100%;
          background: var(--pz-wine-main, #7A1C30);
          color: #FFFFFF;
          font-size: 1.05rem;
          font-weight: 700;
          padding: 1rem;
          border-radius: 8px;
          border: 1px solid var(--pz-gold-main, #D4AF37);
          box-shadow: 0 4px 15px rgba(122, 28, 48, 0.25);
          transition: all 0.25s ease;
        }

        .btn-submit-booking:hover:not(:disabled) {
          background: var(--pz-wine-hover, #5E1423);
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(122, 28, 48, 0.35);
        }

        .btn-submit-booking:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .error-message {
          color: #B22222;
          font-size: 0.85rem;
          margin-top: 0.3rem;
          font-weight: 500;
        }

        .alert-error-box {
          background: #FDF0ED;
          color: #8C1D18;
          border: 1px solid #F5C6CB;
          padding: 0.9rem 1.2rem;
          border-radius: 8px;
          margin-bottom: 1.5rem;
          font-size: 0.92rem;
        }

        /* Confirmation Screen */
        .confirmation-card {
          text-align: center;
          max-width: 750px;
          margin: 2rem auto;
          padding: 3.5rem 2.5rem;
        }

        .confirmation-icon {
          width: 76px;
          height: 76px;
          background: var(--pz-wine-soft, #F9ECEE);
          border: 2px solid var(--pz-gold-main, #D4AF37);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.5rem;
          color: var(--pz-wine-main, #7A1C30);
          font-size: 2.2rem;
          font-weight: bold;
        }

        .confirmation-title {
          font-size: 2.2rem;
          color: var(--pz-wine-main, #7A1C30);
          margin-bottom: 1rem;
        }

        .folio-display-box {
          background: var(--pz-bg-subtle, #F7F3EB);
          border: 2px dashed var(--pz-gold-main, #D4AF37);
          border-radius: 12px;
          padding: 1.5rem;
          margin: 2rem 0;
        }

        .folio-label {
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--pz-gold-dark, #B89325);
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        .folio-code {
          font-family: monospace;
          font-size: 2.2rem;
          font-weight: 800;
          color: var(--pz-wine-main, #7A1C30);
          letter-spacing: 0.08em;
          margin: 0.3rem 0;
        }

        .confirmation-copy-text {
          font-size: 1.15rem;
          color: var(--pz-text-main, #2C2C2C);
          line-height: 1.6;
          margin-bottom: 2rem;
          font-weight: 500;
        }

        .btn-return-home {
          background: var(--pz-wine-main, #7A1C30);
          color: #FFFFFF;
          font-size: 1rem;
          font-weight: 700;
          padding: 0.85rem 2rem;
          border-radius: 25px;
          border: 1px solid var(--pz-gold-main, #D4AF37);
          transition: all 0.2s ease;
        }

        .btn-return-home:hover {
          background: var(--pz-wine-hover, #5E1423);
        }

        @media (max-width: 900px) {
          .booking-layout {
            grid-template-columns: 1fr;
          }
          .slot-options-grid {
            grid-template-columns: 1fr;
          }
          .form-row {
            grid-template-columns: 1fr;
          }
        }

        /* Rediseño de Selección de Turno */
        .slot-cards-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
          gap: 12px;
          margin-top: 0.5rem;
        }

        .slot-card {
          border: 2px solid var(--pz-border-color, #E8E2D5);
          border-radius: 10px;
          padding: 1.2rem 1rem;
          cursor: pointer;
          transition: all 0.2s ease;
          background: var(--pz-bg-main, #FDFBF7);
          text-align: center;
        }

        .slot-card:hover {
          border-color: var(--pz-gold-main, #D4AF37);
          background: #FFFFFF;
        }

        .slot-card.selected {
          border: 2px solid #800020;
          background: #FFF5F5;
        }

        .slot-card-title {
          font-weight: 700;
          font-size: 1.1rem;
          color: var(--pz-wine-main, #7A1C30);
          margin-bottom: 0.3rem;
        }

        .slot-card-time {
          font-weight: 600;
          font-size: 0.9rem;
          color: var(--pz-gold-dark, #B89325);
          margin-bottom: 0.5rem;
        }

        .slot-card-desc {
          font-size: 0.8rem;
          color: var(--pz-text-muted, #5E5E5E);
          line-height: 1.4;
        }

        /* Paquete Todo Incluido Premium */
        .all-included-card {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1.2rem;
          background: linear-gradient(135deg, #FFF9E6, #FFF2CC);
          border: 2px dashed var(--pz-gold-main, #D4AF37);
          border-radius: 10px;
          cursor: pointer;
          margin-bottom: 1.2rem;
          transition: all 0.3s ease;
        }

        .all-included-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 15px rgba(212, 175, 55, 0.2);
        }

        .all-included-card.selected {
          background: linear-gradient(135deg, var(--pz-wine-soft, #F9ECEE), #FFF0F2);
          border: 2px solid var(--pz-wine-main, #7A1C30);
        }

        .all-included-left {
          display: flex;
          align-items: center;
          gap: 0.8rem;
        }

        .all-included-left input[type="checkbox"] {
          width: 20px;
          height: 20px;
          accent-color: var(--pz-wine-main, #7A1C30);
        }

        .all-included-title {
          font-size: 1.05rem;
          color: var(--pz-wine-main, #7A1C30);
        }

        .all-included-subtitle {
          font-size: 0.82rem;
          color: var(--pz-text-muted, #5E5E5E);
          margin-top: 0.1rem;
        }

        .all-included-price {
          font-weight: 700;
          color: var(--pz-wine-main, #7A1C30);
          font-size: 0.95rem;
          background: #FFFFFF;
          padding: 0.35rem 0.75rem;
          border-radius: 20px;
          border: 1px solid var(--pz-gold-border, #E6D29A);
        }

        .services-collapse-container {
          max-height: 1200px;
          overflow: hidden;
          transition: max-height 0.4s ease-in-out, opacity 0.3s ease;
          opacity: 1;
        }

        .services-collapse-container.collapsed {
          max-height: 0;
          opacity: 0;
          pointer-events: none;
          margin-bottom: 0;
        }

        .all-included-summary-box {
          background: #F9ECEE;
          border: 1px solid var(--pz-wine-soft, #E8D5D8);
          border-radius: 8px;
          padding: 1rem;
          margin-bottom: 1.2rem;
          animation: fadeIn 0.3s ease;
        }

        .summary-box-title {
          font-weight: 700;
          color: var(--pz-wine-main, #7A1C30);
          font-size: 0.9rem;
          margin-bottom: 0.5rem;
        }

        .summary-box-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
          gap: 0.5rem;
        }

        .summary-box-item {
          font-size: 0.8rem;
          color: #2C2C2C;
          font-weight: 600;
        }

        /* Formulario Responsivo Datos Contratante */
        .contact-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 16px;
          width: 100%;
          margin-bottom: 1.4rem;
          box-sizing: border-box;
        }

        .contact-grid .form-group {
          flex: 1 1 220px;
          min-width: 0;
          margin-bottom: 0;
        }

        .contact-grid .form-group input {
          width: 100%;
          box-sizing: border-box;
        }

        /* Nombre / Correo: max 320px; Teléfono: max 250px via inline -- controlled via flex-basis */
        .contact-grid .form-group.field-name,
        .contact-grid .form-group.field-email {
          flex-basis: 280px;
          max-width: 320px;
        }

        .contact-grid .form-group.field-phone {
          flex-basis: 200px;
          max-width: 250px;
        }

        /* Credit Card Mockup */
        .credit-card-mockup {
          width: 100%;
          max-width: 340px;
          height: 190px;
          background: linear-gradient(135deg, #4b5563, #1f2937); /* Default dark grey */
          border-radius: 12px;
          padding: 1.2rem;
          box-sizing: border-box;
          color: #FFFFFF;
          position: relative;
          margin: 1rem auto 1.5rem;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          transition: background 0.5s ease, transform 0.3s ease;
          font-family: monospace;
          letter-spacing: 0.1em;
        }

        .credit-card-mockup:hover {
          transform: translateY(-3px) rotate(1deg);
        }

        .credit-card-mockup.visa {
          background: linear-gradient(135deg, #1e3a8a, #3b82f6); /* Visa Blue */
        }

        .credit-card-mockup.mastercard {
          background: linear-gradient(135deg, #7c2d12, #ea580c); /* Mastercard Orange/Red */
        }

        .credit-card-mockup.amex {
          background: linear-gradient(135deg, #065f46, #10b981); /* Amex Emerald Green */
        }

        .card-chip {
          width: 40px;
          height: 30px;
          background: linear-gradient(135deg, #f59e0b, #d97706);
          border-radius: 6px;
          position: relative;
        }

        .card-logo {
          position: absolute;
          top: 1.2rem;
          right: 1.2rem;
          font-size: 1.15rem;
          font-weight: bold;
          font-style: italic;
          text-shadow: 1px 1px 2px rgba(0,0,0,0.3);
        }

        .card-number-display {
          font-size: 1.15rem;
          margin-top: 1rem;
          letter-spacing: 0.12em;
          text-shadow: 1px 1px 2px rgba(0,0,0,0.4);
        }

        .card-info-row {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-top: 0.5rem;
        }

        .card-label {
          font-size: 0.6rem;
          color: #d1d5db;
          margin-bottom: 0.15rem;
          text-transform: uppercase;
        }

        .card-value {
          font-size: 0.8rem;
          text-transform: uppercase;
          text-shadow: 1px 1px 1px rgba(0,0,0,0.3);
        }

        .input-card-franchise-indicator {
          position: absolute;
          right: 12px;
          bottom: 10px;
          font-size: 0.8rem;
          font-weight: bold;
          font-style: italic;
          color: var(--pz-wine-main, #7A1C30);
          pointer-events: none;
          background: #FFFFFF;
          padding: 0.1rem 0.4rem;
          border-radius: 4px;
          border: 1px solid var(--pz-border-color, #E8E2D5);
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-5px); }
          to { opacity: 1; transform: translateY(0); }
        }
      </style>

      <div class="booking-container">
        <template is="dom-if" if="[[!confirmedBooking]]">
          <div class="booking-header">
            <span class="booking-tag">Reservación en Línea 100% Segura</span>
            <h1 class="booking-title">Cotiza y Reserva tu Evento de Gala</h1>
            <p class="booking-subtitle">
              Selecciona tu salón favorito, fecha, turno y servicios adicionales. Recibirás tu folio único de seguimiento al instante.
            </p>
          </div>

          <template is="dom-if" if="[[generalError]]">
            <div class="alert-error-box">
              ⚠️ [[generalError]]
            </div>
          </template>

          <div class="booking-layout">
            <!-- Main Form Card -->
            <div class="booking-form-card">
              
              <!-- Paso 1: Salón y Fecha -->
              <div class="form-section-title">
                <span class="step-num">1</span>
                <span>Elige Sucursal, Fecha y Turno</span>
              </div>

              <div class="form-group">
                <label>Sucursal Banquetes Hub <span class="required-star">*</span></label>
              <div class="branch-options-grid">
                <template is="dom-repeat" items="[[branches]]" as="branch">
                  <div class$="branch-option-card [[_computeBranchSelectedClass(selectedBranchId, branch.id)]]"
                       on-click="_handleSelectBranch">
                    <div class="branch-option-name">[[branch.name]]</div>
                    <div style="font-size: 0.8rem; color: #5E5E5E;">Capacidad: [[branch.capacity]] personas</div>
                    <div class="branch-option-price">Base: [[_formatMXN(branch.base_price_mxn)]]</div>
                  </div>
                </template>
              </div>
            </div>

            <div class="form-group">
              <label for="eventDate">Fecha del Evento <span class="required-star">*</span></label>
              <input
                id="eventDate"
                type="date"
                value="{{eventDate::input}}"
                min$="[[minDate]]"
                max$="[[maxDate]]"
                on-change="_triggerAvailabilityCheck"
                on-click="_openDatePicker"
                on-keydown="_blockDateKeydown" />
            </div>

            <div class="form-group" style="margin-top: 1.5rem;">
              <label>Turno del Evento <span class="required-star">*</span></label>
              <div class="slot-cards-container">
                <template is="dom-repeat" items="[[timeSlots]]" as="slot">
                  <div class$="slot-card [[_computeSlotSelectedClass(timeSlot, slot.id)]]" on-click="_handleSelectSlot">
                    <div class="slot-card-title">[[slot.id]]</div>
                    <div class="slot-card-time">
                      <template is="dom-if" if="[[_isMatutino(slot.id)]]">09:00 - 14:00 hrs</template>
                      <template is="dom-if" if="[[_isVespertino(slot.id)]]">15:00 - 20:00 hrs</template>
                      <template is="dom-if" if="[[_isNocturno(slot.id)]]">21:00 - 03:00 hrs</template>
                    </div>
                    <div class="slot-card-desc">[[slot.description]]</div>
                  </div>
                </template>
              </div>
            </div>

            <!-- Availability Status Banner -->
            <template is="dom-if" if="[[availabilityChecked]]">
              <div class$="availability-banner [[_computeAvailabilityClass(isAvailable)]]">
                <span>[[availabilityMessage]]</span>
              </div>
            </template>

            <!-- Paso 2: Servicios & Banquetes Adicionales -->
            <div class="form-section-title" style="margin-top: 2rem;">
              <span class="step-num">2</span>
              <span>Servicios & Banquetes Adicionales</span>
            </div>

            <!-- Tarjeta destacada Paquete Todo Incluido -->
            <div class$="[[_computeAllIncludedClass(allIncludedSelected)]]" on-click="_toggleAllIncluded">
              <div class="all-included-left">
                <input type="checkbox" checked="[[allIncludedSelected]]" on-click="_stopEventPropagation" />
                <div>
                  <strong class="all-included-title">✨ Paquete Todo Incluido Premium</strong>
                  <div class="all-included-subtitle">Banquete, DJ, decoración, barra libre y todos los servicios con precio preferencial.</div>
                </div>
              </div>
              <div class="all-included-price">Ahorro Máximo</div>
            </div>

            <!-- Resumen compacto si el paquete está activo -->
            <template is="dom-if" if="[[allIncludedSelected]]">
              <div class="all-included-summary-box">
                <div class="summary-box-title">🎁 Servicios Incluidos en el Paquete:</div>
                <div class="summary-box-grid">
                  <template is="dom-repeat" items="[[services]]" as="svc">
                    <div class="summary-box-item">✓ [[svc.name]]</div>
                  </template>
                </div>
              </div>
            </template>

            <!-- Lista colapsable de servicios individuales -->
            <div class$="[[_computeCollapseClass(allIncludedSelected)]]">
              <div class="form-group">
                <div class="services-selection-list">
                  <template is="dom-repeat" items="[[services]]" as="svc">
                    <div class$="service-checkbox-item [[_computeServiceCheckedClass(selectedServiceIds, svc.id)]]"
                         on-click="_toggleService">
                      <div class="service-checkbox-left">
                        <input type="checkbox" checked="[[_isServiceChecked(selectedServiceIds, svc.id)]]" on-click="_stopEventPropagation" />
                        <div>
                          <strong style="font-size: 0.95rem; color: #2C2C2C;">[[svc.name]]</strong>
                          <div style="font-size: 0.8rem; color: #5E5E5E;">[[svc.category]] - [[svc.description]]</div>
                        </div>
                      </div>
                      <div class="service-checkbox-price">+ [[_formatMXN(svc.price_mxn)]]</div>
                    </div>
                  </template>
                </div>
              </div>
            </div>

            <!-- Paso 3: Datos del Contratante -->
            <div class="form-section-title" style="margin-top: 2rem;">
              <span class="step-num">3</span>
              <span>Datos del Contratante</span>
            </div>

            <div class="contact-grid">
              <div class="form-group field-name">
                <label for="custName">Nombre Completo del Cliente <span class="required-star">*</span></label>
                <input id="custName" type="text" placeholder="Ej. Lic. Mariana Torres" value="{{customerName::input}}" />
              </div>
              <div class="form-group field-email">
                <label for="custEmail">Correo Electrónico <span class="required-star">*</span></label>
                <input id="custEmail" type="email" placeholder="mariana.torres@ejemplo.com" value="{{customerEmail::input}}" />
              </div>
              <div class="form-group field-phone">
                <label for="custPhone">Teléfono Móvil (WhatsApp) <span class="required-star">*</span></label>
                <input id="custPhone" type="tel" placeholder="811 234 5678" value="{{customerPhone::input}}" />
              </div>
            </div>

            <!-- Paso 4: Procesamiento de Pago Seguro (Simulación PCI-DSS) -->
            <div class="form-section-title" style="margin-top: 2rem;">
              <span class="step-num">4</span>
              <span>Procesamiento de Pago Seguro (Simulación PCI-DSS)</span>
            </div>

            <!-- Mockup de Tarjeta de Crédito Premium -->
            <div class$="credit-card-mockup [[_computeCardNetworkClass(cardNumber)]]">
              <div class="card-chip"></div>
              <div class="card-logo">[[_computeCardNetworkLogoText(cardNumber)]]</div>
              <div class="card-number-display">[[_computeCardNumberDisplay(cardNumber)]]</div>
              <div class="card-info-row">
                <div class="card-holder-display">
                  <div class="card-label">TITULAR</div>
                  <div class="card-value">[[_computeCardHolderDisplay(cardHolderName)]]</div>
                </div>
                <div class="card-expiry-display">
                  <div class="card-label">VENCE</div>
                  <div class="card-value">[[_computeCardExpiryDisplay(cardExpMonth, cardExpYear)]]</div>
                </div>
              </div>
            </div>

            <div class="form-group">
              <label for="cardHolder">Nombre del Titular de la Tarjeta <span class="required-star">*</span></label>
              <input id="cardHolder" type="text" placeholder="Como aparece en el plástico" value="{{cardHolderName::input}}" />
            </div>

            <!-- Número de tarjeta: fila completa -->
            <div class="form-group" style="position: relative; width: 100%;">
              <label for="cardNum">Número de Tarjeta (16 dígitos) <span class="required-star">*</span></label>
              <input id="cardNum" type="text" maxlength="19" inputmode="numeric" placeholder="4152 3134 5678 9012" value="{{cardNumber::input}}" on-input="_handleCardNumberInput" style="width: 100%; max-width: 380px; box-sizing: border-box;" />
              <div class="input-card-franchise-indicator">[[_computeCardNetworkLogoText(cardNumber)]]</div>
            </div>

            <!-- Vencimiento + CVC: segunda fila -->
            <div style="display: flex; gap: 16px; align-items: flex-end; margin-top: 12px; flex-wrap: wrap;">
              <div class="form-group" style="margin-bottom: 0;">
                <label>Vencimiento <span class="required-star">*</span></label>
                <div class="exp-input-group">
                  <input id="cardExpMonth" type="text" maxlength="2" inputmode="numeric" placeholder="MM" value="{{cardExpMonth::input}}" on-input="_handleExpMonthInput" style="width: 65px; min-width: 65px; max-width: 65px; box-sizing: border-box;" />
                  <span class="exp-divider">/</span>
                  <input id="cardExpYear" type="text" maxlength="2" inputmode="numeric" placeholder="AA" value="{{cardExpYear::input}}" on-input="_handleExpYearInput" style="width: 65px; min-width: 65px; max-width: 65px; box-sizing: border-box;" />
                </div>
              </div>
              <div class="form-group" style="margin-bottom: 0;">
                <label for="cardCvc">CVC <span class="required-star">*</span></label>
                <input id="cardCvc" type="text" maxlength="4" inputmode="numeric" placeholder="123" value="{{cardCvc::input}}" on-input="_handleCvcInput" style="width: 90px; min-width: 90px; max-width: 90px; box-sizing: border-box;" />
              </div>
            </div>

          </div>

          <!-- Sidebar Resumen de Cotización -->
          <div class="summary-card">
            <h3 class="summary-title">Resumen de Cotización</h3>

            <div class="summary-line">
              <span><strong>Sucursal:</strong></span>
              <span>[[_computeSelectedBranchName(branches, selectedBranchId)]]</span>
            </div>

            <div class="summary-line">
              <span>Renta Base de Salón:</span>
              <span>[[_computeSelectedBranchPriceFormatted(branches, selectedBranchId)]]</span>
            </div>

            <div class="summary-line">
              <span><strong>Fecha:</strong></span>
              <span>[[_formatDate(eventDate)]]</span>
            </div>

            <div class="summary-line">
              <span><strong>Turno:</strong></span>
              <span>[[timeSlot]]</span>
            </div>

            <div class="summary-divider"></div>

            <div style="font-size: 0.9rem; font-weight: 700; color: #2C2C2C; margin-bottom: 0.5rem;">
              Servicios Seleccionados ([[selectedServiceIds.length]]):
            </div>

            <template is="dom-repeat" items="[[_computeSelectedServicesList(services, selectedServiceIds)]]" as="item">
              <div class="summary-line sub">
                <span>• [[item.name]]</span>
                <span>[[_formatMXN(item.price_mxn)]]</span>
              </div>
            </template>

            <template is="dom-if" if="[[!selectedServiceIds.length]]">
              <div style="font-size: 0.85rem; color: #8C8C8C; font-style: italic; margin-bottom: 0.5rem;">
                Ningún servicio adicional seleccionado.
              </div>
            </template>

            <div class="summary-divider"></div>

            <div class="summary-total">
              <span>Total Estimado:</span>
              <span>[[_computeCalculatedTotalFormatted(branches, selectedBranchId, services, selectedServiceIds)]]</span>
            </div>

            <div class="pci-notice">
              🛡️ <strong>Cumplimiento PCI:</strong> No almacenamos el número completo de tu tarjeta ni CVC en la base de datos. Solo guardamos los últimos 4 dígitos como referencia de pago.
            </div>

            <button class="btn-submit-booking" disabled$="[[isSubmitting]]" on-click="_handleSubmitBooking">
              <template is="dom-if" if="[[!isSubmitting]]">
                Confirmar y Generar Folio
              </template>
              <template is="dom-if" if="[[isSubmitting]]">
                Procesando Reservación...
              </template>
            </button>
          </div>
        </div>
      </template>

      <!-- Pantalla de Confirmación de Reserva -->
      <template is="dom-if" if="[[confirmedBooking]]">
        <div class="confirmation-card">
          <div class="confirmation-icon">✓</div>
          <h2 class="confirmation-title">¡Reservación Registrada con Éxito!</h2>
          
          <div class="folio-display-box">
            <div class="folio-label">Folio Oficial de Seguimiento</div>
            <div class="folio-code">[[confirmedBooking.booking_folio]]</div>
            <div style="font-size: 0.9rem; color: #7A1C30; font-weight: 600;">
              Sucursal: [[confirmedBooking.branch_name]] | Fecha: [[confirmedBooking.event_date]] ([[confirmedBooking.time_slot]])
            </div>
          </div>

          <!-- TEXTO OBLIGATORIO EXACTO -->
          <p class="confirmation-copy-text">
            Estamos confirmando tu reservación. Tu folio de seguimiento es <strong>[[confirmedBooking.booking_folio]]</strong>. Nos pondremos en contacto mediante correo
          </p>

          <div style="background: #FFFFFF; border: 1px solid #E8E2D5; border-radius: 8px; padding: 1rem; margin-bottom: 2rem; text-align: left; font-size: 0.95rem;">
            <div style="margin-bottom: 0.4rem;"><strong>Cliente:</strong> [[confirmedBooking.customer_name]]</div>
            <div style="margin-bottom: 0.4rem;"><strong>Correo registrado:</strong> [[confirmedBooking.customer_email]]</div>
            <div style="margin-bottom: 0.4rem;"><strong>Monto Total:</strong> [[_formatMXN(confirmedBooking.total_mxn)]]</div>
            <div><strong>Tarjeta de respaldo:</strong> **** **** **** [[confirmedBooking.card_last_four]]</div>
          </div>

            <button class="btn-return-home" on-click="_resetBookingFlow">
              Volver al Inicio
            </button>
          </div>
        </template>
      </div>
    `;
  }

  static get properties() {
    return {
      branches: {
        type: Array,
        value: function() { return []; }
      },
      services: {
        type: Array,
        value: function() { return []; }
      },
      timeSlots: {
        type: Array,
        value: function() { return TIME_SLOTS; }
      },
      selectedBranchId: {
        type: String,
        value: '1'
      },
      eventDate: {
        type: String,
        value: ''
      },
      timeSlot: {
        type: String,
        value: 'Nocturno'
      },
      selectedServiceIds: {
        type: Array,
        value: function() { return []; }
      },
      customerName: {
        type: String,
        value: ''
      },
      customerEmail: {
        type: String,
        value: ''
      },
      customerPhone: {
        type: String,
        value: ''
      },
      cardHolderName: {
        type: String,
        value: ''
      },
      cardNumber: {
        type: String,
        value: ''
      },
      cardExpMonth: {
        type: String,
        value: ''
      },
      cardExpYear: {
        type: String,
        value: ''
      },
      cardCvc: {
        type: String,
        value: ''
      },
      minDate: {
        type: String,
        value: function() {
          // 72 hours minimum anticipation
          const d = new Date();
          d.setDate(d.getDate() + 3);
          return d.toISOString().split('T')[0];
        }
      },
      maxDate: {
        type: String,
        value: '2030-12-31'
      },
      availabilityChecked: {
        type: Boolean,
        value: false
      },
      isAvailable: {
        type: Boolean,
        value: true
      },
      availabilityMessage: {
        type: String,
        value: ''
      },
      generalError: {
        type: String,
        value: ''
      },
      isSubmitting: {
        type: Boolean,
        value: false
      },
      confirmedBooking: {
        type: Object,
        value: null
      },
      allIncludedSelected: {
        type: Boolean,
        value: false
      }
    };
  }

  static get observers() {
    return [
      '_updateDefaults(branches)'
    ];
  }

  _updateDefaults(branches) {
    if (Array.isArray(branches) && branches.length > 0 && !this.selectedBranchId) {
      this.selectedBranchId = String(branches[0].id);
    }
  }

  _computeSelectedBranch(branches, selectedBranchId) {
    if (!Array.isArray(branches) || branches.length === 0 || !selectedBranchId) {
      return null;
    }
    return branches.find(b => String(b.id) === String(selectedBranchId)) || null;
  }

  _computeSelectedBranchName(branches, selectedBranchId) {
    const branch = this._computeSelectedBranch(branches, selectedBranchId);
    return branch ? (branch.name || '') : 'No seleccionada';
  }

  _computeSelectedBranchPrice(branches, selectedBranchId) {
    const branch = this._computeSelectedBranch(branches, selectedBranchId);
    return branch ? Number(branch.base_price_mxn || 0) : 0;
  }

  _computeSelectedBranchPriceFormatted(branches, selectedBranchId) {
    return formatMXN(this._computeSelectedBranchPrice(branches, selectedBranchId));
  }

  _computeSelectedServicesList(services, selectedServiceIds) {
    if (!Array.isArray(services) || !Array.isArray(selectedServiceIds)) return [];
    return services.filter(s => selectedServiceIds.map(String).includes(String(s.id)));
  }

  _computeCalculatedTotal(branches, selectedBranchId, services, selectedServiceIds) {
    const branchPrice = this._computeSelectedBranchPrice(branches, selectedBranchId);
    const servicesList = this._computeSelectedServicesList(services, selectedServiceIds);
    const servicesTotal = servicesList.reduce((acc, curr) => acc + Number(curr.price_mxn || 0), 0);
    return branchPrice + servicesTotal;
  }

  _computeCalculatedTotalFormatted(branches, selectedBranchId, services, selectedServiceIds) {
    return formatMXN(this._computeCalculatedTotal(branches, selectedBranchId, services, selectedServiceIds));
  }

  _formatMXN(amount) {
    return formatMXN(amount);
  }

  _formatDate(dateStr) {
    if (!dateStr) return 'Fecha sin seleccionar';
    return dateStr;
  }

  _computeBranchSelectedClass(selectedId, currentId) {
    return Number(selectedId) === Number(currentId) ? 'selected' : '';
  }

  _computeServiceCheckedClass(selectedIds, currentId) {
    return selectedIds && selectedIds.includes(currentId) ? 'checked' : '';
  }

  _isServiceChecked(selectedIds, currentId) {
    return selectedIds && selectedIds.includes(currentId);
  }

  _computeAvailabilityClass(isAvail) {
    return isAvail ? 'available' : 'unavailable';
  }

  _stopEventPropagation(e) {
    e.stopPropagation();
  }

  _handleSelectBranch(e) {
    const branch = e.model.branch;
    this.selectedBranchId = branch.id;
    this._triggerAvailabilityCheck();
  }

  _toggleService(e) {
    const svc = e.model.svc;
    const current = [...this.selectedServiceIds];
    const idx = current.indexOf(svc.id);
    if (idx >= 0) {
      current.splice(idx, 1);
    } else {
      current.push(svc.id);
    }
    this.selectedServiceIds = current;

    if (Array.isArray(this.services) && this.services.length > 0) {
      this.allIncludedSelected = (current.length === this.services.length);
    } else {
      this.allIncludedSelected = false;
    }

    this.notifyPath('selectedServiceIds');
  }

  _handleCardNumberInput(e) {
    const raw = (e.target.value || '').replace(/\D/g, '').slice(0, 16);
    const formatted = raw.match(/.{1,4}/g)?.join(' ') || raw;
    this.cardNumber = formatted;
    e.target.value = formatted;
  }

  _handleExpMonthInput(e) {
    let raw = (e.target.value || '').replace(/\D/g, '').slice(0, 2);
    if (raw.length === 2 && Number(raw) > 12) {
      raw = '12';
    }
    this.cardExpMonth = raw;
    e.target.value = raw;
    if (raw.length === 2) {
      const yearEl = this.shadowRoot?.querySelector('#cardExpYear');
      if (yearEl) yearEl.focus();
    }
  }

  _handleExpYearInput(e) {
    const raw = (e.target.value || '').replace(/\D/g, '').slice(0, 2);
    this.cardExpYear = raw;
    e.target.value = raw;
    if (raw.length === 2) {
      const cvcEl = this.shadowRoot?.querySelector('#cardCvc');
      if (cvcEl) cvcEl.focus();
    }
  }

  _handleCvcInput(e) {
    const raw = (e.target.value || '').replace(/\D/g, '').slice(0, 4);
    this.cardCvc = raw;
    e.target.value = raw;
  }

  async _triggerAvailabilityCheck() {
    if (!this.selectedBranchId || !this.eventDate || !this.timeSlot) {
      this.availabilityChecked = false;
      return;
    }

    try {
      const res = await checkAvailability(this.selectedBranchId, this.eventDate, this.timeSlot);
      this.availabilityChecked = true;
      this.isAvailable = res.available;
      this.availabilityMessage = res.message;
    } catch (err) {
      console.warn('Error al verificar disponibilidad:', err);
    }
  }

  async _handleSubmitBooking() {
    this.generalError = '';

    const month = (this.cardExpMonth || '').padStart(2, '0');
    const year = (this.cardExpYear || '');
    const card_exp = (this.cardExpMonth && this.cardExpYear) ? `${month}/${year}` : '';

    const payload = {
      customer_name: (this.customerName || '').trim(),
      customer_email: (this.customerEmail || '').trim(),
      customer_phone: (this.customerPhone || '').trim(),
      branch_id: Number(this.selectedBranchId),
      event_date: this.eventDate,
      time_slot: this.timeSlot,
      service_ids: this.selectedServiceIds || [],
      cardholder_name: (this.cardHolderName || '').trim(),
      card_number: (this.cardNumber || '').trim(),
      card_exp: card_exp,
      card_cvc: (this.cardCvc || '').trim()
    };

    // Validación cliente estricta mediante Zod
    const validation = bookingSchema.safeParse(payload);
    if (!validation.success) {
      const firstError = validation.error.errors[0];
      this.generalError = firstError ? firstError.message : 'Por favor completa todos los campos requeridos correctamente.';
      window.scrollTo({ top: 150, behavior: 'smooth' });
      return;
    }

    this.isSubmitting = true;

    try {
      const response = await createBooking(payload);
      this.confirmedBooking = response.booking;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (err) {
      this.generalError = err.message || 'Error al procesar la reservación. Inténtalo nuevamente.';
      window.scrollTo({ top: 150, behavior: 'smooth' });
    } finally {
      this.isSubmitting = false;
    }
  }

  _resetBookingFlow() {
    this.confirmedBooking = null;
    this.customerName = '';
    this.customerEmail = '';
    this.customerPhone = '';
    this.cardNumber = '';
    this.cardExpMonth = '';
    this.cardExpYear = '';
    this.cardCvc = '';
    this.cardHolderName = '';
    this.selectedServiceIds = [];
    this.allIncludedSelected = false;
    this.availabilityChecked = false;
    this.dispatchEvent(new CustomEvent('navigate', {
      bubbles: true,
      composed: true,
      detail: { page: 'landing' }
    }));
  }

  _handleSelectSlot(e) {
    const slot = e.model.slot;
    this.timeSlot = slot.id;
    this._triggerAvailabilityCheck();
  }

  _toggleAllIncluded() {
    this.allIncludedSelected = !this.allIncludedSelected;
    if (this.allIncludedSelected) {
      if (Array.isArray(this.services)) {
        this.selectedServiceIds = this.services.map(s => s.id);
      }
    } else {
      this.selectedServiceIds = [];
    }
    this.notifyPath('selectedServiceIds');
  }

  _computeSlotSelectedClass(currentTimeSlot, slotId) {
    return currentTimeSlot === slotId ? 'selected' : '';
  }

  _isMatutino(slotId) { return slotId === 'Matutino'; }
  _isVespertino(slotId) { return slotId === 'Vespertino'; }
  _isNocturno(slotId) { return slotId === 'Nocturno'; }

  _computeAllIncludedClass(allIncludedSelected) {
    return allIncludedSelected ? 'all-included-card selected' : 'all-included-card';
  }

  _computeCollapseClass(allIncludedSelected) {
    return allIncludedSelected ? 'services-collapse-container collapsed' : 'services-collapse-container';
  }

  _detectCardNetwork(cardNum) {
    if (!cardNum) return 'unknown';
    const cleanNum = String(cardNum).replace(/\D/g, '');
    if (cleanNum.startsWith('4')) {
      return 'visa';
    }
    const prefix2 = parseInt(cleanNum.substring(0, 2), 10);
    const prefix4 = parseInt(cleanNum.substring(0, 4), 10);
    if ((prefix2 >= 51 && prefix2 <= 55) || (prefix4 >= 2221 && prefix4 <= 2720)) {
      return 'mastercard';
    }
    if (prefix2 === 34 || prefix2 === 37) {
      return 'amex';
    }
    return 'unknown';
  }

  _computeCardNetworkClass(cardNum) {
    const network = this._detectCardNetwork(cardNum);
    return network === 'unknown' ? '' : network;
  }

  _computeCardNetworkLogoText(cardNum) {
    const network = this._detectCardNetwork(cardNum);
    if (network === 'visa') return 'VISA';
    if (network === 'mastercard') return 'Mastercard';
    if (network === 'amex') return 'AMEX';
    return 'CREDIT CARD';
  }

  _computeCardNumberDisplay(cardNum) {
    if (!cardNum) return '•••• •••• •••• ••••';
    let display = cardNum;
    if (display.length < 19) {
      const rawLen = cardNum.replace(/\s/g, '').length;
      const neededDots = 16 - rawLen;
      let dots = '';
      for (let i = 0; i < neededDots; i++) {
        if ((rawLen + i) % 4 === 0 && (rawLen + i) > 0) {
          dots += ' ';
        }
        dots += '•';
      }
      display += dots;
    }
    return display;
  }

  _computeCardHolderDisplay(holderName) {
    return holderName ? holderName.trim() : 'TITULAR DE LA TARJETA';
  }

  _computeCardExpiryDisplay(month, year) {
    const mm = month ? String(month).padStart(2, '0') : 'MM';
    const yy = year ? String(year).padStart(2, '0') : 'AA';
    return `${mm}/${yy}`;
  }

  /** Force the native date picker popup on click anywhere in the input box */
  _openDatePicker(e) {
    const input = e.currentTarget;
    if (input && typeof input.showPicker === 'function') {
      try { input.showPicker(); } catch (_) { /* Firefox / older Safari fallback: no-op */ }
    }
  }

  /** Block all keyboard input — date must be chosen via the picker only */
  _blockDateKeydown(e) {
    e.preventDefault();
  }
}

customElements.define('partyzone-booking', PartyZoneBooking);
