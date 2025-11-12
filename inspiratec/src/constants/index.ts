/**
 * Constants
 * 
 * Constantes globales de la aplicación
 */

// API
export const API_CONFIG = {
  BASE_URL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api',
  TIMEOUT: 10000,
  RETRY_ATTEMPTS: 3,
};

// Roles de usuario
export const USER_ROLES = {
  ADMIN: 'admin',
  USER: 'user',
  CLIENT: 'client',
} as const;

// Estados de proyectos
export const PROJECT_STATUS = {
  PLANNING: 'planning',
  IN_PROGRESS: 'in-progress',
  REVIEW: 'review',
  COMPLETED: 'completed',
  CANCELLED: 'cancelled',
} as const;

// Prioridades de proyectos
export const PROJECT_PRIORITY = {
  LOW: 'low',
  MEDIUM: 'medium',
  HIGH: 'high',
  URGENT: 'urgent',
} as const;

// Traducciones de estados
export const STATUS_LABELS = {
  [PROJECT_STATUS.PLANNING]: 'Planificación',
  [PROJECT_STATUS.IN_PROGRESS]: 'En Progreso',
  [PROJECT_STATUS.REVIEW]: 'Revisión',
  [PROJECT_STATUS.COMPLETED]: 'Completado',
  [PROJECT_STATUS.CANCELLED]: 'Cancelado',
};

// Traducciones de prioridades
export const PRIORITY_LABELS = {
  [PROJECT_PRIORITY.LOW]: 'Baja',
  [PROJECT_PRIORITY.MEDIUM]: 'Media',
  [PROJECT_PRIORITY.HIGH]: 'Alta',
  [PROJECT_PRIORITY.URGENT]: 'Urgente',
};

// Colores para estados
export const STATUS_COLORS = {
  [PROJECT_STATUS.PLANNING]: 'bg-gray-100 text-gray-700',
  [PROJECT_STATUS.IN_PROGRESS]: 'bg-blue-100 text-blue-700',
  [PROJECT_STATUS.REVIEW]: 'bg-yellow-100 text-yellow-700',
  [PROJECT_STATUS.COMPLETED]: 'bg-green-100 text-green-700',
  [PROJECT_STATUS.CANCELLED]: 'bg-red-100 text-red-700',
};

// Paginación por defecto
export const PAGINATION = {
  DEFAULT_PAGE: 1,
  DEFAULT_LIMIT: 10,
  PAGE_SIZE_OPTIONS: [10, 25, 50, 100],
};

// Rutas de la aplicación
export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  REGISTER: '/register',
  ADMIN: '/admin',
  ADMIN_PROJECTS: '/admin/proyectos',
  ADMIN_CLIENTS: '/admin/clientes',
  ADMIN_SERVICES: '/admin/servicios',
  ADMIN_USERS: '/admin/usuarios',
  ADMIN_REPORTS: '/admin/reportes',
  ADMIN_SETTINGS: '/admin/configuracion',
};

// Storage keys
export const STORAGE_KEYS = {
  AUTH_TOKEN: 'authToken',
  USER: 'user',
  THEME: 'theme',
  LANGUAGE: 'language',
};

// Mensajes de error
export const ERROR_MESSAGES = {
  GENERIC: 'Ha ocurrido un error. Por favor, intenta de nuevo.',
  NETWORK: 'Error de conexión. Verifica tu internet.',
  UNAUTHORIZED: 'No tienes autorización para realizar esta acción.',
  NOT_FOUND: 'El recurso solicitado no existe.',
  VALIDATION: 'Por favor, verifica los datos ingresados.',
};
