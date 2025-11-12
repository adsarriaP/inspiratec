const CTASection = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-r from-inspiraPurple to-inspiraYellow">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Transforma tu idea en un producto digital
        </h2>
        <p className="text-xl text-white mb-8 max-w-3xl mx-auto">
          Déjanos ayudarte a crear la solución tecnológica perfecta para tu negocio.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
          <a 
            href="#contacto" 
            className="px-6 py-3 bg-white text-inspiraPurple rounded-full font-bold hover:bg-gray-100 transition"
          >
            Iniciar Proyecto
          </a>
          <a 
            href="#" 
            className="px-6 py-3 border-2 border-white text-white rounded-full font-bold hover:bg-white hover:text-inspiraPurple transition"
          >
            Llamada Exploratoria
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
