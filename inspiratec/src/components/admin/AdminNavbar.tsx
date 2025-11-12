import { useState } from 'react';

const AdminNavbar = () => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  return (
    <header className="bg-white shadow-md px-6 py-4 fixed top-0 right-0 left-64 z-30">
      <div className="flex items-center justify-between">
        {/* Search Bar */}
        <div className="flex-1 max-w-xl">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <i className="fas fa-search text-gray-400"></i>
            </div>
            <input
              type="text"
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-inspiraPurple focus:border-transparent"
              placeholder="Buscar proyectos, clientes..."
            />
          </div>
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center gap-4 ml-6">
          {/* Notifications */}
          <div className="relative">
            <button
              onClick={() => setShowNotifications(!showNotifications)}
              className="relative p-2 hover:bg-gray-100 rounded-lg transition"
            >
              <i className="fas fa-bell text-gray-600 text-xl"></i>
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            
            {showNotifications && (
              <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 py-2">
                <div className="px-4 py-2 border-b border-gray-200">
                  <h3 className="font-semibold text-gray-800">Notificaciones</h3>
                </div>
                <div className="max-h-96 overflow-y-auto">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="px-4 py-3 hover:bg-gray-50 cursor-pointer border-b border-gray-100">
                      <p className="text-sm font-medium text-gray-800">Nuevo proyecto asignado</p>
                      <p className="text-xs text-gray-500 mt-1">Hace 2 horas</p>
                    </div>
                  ))}
                </div>
                <div className="px-4 py-2 text-center">
                  <a href="#" className="text-sm text-inspiraPurple hover:underline">Ver todas</a>
                </div>
              </div>
            )}
          </div>

          {/* Messages */}
          <button className="relative p-2 hover:bg-gray-100 rounded-lg transition">
            <i className="fas fa-envelope text-gray-600 text-xl"></i>
            <span className="absolute top-1 right-1 w-2 h-2 bg-inspiraYellow rounded-full"></span>
          </button>

          {/* Profile */}
          <div className="relative">
            <button
              onClick={() => setShowProfile(!showProfile)}
              className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded-lg transition"
            >
              <div className="w-9 h-9 rounded-full bg-gradient-to-r from-inspiraPurple to-inspiraYellow flex items-center justify-center text-white font-bold">
                AD
              </div>
              <div className="hidden md:block text-left">
                <p className="text-sm font-semibold text-gray-800">Admin</p>
                <p className="text-xs text-gray-500">Administrador</p>
              </div>
              <i className="fas fa-chevron-down text-gray-400 text-sm"></i>
            </button>

            {showProfile && (
              <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-200 py-2">
                <a href="#" className="flex items-center gap-3 px-4 py-2 hover:bg-gray-50">
                  <i className="fas fa-user text-gray-600"></i>
                  <span className="text-sm text-gray-700">Mi Perfil</span>
                </a>
                <a href="#" className="flex items-center gap-3 px-4 py-2 hover:bg-gray-50">
                  <i className="fas fa-cog text-gray-600"></i>
                  <span className="text-sm text-gray-700">Configuración</span>
                </a>
                <hr className="my-2" />
                <a href="/" className="flex items-center gap-3 px-4 py-2 hover:bg-gray-50 text-red-600">
                  <i className="fas fa-sign-out-alt"></i>
                  <span className="text-sm">Cerrar Sesión</span>
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default AdminNavbar;
