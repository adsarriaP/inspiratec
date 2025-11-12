const Dashboard = () => {
  const stats = [
    { icon: 'fas fa-project-diagram', label: 'Proyectos Activos', value: '24', color: 'bg-blue-500', change: '+12%' },
    { icon: 'fas fa-users', label: 'Clientes Totales', value: '156', color: 'bg-green-500', change: '+8%' },
    { icon: 'fas fa-dollar-sign', label: 'Ingresos del Mes', value: '$45,890', color: 'bg-inspiraYellow', change: '+23%' },
    { icon: 'fas fa-tasks', label: 'Tareas Completadas', value: '89%', color: 'bg-inspiraPurple', change: '+5%' },
  ];

  const recentProjects = [
    { name: 'Sistema E-commerce', client: 'TiendaOnline', status: 'En Progreso', progress: 75, color: 'bg-blue-500' },
    { name: 'App Móvil Delivery', client: 'LogiTech', status: 'En Progreso', progress: 60, color: 'bg-green-500' },
    { name: 'Dashboard Analytics', client: 'FinanciaPlus', status: 'Revisión', progress: 90, color: 'bg-inspiraYellow' },
    { name: 'Chatbot IA', client: 'TechSolutions', status: 'Completado', progress: 100, color: 'bg-inspiraPurple' },
  ];

  const recentActivities = [
    { user: 'Juan Pérez', action: 'completó la tarea "Diseño UI Dashboard"', time: 'Hace 5 min', icon: 'fa-check-circle', color: 'text-green-500' },
    { user: 'Ana García', action: 'actualizó el proyecto "App Móvil"', time: 'Hace 15 min', icon: 'fa-edit', color: 'text-blue-500' },
    { user: 'Carlos Ruiz', action: 'agregó un nuevo cliente', time: 'Hace 1 hora', icon: 'fa-user-plus', color: 'text-purple-500' },
    { user: 'María López', action: 'comentó en "Sistema E-commerce"', time: 'Hace 2 horas', icon: 'fa-comment', color: 'text-yellow-500' },
  ];

  return (
    <div className="p-6">
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Dashboard</h1>
        <p className="text-gray-600">Bienvenido de nuevo, aquí tienes un resumen de tu negocio</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition">
            <div className="flex items-center justify-between mb-4">
              <div className={`w-12 h-12 ${stat.color} rounded-lg flex items-center justify-center`}>
                <i className={`${stat.icon} text-white text-xl`}></i>
              </div>
              <span className="text-green-500 text-sm font-semibold">{stat.change}</span>
            </div>
            <h3 className="text-gray-600 text-sm mb-1">{stat.label}</h3>
            <p className="text-3xl font-bold text-gray-800">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Recent Projects */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-800">Proyectos Recientes</h2>
            <a href="#" className="text-inspiraPurple text-sm font-semibold hover:underline">Ver todos</a>
          </div>
          <div className="space-y-4">
            {recentProjects.map((project, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h3 className="font-semibold text-gray-800">{project.name}</h3>
                    <p className="text-sm text-gray-500">{project.client}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    project.status === 'Completado' ? 'bg-green-100 text-green-700' :
                    project.status === 'Revisión' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-blue-100 text-blue-700'
                  }`}>
                    {project.status}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex-1 bg-gray-200 rounded-full h-2">
                    <div 
                      className={`${project.color} h-2 rounded-full transition-all`} 
                      style={{ width: `${project.progress}%` }}
                    ></div>
                  </div>
                  <span className="text-sm font-semibold text-gray-600">{project.progress}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Stats */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-6">Estadísticas Rápidas</h2>
          <div className="space-y-6">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-600">Satisfacción del Cliente</span>
                <span className="text-sm font-bold text-gray-800">95%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full" style={{ width: '95%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-600">Proyectos Completados</span>
                <span className="text-sm font-bold text-gray-800">78%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-500 h-2 rounded-full" style={{ width: '78%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-600">Eficiencia del Equipo</span>
                <span className="text-sm font-bold text-gray-800">88%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-inspiraPurple h-2 rounded-full" style={{ width: '88%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-600">Crecimiento Mensual</span>
                <span className="text-sm font-bold text-gray-800">23%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-inspiraYellow h-2 rounded-full" style={{ width: '23%' }}></div>
              </div>
            </div>
          </div>

          {/* Calendar Widget */}
          <div className="mt-8 p-4 bg-gradient-to-br from-inspiraPurple to-inspiraYellow rounded-lg text-white">
            <div className="flex items-center justify-between mb-2">
              <i className="fas fa-calendar-alt text-2xl"></i>
              <span className="text-sm opacity-90">Próxima reunión</span>
            </div>
            <p className="font-semibold">Revisión de proyecto</p>
            <p className="text-sm opacity-90">Mañana, 10:00 AM</p>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-800">Actividad Reciente</h2>
          <a href="#" className="text-inspiraPurple text-sm font-semibold hover:underline">Ver todo</a>
        </div>
        <div className="space-y-4">
          {recentActivities.map((activity, index) => (
            <div key={index} className="flex items-start gap-4 pb-4 border-b border-gray-100 last:border-0">
              <div className={`w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center ${activity.color}`}>
                <i className={`fas ${activity.icon}`}></i>
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-800">
                  <span className="font-semibold">{activity.user}</span> {activity.action}
                </p>
                <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
