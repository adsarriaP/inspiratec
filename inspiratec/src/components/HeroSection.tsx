import React from 'react';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

const HeroSection = () => {
    return (
      <section id="inicio" className="pt-32 pb-20 px-6 bg-gradient-to-r from-inspiraPurple to-inspiraYellow md:pt-40">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Transforma tus ideas en <span className="text-black">realidad digital</span>
              </h1>
              <p className="text-xl text-white mb-8">
                Desarrollo de software a la medida que impulsa tu negocio al siguiente nivel.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="#contacto" 
                  className="px-6 py-3 bg-white text-inspiraPurple rounded-full font-bold text-center hover:bg-gray-100 transition"
                >
                  Empezar proyecto
                </a>
                <a 
                  href="#servicios" 
                  className="px-6 py-3 border-2 border-white text-white rounded-full font-bold text-center hover:bg-white hover:text-inspiraPurple transition"
                >
                  Nuestros servicios
                </a>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <img 
                src="https://cdn-icons-png.flaticon.com/512/1055/1055687.png" 
                alt="Desarrollo de software" 
                className="w-full max-w-md animate-floating"
              />
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default HeroSection;