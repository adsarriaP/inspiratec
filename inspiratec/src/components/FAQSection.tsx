import { useState } from 'react';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: '¿Qué diferencia hay entre desarrollo a la medida y software empaquetado?',
      answer: 'El desarrollo a la medida se adapta exactamente a tus procesos y necesidades específicas, mientras que el software empaquetado sigue un modelo estándar que puede requerir que cambies tus procesos para adaptarte al software. Con nosotros obtienes una solución 100% personalizada sin funcionalidades innecesarias.'
    },
    {
      question: '¿Cuánto tiempo toma desarrollar un sistema a la medida?',
      answer: 'El tiempo varía según la complejidad del proyecto. Un proyecto pequeño puede tomar de 2 a 3 meses, mientras que sistemas más complejos pueden requerir de 6 meses a 1 año. Tras un análisis inicial, te proporcionamos un cronograma realista con hitos claros.'
    },
    {
      question: '¿Qué tecnologías utilizan para el desarrollo?',
      answer: 'Utilizamos las tecnologías más adecuadas para cada proyecto. Para desarrollo web trabajamos con React, Angular o Vue.js en frontend, y Node.js, PHP (Laravel) o .NET Core en backend. Para móviles usamos Flutter para apps híbridas o Kotlin/Swift para nativas. También trabajamos con Python para IA y análisis de datos.'
    },
    {
      question: '¿Ofrecen mantenimiento después del desarrollo?',
      answer: 'Sí, ofrecemos planes de mantenimiento que incluyen actualizaciones, corrección de errores, optimización de rendimiento y soporte técnico. Adaptamos el plan según tus necesidades, desde soporte básico hasta mantenimiento completo con actualizaciones constantes.'
    },
    {
      question: '¿Cómo manejan la seguridad de los sistemas?',
      answer: 'La seguridad es prioridad. Implementamos prácticas como desarrollo seguro (Secure SDLC), pruebas de penetración, cifrado de datos, autenticación multifactor y cumplimiento con estándares como OWASP. Realizamos auditorías periódicas y mantenemos las tecnologías actualizadas contra vulnerabilidades.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Preguntas <span className="text-inspiraYellow">Frecuentes</span>
          </h2>
          <p className="text-xl text-gray-600">
            Resolvemos tus dudas sobre nuestros servicios de desarrollo a la medida.
          </p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md">
              <button
                onClick={() => toggleFAQ(index)}
                className="flex justify-between items-center w-full text-left"
              >
                <h3 className="text-lg font-semibold text-gray-800 pr-4">{faq.question}</h3>
                <i className={`fas ${openIndex === index ? 'fa-minus' : 'fa-plus'} text-inspiraPurple flex-shrink-0`}></i>
              </button>
              {openIndex === index && (
                <div className="mt-4 text-gray-600">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
