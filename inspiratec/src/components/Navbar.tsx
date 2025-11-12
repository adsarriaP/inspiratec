import { useState } from 'react';
import type { FC } from 'react';
import { Link } from 'react-router-dom';
import { Transition } from '@headlessui/react';

const Navbar: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-6 py-3 flex items-center justify-between">
        <a href="#" className="text-2xl font-bold text-inspiraPurple">
          Inspira<span className="text-inspiraYellow">Tec</span>
        </a>

        <nav className="hidden md:flex items-center space-x-8">
          <a href="#inicio" className="text-gray-700 hover:text-inspiraPurple transition">
            Inicio
          </a>
          <a href="#servicios" className="text-gray-700 hover:text-inspiraPurple transition">
            Servicios
          </a>
          <a href="#proyectos" className="text-gray-700 hover:text-inspiraPurple transition">
            Proyectos
          </a>
          <a href="#nosotros" className="text-gray-700 hover:text-inspiraPurple transition">
            Nosotros
          </a>
          <a
            href="#contacto"
            className="px-4 py-2 bg-inspiraYellow text-white rounded-full hover:bg-yellow-600 transition"
          >
            Contacto
          </a>
          <Link
            to="/login"
            className="px-4 py-2 border-2 border-inspiraPurple text-inspiraPurple rounded-full hover:bg-inspiraPurple hover:text-white transition flex items-center gap-2"
          >
            <i className="fas fa-sign-in-alt"></i>
            Iniciar Sesión
          </Link>
        </nav>

        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="md:hidden text-gray-700 focus:outline-none"
          aria-label="Toggle menú"
        >
          {isOpen ? (
            <i className="fas fa-times text-2xl"></i>
          ) : (
            <i className="fas fa-bars text-2xl"></i>
          )}
        </button>
      </div>

      <Transition
        show={isOpen}
        enter="transition ease-out duration-200"
        enterFrom="transform -translate-y-2 opacity-0"
        enterTo="transform translate-y-0 opacity-100"
        leave="transition ease-in duration-150"
        leaveFrom="transform translate-y-0 opacity-100"
        leaveTo="transform -translate-y-2 opacity-0"
      >
        <nav className="md:hidden bg-white px-6 pt-4 pb-6 shadow-md">
          <ul className="space-y-4">
            {['inicio', 'servicios', 'proyectos', 'nosotros'].map((seccion) => (
              <li key={seccion}>
                <a
                  href={`#${seccion}`}
                  className="block text-gray-700 hover:text-inspiraPurple transition"
                  onClick={() => setIsOpen(false)}
                >
                  {seccion.charAt(0).toUpperCase() + seccion.slice(1)}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contacto"
                className="block px-4 py-2 bg-inspiraYellow text-white rounded-full text-center hover:bg-yellow-600 transition"
                onClick={() => setIsOpen(false)}
              >
                Contacto
              </a>
            </li>
            <li>
              <Link
                to="/login"
                className="block px-4 py-2 border-2 border-inspiraPurple text-inspiraPurple rounded-full text-center hover:bg-inspiraPurple hover:text-white transition"
                onClick={() => setIsOpen(false)}
              >
                <i className="fas fa-sign-in-alt mr-2"></i>
                Iniciar Sesión
              </Link>
            </li>
          </ul>
        </nav>
      </Transition>
    </header>
  );
};

export default Navbar;