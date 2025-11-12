import { useState } from 'react';
import type { FormEvent } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica de autenticación
    console.log('Login attempt:', { email, password, rememberMe });
    alert('Funcionalidad de login en desarrollo');
  };

  return (
    <div className="min-h-screen flex">
      {/* Back to Home Button */}
      <Link
        to="/"
        className="absolute top-6 left-6 flex items-center gap-2 text-gray-700 hover:text-inspiraPurple transition z-10"
      >
        <i className="fas fa-arrow-left"></i>
        <span className="font-medium">Volver al inicio</span>
      </Link>

      {/* Left Side - Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-6 py-12 bg-white">
        <div className="w-full max-w-md">
          {/* Logo */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-inspiraPurple mb-2">
              Inspira<span className="text-inspiraYellow">Tec</span>
            </h1>
            <p className="text-gray-600">Bienvenido de nuevo</p>
          </div>

          {/* Login Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Iniciar Sesión</h2>
            
            <form onSubmit={handleSubmit}>
              {/* Email Input */}
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                  Correo Electrónico
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <i className="fas fa-envelope text-gray-400"></i>
                  </div>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-inspiraPurple focus:border-transparent transition"
                    placeholder="tu@email.com"
                    required
                  />
                </div>
              </div>

              {/* Password Input */}
              <div className="mb-4">
                <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
                  Contraseña
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <i className="fas fa-lock text-gray-400"></i>
                  </div>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-inspiraPurple focus:border-transparent transition"
                    placeholder="••••••••"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
                  >
                    <i className={`fas ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                  </button>
                </div>
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between mb-6">
                <label className="flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="w-4 h-4 text-inspiraPurple border-gray-300 rounded focus:ring-inspiraPurple"
                  />
                  <span className="ml-2 text-sm text-gray-600">Recordarme</span>
                </label>
                <a href="#" className="text-sm text-inspiraPurple hover:text-purple-800 transition">
                  ¿Olvidaste tu contraseña?
                </a>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-inspiraPurple to-inspiraYellow text-white font-bold rounded-lg hover:opacity-90 transition shadow-lg"
              >
                Iniciar Sesión
              </button>
            </form>

            {/* Divider */}
            <div className="flex items-center my-6">
              <div className="flex-1 border-t border-gray-300"></div>
              <span className="px-4 text-sm text-gray-500">o continúa con</span>
              <div className="flex-1 border-t border-gray-300"></div>
            </div>

            {/* Social Login */}
            <div className="grid grid-cols-2 gap-4">
              <button className="flex items-center justify-center py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition">
                <i className="fab fa-google text-red-500 mr-2"></i>
                <span className="text-sm font-medium text-gray-700">Google</span>
              </button>
              <button className="flex items-center justify-center py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition">
                <i className="fab fa-microsoft text-blue-500 mr-2"></i>
                <span className="text-sm font-medium text-gray-700">Microsoft</span>
              </button>
            </div>

            {/* Sign Up Link */}
            <p className="text-center text-sm text-gray-600 mt-6">
              ¿No tienes una cuenta?{' '}
              <a href="#" className="text-inspiraPurple font-semibold hover:text-purple-800 transition">
                Regístrate aquí
              </a>
            </p>
          </div>

          {/* Footer Link */}
          <p className="text-center text-xs text-gray-500 mt-6">
            Al iniciar sesión, aceptas nuestros{' '}
            <a href="#" className="text-inspiraPurple hover:underline">Términos de Servicio</a>
            {' '}y{' '}
            <a href="#" className="text-inspiraPurple hover:underline">Política de Privacidad</a>
          </p>
        </div>
      </div>

      {/* Right Side - Image/Branding */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-inspiraPurple to-inspiraYellow items-center justify-center p-12">
        <div className="text-center text-white">
          <div className="mb-8">
            <i className="fas fa-laptop-code text-9xl opacity-90 animate-floating"></i>
          </div>
          <h2 className="text-4xl font-bold mb-4">
            Transforma tus ideas en realidad digital
          </h2>
          <p className="text-xl opacity-90 max-w-md mx-auto">
            Accede a tu cuenta y gestiona tus proyectos de desarrollo de software
          </p>
          <div className="mt-12 grid grid-cols-3 gap-8 max-w-lg mx-auto">
            <div>
              <div className="text-3xl font-bold">200+</div>
              <div className="text-sm opacity-90">Proyectos</div>
            </div>
            <div>
              <div className="text-3xl font-bold">150+</div>
              <div className="text-sm opacity-90">Clientes</div>
            </div>
            <div>
              <div className="text-3xl font-bold">10+</div>
              <div className="text-sm opacity-90">Años</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
