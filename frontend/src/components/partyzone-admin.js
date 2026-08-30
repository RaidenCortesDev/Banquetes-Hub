import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/polymer/lib/elements/dom-repeat.js';
import '@polymer/polymer/lib/elements/dom-if.js';
import { formatMXN } from '../config/constants.js';
import { fetchAdminBookings, softDeleteBooking, restoreBooking } from '../services/api.js';

/**
 * Componente del Panel de Control Administrativo de PartyZone.
 * Permite visualizar la bitácora en PostgreSQL, desglosar servicios y aplicar Soft Delete.
 * @customElement
 * @polymer
 */
export class PartyZoneAdmin extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
          max-width: 1300px;
          margin: 2.5rem auto 4rem;
          padding: 0 1.5rem;
        }

        .admin-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .admin-title-group h1 {
          font-size: 2.2rem;
          color: var(--pz-wine-main, #7A1C30);
        }

        .admin-title-group p {
          color: var(--pz-text-muted, #5E5E5E);
          font-size: 0.95rem;
        }

        .admin-actions-bar {
          display: flex;
          gap: 0.8rem;
          align-items: center;
        }

        .btn-refresh {
          background: #FFFFFF;
          color: var(--pz-wine-main, #7A1C30);
          border: 1px solid var(--pz-wine-main, #7A1C30);
          padding: 0.6rem 1.2rem;
          border-radius: 8px;
          font-weight: 600;
          font-size: 0.9rem;
          transition: all 0.2s ease;
        }

        .btn-refresh:hover {
          background: var(--pz-wine-soft, #F9ECEE);
        }

        /* Metric Cards */
        .metrics-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 1.5rem;
          margin-bottom: 2.5rem;
        }

        .metric-card {
          background: #FFFFFF;
          border: 1px solid var(--pz-border-color, #E8E2D5);
          border-radius: 12px;
          padding: 1.5rem;
          box-shadow: 0 4px 15px rgba(122, 28, 48, 0.05);
        }

        .metric-label {
          font-size: 0.82rem;
          color: var(--pz-text-muted, #5E5E5E);
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }

        .metric-value {
          font-size: 1.8rem;
          font-weight: 700;
          color: var(--pz-wine-main, #7A1C30);
          font-family: var(--pz-font-serif, Georgia, serif);
          margin-top: 0.4rem;
        }

        /* Filter Controls */
        .controls-card {
          background: #FFFFFF;
          border: 1px solid var(--pz-border-color, #E8E2D5);
          border-radius: 12px;
          padding: 1.2rem 1.5rem;
          margin-bottom: 1.8rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .search-input-box {
          flex-grow: 1;
          max-width: 400px;
        }

        .search-input-box input {
          width: 100%;
          padding: 0.65rem 1rem;
          border: 1px solid var(--pz-border-color, #E8E2D5);
          border-radius: 8px;
          font-size: 0.9rem;
          background: var(--pz-bg-main, #FDFBF7);
          box-sizing: border-box;
        }

        .filter-toggle-box {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--pz-text-main, #2C2C2C);
        }

        /* ── iOS Toggle Switch ── */
        .toggle-label {
          display: flex;
          align-items: center;
          gap: 0.7rem;
          cursor: pointer;
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--pz-text-main, #2C2C2C);
          user-select: none;
        }

        .toggle-input {
          position: absolute;
          opacity: 0;
          width: 0;
          height: 0;
        }

        .toggle-track {
          position: relative;
          display: inline-block;
          width: 44px;
          height: 24px;
          background: #D1D5DB;
          border-radius: 999px;
          transition: background 0.25s ease;
          flex-shrink: 0;
        }

        .toggle-input:checked + .toggle-track {
          background: var(--pz-wine-main, #7A1C30);
        }

        .toggle-track::after {
          content: '';
          position: absolute;
          top: 3px;
          left: 3px;
          width: 18px;
          height: 18px;
          background: #FFFFFF;
          border-radius: 50%;
          box-shadow: 0 1px 3px rgba(0,0,0,0.25);
          transition: transform 0.25s ease;
        }

        .toggle-input:checked + .toggle-track::after {
          transform: translateX(20px);
        }

        /* ── Status Select en Tabla ── */
        .status-select {
          border: 1px solid var(--pz-border-color, #E8E2D5);
          border-radius: 8px;
          padding: 0.3rem 0.5rem;
          font-size: 0.78rem;
          font-weight: 700;
          cursor: pointer;
          background: #FDFBF7;
          color: var(--pz-text-main, #2C2C2C);
          transition: border-color 0.2s ease;
          max-width: 150px;
        }

        .status-select:focus {
          outline: none;
          border-color: var(--pz-wine-main, #7A1C30);
          box-shadow: 0 0 0 2px rgba(122, 28, 48, 0.12);
        }

        /* ── Status Badges (extended) ── */
        .status-paid {
          background: #E6F7EE;
          color: #0A5C36;
          border: 1px solid #6FCF97;
        }

        .status-concluded {
          background: #F5F5F0;
          color: #5A5A4A;
          border: 1px solid #D4AF37;
        }

        .status-pending {
          background: #FFFBE6;
          color: #D46B08;
          border: 1px solid #FFE58F;
        }

        /* ── Modern Close Button ── */
        .btn-close-modal {
          width: 34px;
          height: 34px;
          border-radius: 50%;
          background: #F3F4F6;
          color: #4B5563;
          font-size: 1rem;
          line-height: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          border: 1px solid #E5E7EB;
          transition: background 0.2s ease, color 0.2s ease, transform 0.15s ease;
          flex-shrink: 0;
        }

        .btn-close-modal:hover {
          background: var(--pz-wine-soft, #F9ECEE);
          color: var(--pz-wine-main, #7A1C30);
          border-color: var(--pz-wine-main, #7A1C30);
          transform: rotate(90deg) scale(1.05);
        }

        /* ── Modal Status Badge Row ── */
        .modal-status-row {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          margin-top: 0.5rem;
          margin-bottom: 1rem;
          flex-wrap: wrap;
        }

        .modal-status-label {
          font-size: 0.82rem;
          font-weight: 700;
          color: var(--pz-text-muted, #5E5E5E);
          text-transform: uppercase;
          letter-spacing: 0.06em;
        }

        /* Table Card */
        .table-card {
          background: #FFFFFF;
          border-radius: 14px;
          border: 1px solid var(--pz-border-color, #E8E2D5);
          box-shadow: 0 6px 25px rgba(122, 28, 48, 0.06);
          overflow: hidden;
        }

        .table-responsive {
          overflow-x: auto;
        }

        table {
          width: 100%;
          border-collapse: collapse;
          text-align: left;
          font-size: 0.9rem;
        }

        th {
          background: var(--pz-bg-subtle, #F7F3EB);
          color: var(--pz-wine-main, #7A1C30);
          font-weight: 700;
          padding: 1rem 1.2rem;
          border-bottom: 2px solid var(--pz-gold-border, #E6D29A);
          white-space: nowrap;
        }

        td {
          padding: 1rem 1.2rem;
          border-bottom: 1px solid var(--pz-border-subtle, #F0EAE1);
          color: var(--pz-text-main, #2C2C2C);
          vertical-align: middle;
        }

        tr:hover {
          background: #FDFAF5;
        }

        tr.row-inactive {
          background: #FAF8F6;
          opacity: 0.75;
        }

        .folio-tag {
          font-family: monospace;
          font-weight: 800;
          color: var(--pz-wine-main, #7A1C30);
          background: var(--pz-wine-soft, #F9ECEE);
          padding: 0.25rem 0.6rem;
          border-radius: 6px;
          border: 1px solid var(--pz-gold-border, #E6D29A);
          display: inline-block;
        }

        .status-badge {
          display: inline-block;
          padding: 0.25rem 0.65rem;
          border-radius: 12px;
          font-size: 0.75rem;
          font-weight: 700;
        }

        .status-active {
          background: #EAF7ED;
          color: #1E6B2C;
          border: 1px solid #C3E6CB;
        }

        .status-inactive {
          background: #FDF0ED;
          color: #8C1D18;
          border: 1px solid #F5C6CB;
        }

        .action-btns {
          display: flex;
          gap: 0.5rem;
          align-items: center;
        }

        .btn-view-services {
          background: var(--pz-gold-main, #D4AF37);
          color: #FFFFFF;
          padding: 0.4rem 0.75rem;
          border-radius: 6px;
          font-size: 0.8rem;
          font-weight: 600;
          transition: background 0.2s ease;
        }

        .btn-view-services:hover {
          background: var(--pz-gold-dark, #B89325);
        }

        .btn-soft-delete {
          background: #FFF1F0;
          color: #CF1322;
          border: 1px solid #FFA39E;
          padding: 0.4rem 0.75rem;
          border-radius: 6px;
          font-size: 0.8rem;
          font-weight: 600;
          transition: all 0.2s ease;
        }

        .btn-soft-delete:hover {
          background: #CF1322;
          color: #FFFFFF;
        }

        .btn-restore {
          background: #F6FFED;
          color: #389E0D;
          border: 1px solid #B7EB8F;
          padding: 0.4rem 0.75rem;
          border-radius: 6px;
          font-size: 0.8rem;
          font-weight: 600;
        }

        .btn-restore:hover {
          background: #389E0D;
          color: #FFFFFF;
        }

        /* Modal Desglose de Servicios */
        .modal-backdrop {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: rgba(44, 44, 44, 0.6);
          backdrop-filter: blur(4px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2000;
          padding: 1.5rem;
          box-sizing: border-box;
        }

        .modal-box {
          background: #FFFFFF;
          border-radius: 14px;
          border: 1px solid var(--pz-gold-border, #E6D29A);
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
          max-width: 600px;
          width: 100%;
          padding: 2.2rem;
          max-height: 90vh;
          overflow-y: auto;
        }

        .modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.5rem;
          border-bottom: 2px solid var(--pz-gold-border, #E6D29A);
          padding-bottom: 0.8rem;
        }

        .modal-title {
          font-size: 1.5rem;
          color: var(--pz-wine-main, #7A1C30);
        }

        .btn-close-modal {
          background: transparent;
          font-size: 1.4rem;
          color: var(--pz-text-muted, #5E5E5E);
          cursor: pointer;
        }

        .service-item-row {
          display: flex;
          justify-content: space-between;
          padding: 0.8rem 0;
          border-bottom: 1px solid var(--pz-border-subtle, #F0EAE1);
          font-size: 0.95rem;
        }

        .notice-empty {
          text-align: center;
          padding: 3rem;
          color: var(--pz-text-muted, #5E5E5E);
        }

        .status-concluded {
          background: #E6F7FF;
          color: #0050B3;
          border: 1px solid #91D5FF;
        }

        .status-pending {
          background: #FFFBE6;
          color: #D46B08;
          border: 1px solid #FFE58F;
        }

        /* Modal de Confirmacion Centrado Absoluto */
        .confirm-backdrop {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: rgba(0, 0, 0, 0.6);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
          backdrop-filter: blur(4px);
        }

        .confirm-box {
          background: #FFFFFF;
          width: 90%;
          max-width: 480px;
          border-radius: 12px;
          padding: 24px;
          box-shadow: 0 10px 25px rgba(0,0,0,0.3);
          text-align: center;
          margin: auto;
          box-sizing: border-box;
        }

        .confirm-title {
          font-size: 1.4rem;
          color: var(--pz-wine-main, #7A1C30);
          margin-top: 0;
          margin-bottom: 1rem;
          font-family: var(--pz-font-serif, Georgia, serif);
        }

        .confirm-message {
          font-size: 1rem;
          color: var(--pz-text-main, #2C2C2C);
          line-height: 1.5;
          margin-bottom: 1.5rem;
        }

        .confirm-actions {
          display: flex;
          justify-content: center;
          gap: 12px;
          margin-top: 1.5rem;
        }

        .btn-confirm-action {
          background: var(--pz-wine-main, #7A1C30);
          color: #FFFFFF;
          border: 1px solid var(--pz-gold-main, #D4AF37);
          padding: 0.65rem 1.5rem;
          border-radius: 8px;
          font-weight: 700;
          font-size: 0.95rem;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .btn-confirm-action:hover:not(:disabled) {
          background: var(--pz-wine-hover, #5E1423);
          box-shadow: 0 4px 10px rgba(122, 28, 48, 0.2);
        }

        .btn-cancel-action {
          background: #E8E2D5;
          color: var(--pz-text-main, #2C2C2C);
          border: 1px solid var(--pz-border-color, #DCD4C4);
          padding: 0.65rem 1.5rem;
          border-radius: 8px;
          font-weight: 700;
          font-size: 0.95rem;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .btn-cancel-action:hover:not(:disabled) {
          background: #DCD4C4;
        }

        .btn-confirm-action:disabled,
        .btn-cancel-action:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }
      </style>

      <div class="admin-header">
        <div class="admin-title-group">
          <h1>Panel de Control & Bitácora</h1>
          <p>Gestión de reservas registradas .</p>
        </div>

        <div class="admin-actions-bar">
          <button class="btn-refresh" on-click="_loadBookings">
            🔄 Actualizar Bitácora
          </button>
        </div>
      </div>

      <!-- Resumen de Métricas -->
      <div class="metrics-grid">
        <div class="metric-card">
          <div class="metric-label">Total de Reservas</div>
          <div class="metric-value">[[_computeBookingsTotalCount(bookings)]]</div>
        </div>
        <div class="metric-card">
          <div class="metric-label">Reservas Activas</div>
          <div class="metric-value">[[_computeActiveBookingsCount(bookings)]]</div>
        </div>
        <div class="metric-card">
          <div class="metric-label">Ingresos Totales Registrados</div>
          <div class="metric-value">[[_computeTotalRevenueFormatted(bookings)]]</div>
        </div>
      </div>

      <!-- Controles y Filtros -->
      <div class="controls-card">
        <div class="search-input-box">
          <input type="text" placeholder="Buscar por Folio, Cliente o Sucursal..." value="{{searchTerm::input}}" />
        </div>

        <div class="filter-toggle-box">
          <label class="toggle-label">
            <input class="toggle-input" type="checkbox" checked="{{showAll::change}}" />
            <span class="toggle-track"></span>
            Mostrar reservas canceladas / inactivas
          </label>
          <label class="toggle-label" style="margin-left: 1.5rem;">
            <input class="toggle-input" type="checkbox" checked="{{showConcluded::change}}" />
            <span class="toggle-track"></span>
            Mostrar eventos concluidos
          </label>
        </div>
      </div>

      <!-- Tabla de Gestión de Reservas -->
      <div class="table-card">
        <div class="table-responsive">
          <table>
            <thead>
              <tr>
                <th>Folio</th>
                <th>Cliente</th>
                <th>Contacto</th>
                <th>Sucursal</th>
                <th>Fecha & Turno</th>
                <th>Total MXN</th>
                <th>Tarjeta</th>
                <th>Estado</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              <template is="dom-repeat" items="[[_computeFilteredBookings(bookings, searchTerm, showAll, showConcluded)]]" as="b">
                <tr class$="[[_computeRowClass(b.is_active)]]">
                  <td>
                    <span class="folio-tag">[[b.booking_folio]]</span>
                  </td>
                  <td>
                    <strong>[[b.customer_name]]</strong>
                  </td>
                  <td>
                    <div style="font-size: 0.85rem;">[[b.customer_email]]</div>
                    <div style="font-size: 0.8rem; color: #5E5E5E;">📞 [[b.customer_phone]]</div>
                  </td>
                  <td>[[b.branch_name]]</td>
                  <td>
                    <div><strong>[[b.event_date]]</strong></div>
                    <div style="font-size: 0.8rem; color: #7A1C30;">[[b.time_slot]]</div>
                  </td>
                  <td>
                    <strong style="color: #7A1C30;">[[_formatMXN(b.total_mxn)]]</strong>
                  </td>
                  <td>
                    <span style="font-family: monospace; font-size: 0.85rem;">**** [[b.card_last_four]]</span>
                  </td>
                  <td>
                    <select class="status-select" value="[[_computeBusinessStatusValue(b.status, b.event_date, b.is_active)]]" on-change="_handleStatusChange" data-booking-id$="[[b.id]]">
                      <option value="CONFIRMADA">✅ Confirmada</option>
                      <option value="COBRADA">💳 Cobrada / Pagada</option>
                      <option value="CONCLUIDA">🏁 Concluida</option>
                      <option value="CANCELADA">❌ Cancelada</option>
                    </select>
                  </td>
                  <td>
                    <div class="action-btns">
                      <button class="btn-view-services" on-click="_openServicesModal">
                        Servicios ([[b.services.length]])
                      </button>

                      <template is="dom-if" if="[[b.is_active]]">
                        <button class="btn-soft-delete" title="Cancelar evento sin eliminar de PostgreSQL" on-click="_handleSoftDelete">
                          Cancelar Evento
                        </button>
                      </template>

                      <template is="dom-if" if="[[!b.is_active]]">
                        <button class="btn-restore" title="Reactivar reserva" on-click="_handleRestore">
                          Reactivar Evento
                        </button>
                      </template>
                    </div>
                  </td>
                </tr>
              </template>
            </tbody>
          </table>
        </div>

        <template is="dom-if" if="[[!filteredBookings.length]]">
          <div class="notice-empty">
            No se encontraron reservas registradas que coincidan con la búsqueda.
          </div>
        </template>
      </div>

      <!-- Modal de Desglose de Servicios Contratados -->
      <template is="dom-if" if="[[selectedBookingForModal]]">
        <div class="modal-backdrop" on-click="_closeModalBackdrop">
          <div class="modal-box" on-click="_stopEventPropagation">
            <div class="modal-header">
              <div class="modal-title">Desglose de Servicios</div>
              <button class="btn-close-modal" on-click="_closeModal" title="Cerrar">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1L13 13M13 1L1 13" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                </svg>
              </button>
            </div>

            <div style="margin-bottom: 0.6rem; font-size: 0.95rem; line-height: 1.7;">
              <div><strong>Folio:</strong> <span class="folio-tag">[[selectedBookingForModal.booking_folio]]</span></div>
              <div><strong>Cliente:</strong> [[selectedBookingForModal.customer_name]]</div>
              <div><strong>Sucursal:</strong> [[selectedBookingForModal.branch_name]]</div>
              <div><strong>Pago con Tarjeta terminada en:</strong>
                <span style="font-family: monospace; letter-spacing: 0.05em;">**** [[selectedBookingForModal.card_last_four]]</span>
              </div>
            </div>

            <!-- Badge + selector de estado dentro del modal -->
            <div class="modal-status-row">
              <span class="modal-status-label">Estado de la Reserva:</span>
              <span class$="status-badge [[_computeModalStatusBadgeClass(selectedBookingForModal.status, selectedBookingForModal.event_date, selectedBookingForModal.is_active)]]">
                [[_computeBusinessStatusText(selectedBookingForModal.status, selectedBookingForModal.event_date, selectedBookingForModal.is_active)]]
              </span>
              <select class="status-select" on-change="_handleModalStatusChange" data-booking-id$="[[selectedBookingForModal.id]]" style="margin-left: auto;" value$="[[_computeBusinessStatusValue(selectedBookingForModal.status, selectedBookingForModal.event_date, selectedBookingForModal.is_active)]]">
                <option value="CONFIRMADA">✅ Confirmada</option>
                <option value="COBRADA">💳 Cobrada / Pagada</option>
                <option value="CONCLUIDA">🏁 Concluida</option>
                <option value="CANCELADA">❌ Cancelada</option>
              </select>
            </div>

            <h4 style="font-size: 1.1rem; color: #7A1C30; margin-bottom: 0.8rem; border-bottom: 1px solid #E8E2D5; padding-bottom: 0.3rem;">
              Servicios Adicionales Contratados
            </h4>

            <template is="dom-repeat" items="[[selectedBookingForModal.services]]" as="svc">
              <div class="service-item-row">
                <div>
                  <strong>[[svc.service_name]]</strong>
                  <div style="font-size: 0.8rem; color: #5E5E5E;">Categoría: [[svc.category]]</div>
                </div>
                <div style="display: flex; align-items: center; gap: 0.6rem;">
                  <span class="status-badge status-active" style="font-size: 0.7rem;">Activo</span>
                  <strong>[[_formatMXN(svc.unit_price_mxn)]]</strong>
                </div>
              </div>
            </template>

            <template is="dom-if" if="[[!selectedBookingForModal.services.length]]">
              <div style="padding: 1rem 0; color: #8C8C8C; font-style: italic;">
                Esta reservación no incluyó servicios adicionales contratados.
              </div>
            </template>

            <div style="margin-top: 1.5rem; text-align: right; font-size: 1.15rem; font-weight: 700; color: #7A1C30;">
              Total de Reserva: [[_formatMXN(selectedBookingForModal.total_mxn)]]
            </div>
          </div>
        </div>
      </template>

      <!-- Modal de Confirmación Estilizado -->
      <template is="dom-if" if="[[showConfirmModal]]">
        <div class="confirm-backdrop" on-click="_closeConfirmModal">
          <div class="confirm-box" on-click="_stopEventPropagation">
            <h3 class="confirm-title">[[confirmModalTitle]]</h3>
            <p class="confirm-message">[[confirmModalMessage]]</p>
            
            <template is="dom-if" if="[[confirmModalError]]">
              <div class="alert-error-box" style="margin-top: 1rem; text-align: left;">
                ⚠️ [[confirmModalError]]
              </div>
            </template>
            
            <div class="confirm-actions">
              <button class="btn-confirm-action" on-click="_executeConfirmAction" disabled$="[[confirmModalSubmitting]]">
                <template is="dom-if" if="[[!confirmModalSubmitting]]">
                  Confirmar Acción
                </template>
                <template is="dom-if" if="[[confirmModalSubmitting]]">
                  Procesando...
                </template>
              </button>
              <button class="btn-cancel-action" on-click="_closeConfirmModal" disabled$="[[confirmModalSubmitting]]">
                Volver / Cancelar
              </button>
            </div>
          </div>
        </div>
      </template>
    `;
  }

  static get properties() {
    return {
      bookings: {
        type: Array,
        value: function() { return []; }
      },
      showAll: {
        type: Boolean,
        value: true
      },
      showConcluded: {
        type: Boolean,
        value: false
      },
      searchTerm: {
        type: String,
        value: ''
      },
      selectedBookingForModal: {
        type: Object,
        value: null
      },
      showConfirmModal: {
        type: Boolean,
        value: false
      },
      confirmModalTitle: {
        type: String,
        value: ''
      },
      confirmModalMessage: {
        type: String,
        value: ''
      },
      confirmModalActionType: {
        type: String,
        value: ''
      },
      confirmModalBooking: {
        type: Object,
        value: null
      },
      confirmModalSubmitting: {
        type: Boolean,
        value: false
      },
      confirmModalError: {
        type: String,
        value: ''
      }
    };
  }

  static get observers() {
    return [
      '_observeFilters(showAll, showConcluded)'
    ];
  }

  ready() {
    super.ready();
    this._loadBookings();
  }

  _observeFilters() {
    this._loadBookings();
  }

  async _loadBookings() {
    try {
      // Always fetch all records — client-side toggles control visibility
      const data = await fetchAdminBookings(true);
      this.bookings = Array.isArray(data) ? data : [];
    } catch (err) {
      console.error('Error al cargar reservas:', err);
      this.bookings = [];
    }
  }

  _isConcluded(booking) {
    if (!booking) return false;
    if (booking.status === 'CONCLUIDA') return true;
    // Auto-conclude if event date is in the past and not cancelled/cobrada
    if (booking.event_date) {
      try {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const eventDate = new Date(booking.event_date + 'T00:00:00');
        if (eventDate < today && booking.is_active && booking.status !== 'CANCELADA' && booking.status !== 'COBRADA') {
          return true;
        }
      } catch (e) { /* ignore */ }
    }
    return false;
  }

  _isCancelled(booking) {
    if (!booking) return false;
    return !booking.is_active || booking.status === 'CANCELADA';
  }

  _computeBookingsTotalCount(bookings) {
    if (!Array.isArray(bookings)) return 0;
    return bookings.length;
  }

  _computeActiveBookingsCount(bookings) {
    if (!Array.isArray(bookings) || bookings.length === 0) return 0;
    return bookings.filter(b => b && b.is_active !== false).length;
  }

  _computeTotalRevenue(bookings) {
    if (!Array.isArray(bookings) || bookings.length === 0) return 0;
    return bookings
      .filter(b => b && b.is_active !== false)
      .reduce((acc, curr) => acc + Number(curr.total_mxn || 0), 0);
  }

  _computeTotalRevenueFormatted(bookings) {
    return formatMXN(this._computeTotalRevenue(bookings));
  }

  _computeFilteredBookings(bookings, searchTerm, showAll, showConcluded) {
    if (!Array.isArray(bookings)) return [];

    let list = bookings.filter(b => {
      if (!b) return false;
      const cancelled = this._isCancelled(b);
      const concluded = this._isConcluded(b);

      // Hide cancelled unless showAll toggle is ON
      if (cancelled && !showAll) return false;
      // Hide concluded unless showConcluded toggle is ON
      if (concluded && !showConcluded) return false;

      return true;
    });

    if (!searchTerm) return list;
    const term = String(searchTerm).toLowerCase().trim();
    return list.filter(b =>
      (b.booking_folio && b.booking_folio.toLowerCase().includes(term)) ||
      (b.customer_name && b.customer_name.toLowerCase().includes(term)) ||
      (b.branch_name && b.branch_name.toLowerCase().includes(term)) ||
      (b.customer_email && b.customer_email.toLowerCase().includes(term))
    );
  }

  _formatMXN(amount) {
    return formatMXN(amount);
  }

  _computeRowClass(isActive) {
    return isActive ? '' : 'row-inactive';
  }

  _stopEventPropagation(e) {
    e.stopPropagation();
  }

  _openServicesModal(e) {
    this.selectedBookingForModal = e.model.b;
    // Sync the modal select after Polymer renders the dom-if template
    requestAnimationFrame(() => this._syncModalSelect());
  }

  _syncModalSelect() {
    const booking = this.selectedBookingForModal;
    if (!booking) return;
    const currentValue = this._computeBusinessStatusValue(
      booking.status, booking.event_date, booking.is_active
    );
    const select = this.shadowRoot && this.shadowRoot.querySelector('.modal-status-row .status-select');
    if (select) {
      select.value = currentValue;
    }
  }

  _closeModal() {
    this.selectedBookingForModal = null;
  }

  _closeModalBackdrop() {
    this.selectedBookingForModal = null;
  }

  _handleSoftDelete(e) {
    const booking = e.model.b;
    this._openConfirmModal(
      'Cancelar Evento',
      `¿Está seguro que desea cancelar este servicio? El estado pasará a Cancelada.`,
      'soft-delete',
      booking
    );
  }

  _handleRestore(e) {
    const booking = e.model.b;
    this._openConfirmModal(
      'Reactivar Evento',
      `¿Desea cambiar el estatus de este servicio? El estado pasará a Confirmada.`,
      'restore',
      booking
    );
  }

  _openConfirmModal(title, message, actionType, booking) {
    this.confirmModalTitle = title;
    this.confirmModalMessage = message;
    this.confirmModalActionType = actionType;
    this.confirmModalBooking = booking;
    this.confirmModalError = '';
    this.confirmModalSubmitting = false;
    this.showConfirmModal = true;
  }

  _closeConfirmModal() {
    if (this.confirmModalSubmitting) return;
    this.showConfirmModal = false;
    this.confirmModalBooking = null;
    this.confirmModalActionType = '';
    this.confirmModalError = '';
  }

  async _executeConfirmAction() {
    if (!this.confirmModalBooking || !this.confirmModalActionType) return;
    
    this.confirmModalSubmitting = true;
    this.confirmModalError = '';
    
    try {
      if (this.confirmModalActionType === 'soft-delete') {
        await softDeleteBooking(this.confirmModalBooking.id);
      } else if (this.confirmModalActionType === 'restore') {
        await restoreBooking(this.confirmModalBooking.id);
      }
      
      this.showConfirmModal = false;
      this.confirmModalBooking = null;
      this.confirmModalActionType = '';
      this._loadBookings();
    } catch (err) {
      this.confirmModalError = err.message || 'Error al procesar la acción';
    } finally {
      this.confirmModalSubmitting = false;
    }
  }

  _computeBusinessStatusText(status, eventDateStr, isActive) {
    if (!isActive || status === 'CANCELADA') return 'Cancelada';
    if (status === 'COBRADA') return 'Cobrada / Pagada';

    if (eventDateStr) {
      try {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const eventDate = new Date(eventDateStr + 'T00:00:00');
        if (eventDate < today && status === 'CONCLUIDA') return 'Concluida';
        if (eventDate < today && status !== 'COBRADA') return 'Concluida';
      } catch (e) { /* ignore */ }
    }

    if (status === 'CONFIRMADA') return 'Confirmada';
    if (status === 'CONCLUIDA') return 'Concluida';
    if (status === 'PENDIENTE') return 'Pendiente';
    return 'Confirmada';
  }

  _computeBusinessStatusValue(status, eventDateStr, isActive) {
    if (!isActive || status === 'CANCELADA') return 'CANCELADA';
    if (status === 'COBRADA') return 'COBRADA';
    if (status === 'CONCLUIDA') return 'CONCLUIDA';
    if (status === 'PENDIENTE') return 'CONFIRMADA';
    return 'CONFIRMADA';
  }

  _computeBusinessStatusClass(status, eventDateStr, isActive) {
    const text = this._computeBusinessStatusText(status, eventDateStr, isActive);
    if (text === 'Cancelada')      return 'status-badge status-inactive';
    if (text === 'Cobrada / Pagada') return 'status-badge status-paid';
    if (text === 'Concluida')      return 'status-badge status-concluded';
    if (text === 'Pendiente')      return 'status-badge status-pending';
    return 'status-badge status-active';
  }

  _computeModalStatusBadgeClass(status, eventDateStr, isActive) {
    return this._computeBusinessStatusClass(status, eventDateStr, isActive);
  }

  async _handleStatusChange(e) {
    const newStatus = e.target.value;
    const bookingId = e.target.dataset.bookingId;
    if (!bookingId || !newStatus) return;
    try {
      const { updateBookingStatus } = await import('../services/api.js');
      await updateBookingStatus(bookingId, newStatus);
      await this._loadBookings();
    } catch (err) {
      console.error('Error al actualizar estado:', err);
    }
  }

  async _handleModalStatusChange(e) {
    const newStatus = e.target.value;
    const bookingId = e.target.dataset.bookingId;
    if (!bookingId || !newStatus) return;
    try {
      const { updateBookingStatus } = await import('../services/api.js');
      await updateBookingStatus(bookingId, newStatus);
      await this._loadBookings();
      // Refresh the modal object and re-sync the select
      if (this.selectedBookingForModal) {
        const updated = (this.bookings || []).find(b => String(b.id) === String(bookingId));
        if (updated) {
          this.selectedBookingForModal = { ...updated };
          requestAnimationFrame(() => this._syncModalSelect());
        }
      }
    } catch (err) {
      console.error('Error al actualizar estado en modal:', err);
    }
  }
}

customElements.define('partyzone-admin', PartyZoneAdmin);
