const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Inspira<span className="text-inspiraYellow">Tec</span>
            </h3>
            <p className="text-gray-400">
              Transformando ideas en soluciones digitales innovadoras desde 2010.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Servicios</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition">Desarrollo Web</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Aplicaciones Móviles</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Business Intelligence</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Sistemas a Medida</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Consultoría IT</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Enlaces</h4>
            <ul className="space-y-2">
              <li><a href="#inicio" className="text-gray-400 hover:text-white transition">Inicio</a></li>
              <li><a href="#servicios" className="text-gray-400 hover:text-white transition">Servicios</a></li>
              <li><a href="#proyectos" className="text-gray-400 hover:text-white transition">Proyectos</a></li>
              <li><a href="#nosotros" className="text-gray-400 hover:text-white transition">Nosotros</a></li>
              <li><a href="#contacto" className="text-gray-400 hover:text-white transition">Contacto</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start">
                <i className="fas fa-map-marker-alt mt-1 mr-3 w-4"></i>
                <span>Av. Tecnológica 1234, Ciudad Digital</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-phone-alt mt-1 mr-3 w-4"></i>
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-envelope mt-1 mr-3 w-4"></i>
                <span>contacto@inspiratec.com</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2023 InspiraTec. Todos los derechos reservados.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white transition">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
