/**
 * @fileoverview Servicio cliente para comunicación HTTP con el backend de Flask.
 */

const isLocal = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';

const API_BASE = isLocal
  ? '/api'
  : 'https://banquetes-hub.onrender.com/api';

/**
 * Obtiene el catálogo de sucursales activas.
 * @returns {Promise<Array>}
 */
export async function fetchBranches() {
  const response = await fetch(`${API_BASE}/branches`);
  const data = await response.json();
  if (!response.ok) throw new Error(data.message || 'Error al obtener sucursales');
  return data.data;
}

/**
 * Obtiene el catálogo de servicios adicionales disponibles.
 * @returns {Promise<Array>}
 */
export async function fetchServices() {
  const response = await fetch(`${API_BASE}/services`);
  const data = await response.json();
  if (!response.ok) throw new Error(data.message || 'Error al obtener servicios');
  return data.data;
}

/**
 * Consulta la disponibilidad de una sucursal en una fecha y turno determinados.
 * @param {number} branchId
 * @param {string} eventDate
 * @param {string} timeSlot
 * @returns {Promise<Object>}
 */
export async function checkAvailability(branchId, eventDate, timeSlot) {
  const params = new URLSearchParams({
    branch_id: branchId,
    event_date: eventDate,
    time_slot: timeSlot
  });
  const response = await fetch(`${API_BASE}/availability?${params.toString()}`);
  const data = await response.json();
  return data;
}

/**
 * Registra una nueva reservación enviando los datos validados por Zod.
 * @param {Object} bookingData
 * @returns {Promise<Object>}
 */
export async function createBooking(bookingData) {
  const response = await fetch(`${API_BASE}/bookings`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(bookingData)
  });
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || 'Error al procesar la reservación');
  }
  return data;
}

/**
 * Inicia sesión para personal administrativo.
 * @param {string} username
 * @param {string} password
 * @returns {Promise<Object>}
 */
export async function adminLogin(username, password) {
  const response = await fetch(`${API_BASE}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password })
  });
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || 'Credenciales incorrectas');
  }
  return data;
}

/**
 * Obtiene la bitácora completa de reservaciones para el dashboard de administración.
 * @param {boolean} showAll
 * @returns {Promise<Array>}
 */
export async function fetchAdminBookings(showAll = true) {
  const response = await fetch(`${API_BASE}/admin/bookings?show_all=${showAll}`);
  const data = await response.json();
  if (!response.ok) throw new Error(data.message || 'Error al obtener bitácora');
  return data.data;
}

/**
 * Aplica baja lógica (Soft Delete) a una reservación.
 * @param {number} bookingId
 * @returns {Promise<Object>}
 */
export async function softDeleteBooking(bookingId) {
  const response = await fetch(`${API_BASE}/admin/bookings/${bookingId}/soft-delete`, {
    method: 'PATCH'
  });
  const data = await response.json();
  if (!response.ok) throw new Error(data.message || 'Error al dar de baja');
  return data;
}

/**
 * Restaura una reservación dada de baja lógica.
 * @param {number} bookingId
 * @returns {Promise<Object>}
 */
export async function restoreBooking(bookingId) {
  const response = await fetch(`${API_BASE}/admin/bookings/${bookingId}/restore`, {
    method: 'PATCH'
  });
  const data = await response.json();
  if (!response.ok) throw new Error(data.message || 'Error al restaurar');
  return data;
}

/**
 * Actualiza el estado de negocio de una reservación.
 * @param {number|string} bookingId
 * @param {string} status - CONFIRMADA | COBRADA | CONCLUIDA | CANCELADA
 * @returns {Promise<Object>}
 */
export async function updateBookingStatus(bookingId, status) {
  const response = await fetch(`${API_BASE}/admin/bookings/${bookingId}/status`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ status })
  });
  const data = await response.json();
  if (!response.ok) throw new Error(data.message || 'Error al actualizar estado');
  return data;
}
