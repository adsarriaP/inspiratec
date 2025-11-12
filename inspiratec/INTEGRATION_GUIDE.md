# 🏗️ Guía de Integración con Backend - InspiraTec

Esta guía te ayudará a integrar el frontend de InspiraTec con tu backend.

## 📋 Prerequisitos

✅ Axios ya está instalado
✅ Estructura de carpetas creada
✅ Servicios, hooks e interfaces ya configurados

## 🚀 Pasos para Integrar

### 1. Configurar Variables de Entorno

Crea un archivo `.env.local` en la raíz del proyecto:

```bash
cp .env.example .env.local
```

Edita `.env.local` con la URL de tu backend:

```env
VITE_API_BASE_URL=http://localhost:3000/api
```

### 2. Envolver la app con AuthProvider

Edita `src/main.tsx`:

```typescript
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { AuthProvider } from './context/AuthContext'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </StrictMode>,
)
```

### 3. Proteger Rutas del Admin

Edita `src/App.tsx`:

```typescript
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Admin from './pages/Admin';
import { ProtectedRoute } from './middleware/ProtectedRoute';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route 
          path="/admin" 
          element={
            <ProtectedRoute requireAdmin>
              <Admin />
            </ProtectedRoute>
          } 
        />
      </Routes>
    </Router>
  );
}

export default App;
```

### 4. Integrar Login con el Backend

Edita `src/pages/Login.tsx` para usar el servicio de autenticación:

```typescript
import { useState } from 'react';
import type { FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      await login({ email, password });
      navigate('/admin'); // Redirigir al admin después del login
    } catch (err: any) {
      setError(err.response?.data?.message || 'Error al iniciar sesión');
    } finally {
      setLoading(false);
    }
  };

  // ... resto del componente
```

### 5. Usar Servicios en Componentes

Ejemplo para cargar proyectos en el Dashboard:

```typescript
// src/components/admin/Dashboard.tsx
import { useEffect, useState } from 'react';
import { useProjects } from '../../hooks/useProjects';
import type { Project } from '../../interfaces/project.interface';

const Dashboard = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const { getProjects, loading, error } = useProjects();

  useEffect(() => {
    loadProjects();
  }, []);

  const loadProjects = async () => {
    try {
      const data = await getProjects({ limit: 4 });
      setProjects(data.projects);
    } catch (err) {
      console.error('Error al cargar proyectos:', err);
    }
  };

  if (loading) return <div>Cargando...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      {/* Renderizar proyectos */}
      {projects.map(project => (
        <div key={project.id}>{project.name}</div>
      ))}
    </div>
  );
};
```

## 🔧 Estructura de Endpoints del Backend

Tu backend debe tener estos endpoints:

### Autenticación
```
POST   /api/auth/login          - Iniciar sesión
POST   /api/auth/register       - Registrar usuario
POST   /api/auth/logout         - Cerrar sesión
GET    /api/auth/me             - Obtener usuario actual
POST   /api/auth/forgot-password - Recuperar contraseña
POST   /api/auth/reset-password  - Resetear contraseña
```

### Proyectos
```
GET    /api/projects            - Listar proyectos
GET    /api/projects/:id        - Obtener proyecto
POST   /api/projects            - Crear proyecto
PUT    /api/projects/:id        - Actualizar proyecto
DELETE /api/projects/:id        - Eliminar proyecto
PATCH  /api/projects/:id/status - Cambiar estado
```

### Clientes
```
GET    /api/clients             - Listar clientes
GET    /api/clients/:id         - Obtener cliente
POST   /api/clients             - Crear cliente
PUT    /api/clients/:id         - Actualizar cliente
DELETE /api/clients/:id         - Eliminar cliente
```

## 📦 Formato de Respuestas del Backend

### Login exitoso
```json
{
  "user": {
    "id": "123",
    "name": "Admin",
    "email": "admin@inspiratec.com",
    "role": "admin"
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

### Lista de proyectos
```json
{
  "projects": [
    {
      "id": "1",
      "name": "Sistema E-commerce",
      "description": "...",
      "status": "in-progress",
      "progress": 75,
      ...
    }
  ],
  "total": 24,
  "page": 1
}
```

### Errores
```json
{
  "message": "Credenciales inválidas",
  "statusCode": 401
}
```

## 🔐 Autenticación con JWT

El token se guarda automáticamente en `localStorage` y se envía en todas las peticiones:

```
Authorization: Bearer <token>
```

El interceptor de Axios ya está configurado para:
- ✅ Agregar el token automáticamente
- ✅ Redirigir al login si el token expira (401)
- ✅ Manejar errores comunes

## 🎨 Personalizar según tu Backend

### Si tu backend tiene rutas diferentes:

Edita los servicios en `src/services/`:

```typescript
// Ejemplo: si tu endpoint es /api/v1/projects en lugar de /api/projects
async getAll(): Promise<Project[]> {
  const response = await apiClient.get('/v1/projects'); // Cambiar aquí
  return response.data;
}
```

### Si tu backend devuelve datos en otro formato:

Adapta la respuesta en el servicio:

```typescript
async getAll(): Promise<Project[]> {
  const response = await apiClient.get('/projects');
  // Si el backend devuelve { data: { items: [...] } }
  return response.data.data.items;
}
```

### Si usas cookies en lugar de Bearer token:

Edita `src/api/apiClient.ts`:

```typescript
const apiClient = axios.create({
  baseURL: BASE_URL,
  withCredentials: true, // Agregar esto
  headers: {
    'Content-Type': 'application/json',
  },
});

// Comentar o eliminar el interceptor de Authorization
```

## 🧪 Probar la Integración

### 1. Verifica que el backend esté corriendo
```bash
curl http://localhost:3000/api/health
```

### 2. Prueba el login desde el frontend
- Ve a `http://localhost:5173/login`
- Ingresa credenciales válidas
- Verifica que te redirija a `/admin`

### 3. Verifica el token en DevTools
- Abre las herramientas de desarrollador (F12)
- Ve a Application > Local Storage
- Deberías ver `authToken` con el JWT

### 4. Prueba rutas protegidas
- Sin login, intenta ir a `/admin`
- Deberías ser redirigido a `/login`

## ❗ Troubleshooting

### Error: CORS
Si ves errores de CORS, configura tu backend para permitir el origen del frontend:

```javascript
// Express.js ejemplo
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));
```

### Error: Network Error
- Verifica que el backend esté corriendo
- Verifica la URL en `.env.local`
- Verifica que no haya problemas de firewall

### Error: 401 Unauthorized
- Verifica que el token se esté enviando
- Verifica que el backend acepte el formato `Bearer <token>`
- Verifica que el token no haya expirado

## 📚 Recursos Adicionales

- [Documentación de Axios](https://axios-http.com/docs/intro)
- [React Context API](https://react.dev/reference/react/useContext)
- [React Router](https://reactrouter.com/en/main)

## 🎯 Siguientes Pasos

1. ✅ Configurar `.env.local`
2. ✅ Envolver app con `AuthProvider`
3. ✅ Proteger rutas con `ProtectedRoute`
4. ✅ Integrar login real
5. ✅ Cargar datos reales en Dashboard
6. ✅ Crear formularios para CRUD de proyectos/clientes
7. ✅ Agregar manejo de errores con toasts/notificaciones

¡Tu aplicación está lista para conectarse al backend! 🚀
