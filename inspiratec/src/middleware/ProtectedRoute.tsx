/**
 * Protected Route Component
 * 
 * Componente para proteger rutas que requieren autenticación
 */

import { Navigate } from 'react-router-dom';
import type { ReactNode } from 'react';
import { useAuth } from '../hooks/useAuth';
import { ROUTES } from '../constants';

interface ProtectedRouteProps {
  children: ReactNode;
  requireAdmin?: boolean;
}

export const ProtectedRoute = ({ children, requireAdmin = false }: ProtectedRouteProps) => {
  const { isAuthenticated, user, isLoading } = useAuth();

  // Mientras carga, mostrar un spinner o nada
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-inspiraPurple"></div>
      </div>
    );
  }

  // Si no está autenticado, redirigir a login
  if (!isAuthenticated) {
    return <Navigate to={ROUTES.LOGIN} replace />;
  }

  // Si requiere admin y el usuario no lo es, redirigir a home
  if (requireAdmin && user?.role !== 'admin') {
    return <Navigate to={ROUTES.HOME} replace />;
  }

  return <>{children}</>;
};
