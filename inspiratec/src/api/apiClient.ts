/**
 * API Client Configuration
 * 
 * Configuración centralizada del cliente HTTP (Axios/Fetch)
 * para todas las peticiones al backend
 */

import axios from 'axios';

// Base URL del backend - cambiar según el entorno
const BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api';

// Crear instancia de Axios con configuración por defecto
const apiClient = axios.create({
  baseURL: BASE_URL,
  timeout: 10000, // 10 segundos
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request Interceptor - Agregar token de autenticación
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response Interceptor - Manejar errores globales
apiClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Manejar errores comunes
    if (error.response?.status === 401) {
      // Token expirado o inválido - redirigir a login
      localStorage.removeItem('authToken');
      window.location.href = '/login';
    }
    
    if (error.response?.status === 403) {
      // Acceso denegado
      console.error('Acceso denegado');
    }
    
    if (error.response?.status >= 500) {
      // Error del servidor
      console.error('Error del servidor');
    }
    
    return Promise.reject(error);
  }
);

export default apiClient;
