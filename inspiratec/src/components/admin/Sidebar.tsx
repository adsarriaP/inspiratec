import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const location = useLocation();

  const menuItems = [
    { icon: 'fas fa-th-large', label: 'Dashboard', path: '/admin' },
    { icon: 'fas fa-project-diagram', label: 'Proyectos', path: '/admin/proyectos' },
    { icon: 'fas fa-users', label: 'Clientes', path: '/admin/clientes' },
    { icon: 'fas fa-briefcase', label: 'Servicios', path: '/admin/servicios' },
    { icon: 'fas fa-user-tie', label: 'Usuarios', path: '/admin/usuarios' },
    { icon: 'fas fa-chart-line', label: 'Reportes', path: '/admin/reportes' },
    { icon: 'fas fa-cog', label: 'Configuración', path: '/admin/configuracion' },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <div
      className={`${
        isCollapsed ? 'w-20' : 'w-64'
      } bg-gradient-to-b from-inspiraPurple to-purple-900 text-white min-h-screen transition-all duration-300 fixed left-0 top-0 z-40`}
    >
      {/* Logo & Toggle */}
      <div className="flex items-center justify-between p-4 border-b border-purple-700">
        {!isCollapsed && (
          <Link to="/admin" className="text-xl font-bold">
            Inspira<span className="text-inspiraYellow">Tec</span>
          </Link>
        )}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-2 hover:bg-purple-700 rounded-lg transition"
        >
          <i className={`fas fa-${isCollapsed ? 'angle-right' : 'angle-left'}`}></i>
        </button>
      </div>

      {/* Navigation Menu */}
      <nav className="mt-6">
        <ul className="space-y-2 px-3">
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link
                to={item.path}
                className={`flex items-center gap-4 px-4 py-3 rounded-lg transition ${
                  isActive(item.path)
                    ? 'bg-inspiraYellow text-gray-900 font-semibold'
                    : 'hover:bg-purple-700'
                }`}
              >
                <i className={`${item.icon} ${isCollapsed ? 'text-xl' : 'text-lg'}`}></i>
                {!isCollapsed && <span>{item.label}</span>}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* User Info */}
      {!isCollapsed && (
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-purple-700">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-inspiraYellow flex items-center justify-center text-gray-900 font-bold">
              AD
            </div>
            <div className="flex-1">
              <p className="text-sm font-semibold">Administrador</p>
              <p className="text-xs text-purple-300">admin@inspiratec.com</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
