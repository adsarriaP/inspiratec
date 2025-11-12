const ServicesSection = () => {
  const services = [
    {
      icon: 'fas fa-laptop-code',
      color: 'inspiraPurple',
      title: 'Desarrollo Web',
      description: 'Creación de sitios web y aplicaciones web a medida con las últimas tecnologías.',
      linkColor: 'inspiraYellow'
    },
    {
      icon: 'fas fa-mobile-alt',
      color: 'inspiraYellow',
      title: 'Apps Móviles',
      description: 'Desarrollo de aplicaciones móviles nativas e híbridas para iOS y Android.',
      linkColor: 'inspiraPurple'
    },
    {
      icon: 'fas fa-chart-line',
      color: 'inspiraPurple',
      title: 'Business Intelligence',
      description: 'Soluciones de análisis de datos para tomar decisiones basadas en información.',
      linkColor: 'inspiraYellow'
    },
    {
      icon: 'fas fa-cloud',
      color: 'inspiraYellow',
      title: 'Cloud Solutions',
      description: 'Migración y desarrollo de aplicaciones en la nube con AWS, Azure y Google Cloud.',
      linkColor: 'inspiraPurple'
    },
    {
      icon: 'fas fa-tools',
      color: 'inspiraPurple',
      title: 'Sistemas a Medida',
      description: 'Desarrollo de sistemas empresariales personalizados para procesos específicos.',
      linkColor: 'inspiraYellow'
    },
    {
      icon: 'fas fa-comments',
      color: 'inspiraYellow',
      title: 'Consultoría IT',
      description: 'Asesoramiento estratégico en tecnología para optimizar tus operaciones.',
      linkColor: 'inspiraPurple'
    }
  ];

  return (
    <section id="servicios" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Nuestros <span className="text-inspiraPurple">Servicios</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ofrecemos soluciones tecnológicas personalizadas para cada necesidad de tu negocio.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl shadow-lg hover:-translate-y-2 transition duration-300"
            >
              <div className={`w-16 h-16 bg-${service.color} bg-opacity-10 rounded-full flex items-center justify-center mb-6`}>
                <i className={`${service.icon} text-3xl text-${service.color}`}></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <a href="#" className={`text-${service.linkColor} font-semibold flex items-center`}>
                Saber más <i className="fas fa-arrow-right ml-2"></i>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
