import { useState, FormEvent } from 'react';

const ContactSection = () => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert('Gracias por tu mensaje. Nos pondremos en contacto contigo pronto.');
    e.currentTarget.reset();
  };

  return (
    <section id="contacto" className="py-20 px-6 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            ¿Listo para <span className="text-inspiraPurple">empezar</span> tu proyecto?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Contáctanos y cuéntanos sobre tu idea. Estaremos encantados de ayudarte a hacerla realidad.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-10">
          <div className="md:w-1/2">
            <div className="bg-white p-8 rounded-xl shadow-lg h-full">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Información de contacto</h3>
              
              <div className="flex items-start mb-6">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-inspiraPurple bg-opacity-10 flex items-center justify-center">
                    <i className="fas fa-map-marker-alt text-inspiraPurple"></i>
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-800">Dirección</h4>
                  <p className="text-gray-600">Av. Tecnológica 1234, Ciudad Digital</p>
                </div>
              </div>
              
              <div className="flex items-start mb-6">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-inspiraYellow bg-opacity-10 flex items-center justify-center">
                    <i className="fas fa-phone-alt text-inspiraYellow"></i>
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-800">Teléfono</h4>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-start mb-6">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-inspiraPurple bg-opacity-10 flex items-center justify-center">
                    <i className="fas fa-envelope text-inspiraPurple"></i>
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-800">Email</h4>
                  <p className="text-gray-600">contacto@inspiratec.com</p>
                </div>
              </div>
              
              <div className="flex items-start mb-8">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-inspiraYellow bg-opacity-10 flex items-center justify-center">
                    <i className="fas fa-clock text-inspiraYellow"></i>
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-800">Horario</h4>
                  <p className="text-gray-600">Lunes a Viernes: 9:00 - 18:00</p>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-800 mb-4">Síguenos</h4>
                <div className="flex space-x-4">
                  <a href="#" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-inspiraPurple hover:text-white transition">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-inspiraPurple hover:text-white transition">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-inspiraPurple hover:text-white transition">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a href="#" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-inspiraPurple hover:text-white transition">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Envíanos un mensaje</h3>
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Nombre</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-inspiraPurple focus:border-transparent" 
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-inspiraPurple focus:border-transparent" 
                      required
                    />
                  </div>
                </div>
                <div className="mb-6">
                  <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">Asunto</label>
                  <input 
                    type="text" 
                    id="subject" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-inspiraPurple focus:border-transparent" 
                    required
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Mensaje</label>
                  <textarea 
                    id="message" 
                    rows={5} 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-inspiraPurple focus:border-transparent" 
                    required
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="w-full px-6 py-3 bg-gradient-to-r from-inspiraPurple to-inspiraYellow text-white rounded-full font-bold hover:opacity-90 transition"
                >
                  Enviar Mensaje
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
