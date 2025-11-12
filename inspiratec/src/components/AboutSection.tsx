const AboutSection = () => {
  return (
    <section id="nosotros" className="py-20 px-6 bg-gray-50">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
            <img 
              src="https://cdn-icons-png.flaticon.com/512/1534/1534939.png" 
              alt="Equipo de InspiraTec" 
              className="w-full max-w-md mx-auto animate-floating"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Sobre <span className="text-inspiraPurple">Nosotros</span>
            </h2>
            <p className="text-gray-600 mb-6">
              En InspiraTec, nos apasiona crear soluciones tecnológicas innovadoras que transforman la forma en que las empresas operan. Con más de 10 años de experiencia en el desarrollo de software a la medida, hemos ayudado a cientos de empresas a alcanzar sus objetivos digitales.
            </p>
            <div className="mb-8">
              <div className="flex items-start mb-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-inspiraYellow bg-opacity-20 flex items-center justify-center">
                    <i className="fas fa-check text-inspiraYellow"></i>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-800">Experiencia comprobada</h3>
                  <p className="text-gray-600">Más de 200 proyectos exitosos entregados</p>
                </div>
              </div>
              <div className="flex items-start mb-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-inspiraPurple bg-opacity-20 flex items-center justify-center">
                    <i className="fas fa-check text-inspiraPurple"></i>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-800">Enfoque personalizado</h3>
                  <p className="text-gray-600">Soluciones adaptadas a tus necesidades específicas</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-inspiraYellow bg-opacity-20 flex items-center justify-center">
                    <i className="fas fa-check text-inspiraYellow"></i>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-800">Soporte continuo</h3>
                  <p className="text-gray-600">Acompañamiento durante y después del desarrollo</p>
                </div>
              </div>
            </div>
            <a 
              href="#contacto" 
              className="px-6 py-3 bg-inspiraPurple text-white rounded-full font-bold inline-block hover:bg-purple-800 transition"
            >
              Conoce más
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
