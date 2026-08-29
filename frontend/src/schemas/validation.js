/**
 * @fileoverview Esquemas de validación de datos en cliente utilizando Zod.
 */
import { z } from 'zod';

/**
 * Esquema para validación del formulario de reservación pública.
 */
export const bookingSchema = z.object({
  customer_name: z.string()
    .min(3, 'El nombre completo debe tener al menos 3 caracteres.')
    .max(100, 'El nombre no puede exceder 100 caracteres.')
    .regex(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/, 'El nombre solo debe contener letras y espacios.'),
  
  customer_email: z.string()
    .email('Ingresa un correo electrónico válido (ej. usuario@dominio.com).')
    .max(120, 'El correo no puede exceder 120 caracteres.'),

  customer_phone: z.string()
    .min(10, 'El teléfono debe tener 10 dígitos numéricos.')
    .max(15, 'El teléfono no puede exceder 15 dígitos.')
    .regex(/^[0-9+\s()-]+$/, 'El teléfono solo puede contener números y caracteres válidos.'),

  branch_id: z.number({
    required_error: 'Debes seleccionar una sucursal.',
    invalid_type_error: 'Identificador de sucursal inválido.'
  }).positive('Selecciona una sucursal válida.'),

  event_date: z.string()
    .min(10, 'Selecciona una fecha de evento válida.')
    .refine((val) => {
      const selected = new Date(val);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      return selected >= today;
    }, 'La fecha del evento debe ser hoy o una fecha futura.'),

  time_slot: z.enum(['Matutino', 'Vespertino', 'Nocturno'], {
    errorMap: () => ({ message: 'Debes seleccionar un turno válido (Matutino, Vespertino o Nocturno).' })
  }),

  service_ids: z.array(z.number()).default([]),

  // Datos de tarjeta de crédito/débito simulada (Cumplimiento PCI)
  cardholder_name: z.string()
    .min(3, 'Nombre del titular requerido.')
    .max(100, 'Nombre del titular muy extenso.'),

  card_number: z.string()
    .transform((val) => val.replace(/\s+/g, '').replace(/-/g, ''))
    .refine((val) => /^\d{15,16}$/.test(val), 'El número de tarjeta debe tener 15 o 16 dígitos.'),

  card_exp: z.string()
    .regex(/^(0[1-9]|1[0-2])\/?([0-9]{2})$/, 'Fecha de expiración inválida (formato MM/AA).'),

  card_cvc: z.string()
    .regex(/^\d{3,4}$/, 'El CVC debe contener 3 o 4 dígitos.')
});

/**
 * Esquema para validación del inicio de sesión administrativo.
 */
export const loginSchema = z.object({
  username: z.string()
    .min(3, 'El usuario debe tener al menos 3 caracteres.')
    .max(50, 'El usuario no puede exceder 50 caracteres.'),
  
  password: z.string()
    .min(4, 'La contraseña debe tener al menos 4 caracteres.')
});
