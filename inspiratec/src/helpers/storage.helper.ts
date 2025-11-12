/**
 * Storage Helpers
 * 
 * Funciones auxiliares para manejar localStorage y sessionStorage
 */

/**
 * Guardar en localStorage
 */
export const setLocalStorage = <T>(key: string, value: T): void => {
  try {
    const serializedValue = JSON.stringify(value);
    localStorage.setItem(key, serializedValue);
  } catch (error) {
    console.error(`Error al guardar en localStorage (${key}):`, error);
  }
};

/**
 * Obtener de localStorage
 */
export const getLocalStorage = <T>(key: string): T | null => {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  } catch (error) {
    console.error(`Error al leer de localStorage (${key}):`, error);
    return null;
  }
};

/**
 * Eliminar de localStorage
 */
export const removeLocalStorage = (key: string): void => {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.error(`Error al eliminar de localStorage (${key}):`, error);
  }
};

/**
 * Limpiar todo localStorage
 */
export const clearLocalStorage = (): void => {
  try {
    localStorage.clear();
  } catch (error) {
    console.error('Error al limpiar localStorage:', error);
  }
};

/**
 * Guardar en sessionStorage
 */
export const setSessionStorage = <T>(key: string, value: T): void => {
  try {
    const serializedValue = JSON.stringify(value);
    sessionStorage.setItem(key, serializedValue);
  } catch (error) {
    console.error(`Error al guardar en sessionStorage (${key}):`, error);
  }
};

/**
 * Obtener de sessionStorage
 */
export const getSessionStorage = <T>(key: string): T | null => {
  try {
    const item = sessionStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  } catch (error) {
    console.error(`Error al leer de sessionStorage (${key}):`, error);
    return null;
  }
};
