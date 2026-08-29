/**
 * @fileoverview Constantes y configuración global de assets y textos estáticos para PartyZone.
 */

// <!-- TODO: Update media asset path for production -->
export const ASSET_PATHS = {
  LOGO: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=150&q=80',
  HERO_BG: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1600&q=80',
  BRANCH_CUMBRES: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=800&q=80',
  BRANCH_SAN_JERONIMO: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=800&q=80',
  BRANCH_VALLE_REAL: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800&q=80',
  BRANCH_LINDA_VISTA: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=800&q=80'
};

export const BRAND_TEXTS = {
  NAME: 'Banquetes Hub',
  TAGLINE: 'Salones de Eventos & Banquetes de Gala',
  HEADER_TITLE: 'Banquetes Hub | Salones de Eventos',
  HERO_TITLE: 'Momentos Inolvidables en el Salón Perfecto',
  HERO_SUBTITLE: 'Descubre nuestras 4 exclusivas sucursales diseñadas para bodas, XV años, aniversarios y eventos corporativos con la más alta distinción.',
  CONFIRMATION_TEMPLATE: (folio) => `Estamos confirmando tu reservación. Tu folio de seguimiento es ${folio}. Nos pondremos en contacto mediante correo`
};

export const TIME_SLOTS = [
  { id: 'Matutino', label: 'Matutino (09:00 - 14:00 hrs)', description: 'Ideal para desayunos y recepciones matinales.' },
  { id: 'Vespertino', label: 'Vespertino (15:00 - 20:00 hrs)', description: 'Perfecto para comidas de gala y eventos familiares.' },
  { id: 'Nocturno', label: 'Nocturno (21:00 - 03:00 hrs)', description: 'La máxima distinción para cenas de gala y fiestas inolvidables.' }
];

/**
 * Formatea un valor numérico a moneda mexicana oficial (MXN).
 * @param {number} amount - Monto numérico
 * @returns {string} Ejemplo: "$18,500.00 MXN"
 */
export function formatMXN(amount) {
  if (amount === undefined || amount === null || isNaN(amount)) return '$0.00 MXN';
  return new Intl.NumberFormat('es-MX', {
    style: 'currency',
    currency: 'MXN',
    minimumFractionDigits: 2
  }).format(amount) + ' MXN';
}
