const TestimonialsSection = () => {
  const testimonials = [
    {
      initials: 'JM',
      name: 'Juan Martínez',
      position: 'CEO, TiendaOnline',
      gradient: 'from-inspiraPurple to-inspiraYellow',
      text: 'El sistema que nos desarrolló InspiraTec ha revolucionado nuestra operación. Ahora gestionamos el 80% de nuestros procesos digitalmente.',
      stars: 5
    },
    {
      initials: 'AP',
      name: 'Ana Pérez',
      position: 'Directora, LogiTech',
      gradient: 'from-inspiraYellow to-inspiraPurple',
      text: 'El equipo de InspiraTec entendió perfectamente nuestras necesidades y entregaron una app móvil que superó todas nuestras expectativas.',
      stars: 5
    },
    {
      initials: 'CR',
      name: 'Carlos Rodríguez',
      position: 'Gerente, FinanciaPlus',
      gradient: 'from-inspiraPurple to-gray-800',
      text: 'El dashboard de BI que desarrollaron nos ha permitido tomar decisiones estratégicas con datos en tiempo real. Increíble trabajo.',
      stars: 4.5
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-r from-inspiraPurple to-inspiraYellow">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Lo que dicen <span className="text-black">nuestros clientes</span>
          </h2>
          <p className="text-xl text-white text-opacity-90 max-w-3xl mx-auto">
            Testimonios reales de empresas que han transformado sus negocios con nuestras soluciones
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${testimonial.gradient} flex items-center justify-center text-white font-bold`}>
                  {testimonial.initials}
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.position}</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">{testimonial.text}</p>
              <div className="flex text-yellow-400">
                {Array.from({ length: Math.floor(testimonial.stars) }).map((_, i) => (
                  <i key={i} className="fas fa-star"></i>
                ))}
                {testimonial.stars % 1 !== 0 && <i className="fas fa-star-half-alt"></i>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
