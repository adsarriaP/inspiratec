# Arquitectura de Carpetas - InspiraTec

Esta es la estructura de carpetas del proyecto InspiraTec, diseñada para escalar y facilitar la integración con el backend.

## 📁 Estructura Principal

```
src/
├── api/                    # Configuración de clientes HTTP
│   └── apiClient.ts       # Cliente Axios configurado con interceptors
│
├── assets/                 # Recursos estáticos (imágenes, iconos, etc)
│
├── components/             # Componentes de UI reutilizables
│   ├── admin/             # Componentes específicos del panel admin
│   │   ├── Sidebar.tsx
│   │   ├── AdminNavbar.tsx
│   │   └── Dashboard.tsx
│   ├── Navbar.tsx
│   ├── HeroSection.tsx
│   └── ...
│
├── constants/              # Constantes globales
│   └── index.ts           # Configuraciones, rutas, estados, etc.
│
├── context/                # Context API de React
│   └── AuthContext.tsx    # Contexto de autenticación
│
├── helpers/                # Funciones auxiliares
│   ├── format.helper.ts   # Formateo de datos (fechas, moneda, etc)
│   ├── validation.helper.ts # Validaciones
│   └── storage.helper.ts  # Manejo de localStorage/sessionStorage
│
├── hooks/                  # Custom hooks
│   ├── useAuth.ts         # Hook de autenticación
│   ├── useFetch.ts        # Hook genérico para peticiones
│   └── useProjects.ts     # Hook específico para proyectos
│
├── interfaces/             # TypeScript interfaces
│   ├── auth.interface.ts  # Interfaces de autenticación
│   ├── project.interface.ts # Interfaces de proyectos
│   ├── client.interface.ts  # Interfaces de clientes
│   └── api.interface.ts   # Interfaces genéricas de API
│
├── layouts/                # Layouts de página
│   └── AdminLayout.tsx    # Layout del panel admin
│
├── middleware/             # Middleware (Guards, Protected Routes)
│   └── ProtectedRoute.tsx # Protección de rutas privadas
│
├── pages/                  # Páginas de la aplicación
│   ├── Home.tsx
│   ├── Login.tsx
│   └── Admin.tsx
│
├── services/               # Servicios de API (comunicación con backend)
│   ├── auth.service.ts    # Servicios de autenticación
│   ├── projects.service.ts # Servicios de proyectos
│   └── clients.service.ts # Servicios de clientes
│
├── utils/                  # Utilidades generales
│   └── types.ts
│
├── App.tsx                 # Componente principal
├── main.tsx               # Punto de entrada
└── index.css              # Estilos globales
```

## 🎯 Propósito de cada carpeta

### `/api`
- **Configuración de clientes HTTP** (Axios, Fetch)
- Interceptores de peticiones y respuestas
- Manejo centralizado de headers y tokens

### `/services`
- **Lógica de comunicación con el backend**
- Cada servicio maneja un módulo específico (auth, projects, clients, etc.)
- Métodos CRUD y operaciones específicas del negocio

### `/interfaces`
- **Definiciones de tipos TypeScript**
- Interfaces para requests y responses
- Tipos de datos del dominio

### `/hooks`
- **Custom hooks de React**
- Reutilización de lógica
- Manejo de estado y efectos

### `/context`
- **Estado global con Context API**
- Compartir estado entre componentes
- Alternativa a Redux para casos simples

### `/helpers`
- **Funciones auxiliares puras**
- Formateo, validaciones, transformaciones
- Sin dependencia de React

### `/constants`
- **Valores constantes**
- Configuraciones, enums, rutas
- Evitar "magic numbers/strings"

### `/middleware`
- **Protección de rutas**
- Guards de autenticación
- Validación de permisos

### `/components`
- **Componentes de UI**
- Reutilizables y específicos
- Organizados por módulo cuando sea necesario

### `/layouts`
- **Estructuras de página**
- Layouts reutilizables (admin, public, etc.)

### `/pages`
- **Páginas de la aplicación**
- Composición de componentes
- Conectadas a rutas

## 🔄 Flujo de datos

```
Componente → Hook → Service → API Client → Backend
                ↓
              Context (estado global)
```

## 📝 Ejemplo de uso

### 1. Crear un servicio
```typescript
// src/services/users.service.ts
import apiClient from '../api/apiClient';

export const usersService = {
  async getAll() {
    const response = await apiClient.get('/users');
    return response.data;
  }
};
```

### 2. Crear un hook
```typescript
// src/hooks/useUsers.ts
import { useState } from 'react';
import { usersService } from '../services/users.service';

export const useUsers = () => {
  const [users, setUsers] = useState([]);
  
  const fetchUsers = async () => {
    const data = await usersService.getAll();
    setUsers(data);
  };
  
  return { users, fetchUsers };
};
```

### 3. Usar en componente
```typescript
// src/components/UsersList.tsx
import { useUsers } from '../hooks/useUsers';

const UsersList = () => {
  const { users, fetchUsers } = useUsers();
  
  useEffect(() => {
    fetchUsers();
  }, []);
  
  return <div>{/* render users */}</div>;
};
```

## 🛡️ Rutas Protegidas

```typescript
// src/App.tsx
import { ProtectedRoute } from './middleware/ProtectedRoute';

<Route 
  path="/admin" 
  element={
    <ProtectedRoute requireAdmin>
      <Admin />
    </ProtectedRoute>
  } 
/>
```

## 🔧 Configuración de Variables de Entorno

Copia `.env.example` a `.env.local` y configura:
```bash
VITE_API_BASE_URL=http://localhost:3000/api
```

## 📦 Dependencias Necesarias

Para que todo funcione, instala:
```bash
npm install axios
```

## ✅ Mejores Prácticas

1. **Servicios**: Un archivo por módulo del backend
2. **Interfaces**: Definir tipos para request y response
3. **Hooks**: Separar lógica de negocio de UI
4. **Context**: Solo para estado realmente global
5. **Helpers**: Funciones puras sin side effects
6. **Constants**: Centralizar valores hardcodeados

## 🚀 Próximos Pasos

1. Instalar Axios: `npm install axios`
2. Configurar `.env.local` con la URL del backend
3. Implementar los servicios según tus endpoints
4. Crear hooks personalizados para cada módulo
5. Proteger rutas con ProtectedRoute
6. Integrar AuthContext en App.tsx
