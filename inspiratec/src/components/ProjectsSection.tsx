const ProjectsSection = () => {
  const projects = [
    {
      icon: 'fas fa-shopping-cart',
      gradient: 'from-inspiraPurple to-inspiraYellow',
      title: 'Sistema de E-commerce',
      description: 'Plataforma de comercio electrónico personalizada que aumentó las ventas en un 200%.',
      tags: [
        { text: 'Desarrollo Web', color: 'inspiraPurple' as const },
        { text: 'Sistema de Pago', color: 'inspiraYellow' as const },
        { text: 'UI/UX Design', color: 'gray' as const }
      ],
      linkColor: 'inspiraPurple'
    },
    {
      icon: 'fas fa-mobile-alt',
      gradient: 'from-inspiraYellow to-inspiraPurple',
      title: 'App de Delivery',
      description: 'Aplicación móvil para gestión de entregas con seguimiento en tiempo real.',
      tags: [
        { text: 'App Móvil', color: 'inspiraYellow' as const },
        { text: 'Geolocalización', color: 'inspiraPurple' as const },
        { text: 'Flutter', color: 'gray' as const }
      ],
      linkColor: 'inspiraYellow'
    },
    {
      icon: 'fas fa-chart-pie',
      gradient: 'from-inspiraPurple to-gray-800',
      title: 'Dashboard de Analytics',
      description: 'Plataforma de análisis de datos para toma de decisiones estratégicas.',
      tags: [
        { text: 'BI', color: 'inspiraPurple' as const },
        { text: 'Big Data', color: 'gray' as const },
        { text: 'React', color: 'gray' as const }
      ],
      linkColor: 'inspiraPurple'
    },
    {
      icon: 'fas fa-robot',
      gradient: 'from-gray-800 to-inspiraYellow',
      title: 'Chatbot Inteligente',
      description: 'Asistente virtual con IA para atención al cliente automatizada.',
      tags: [
        { text: 'IA', color: 'gray' as const },
        { text: 'NLP', color: 'inspiraYellow' as const },
        { text: 'Python', color: 'gray' as const }
      ],
      linkColor: 'inspiraYellow'
    }
  ];

  return (
    <section id="proyectos" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Proyectos <span className="text-inspiraYellow">Destacados</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Algunos de los proyectos que hemos desarrollado para nuestros clientes.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg">
              <div className={`h-48 bg-gradient-to-r ${project.gradient} flex items-center justify-center`}>
                <i className={`${project.icon} text-white text-6xl`}></i>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      className={`px-3 py-1 ${
                        tag.color === 'inspiraPurple' 
                          ? 'bg-inspiraPurple bg-opacity-10 text-inspiraPurple' 
                          : tag.color === 'inspiraYellow' 
                          ? 'bg-inspiraYellow bg-opacity-10 text-inspiraYellow' 
                          : 'bg-gray-100 text-gray-600'
                      } rounded-full text-sm`}
                    >
                      {tag.text}
                    </span>
                  ))}
                </div>
                <a href="#" className={`text-${project.linkColor} font-semibold`}>
                  Ver caso de éxito <i className="fas fa-arrow-right ml-2"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="#" 
            className="px-6 py-3 border-2 border-inspiraPurple text-inspiraPurple rounded-full font-bold inline-block hover:bg-inspiraPurple hover:text-white transition"
          >
            Ver todos los proyectos
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
