/**
 * Validation Helpers
 * 
 * Funciones auxiliares para validación de datos
 */

/**
 * Validar email
 */
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Validar contraseña
 * Mínimo 8 caracteres, al menos una mayúscula, una minúscula y un número
 */
export const isValidPassword = (password: string): boolean => {
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]{8,}$/;
  return passwordRegex.test(password);
};

/**
 * Validar teléfono
 */
export const isValidPhone = (phone: string): boolean => {
  const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
  return phoneRegex.test(phone);
};

/**
 * Validar URL
 */
export const isValidURL = (url: string): boolean => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

/**
 * Validar que un campo no esté vacío
 */
export const isNotEmpty = (value: string): boolean => {
  return value.trim().length > 0;
};

/**
 * Validar longitud mínima
 */
export const hasMinLength = (value: string, min: number): boolean => {
  return value.length >= min;
};

/**
 * Validar longitud máxima
 */
export const hasMaxLength = (value: string, max: number): boolean => {
  return value.length <= max;
};

/**
 * Validar que dos valores sean iguales (para confirmar contraseña)
 */
export const isEqual = (value1: string, value2: string): boolean => {
  return value1 === value2;
};

/**
 * Validar número
 */
export const isNumeric = (value: string): boolean => {
  return !isNaN(Number(value));
};

/**
 * Validar que sea un número positivo
 */
export const isPositiveNumber = (value: number): boolean => {
  return value > 0;
};
