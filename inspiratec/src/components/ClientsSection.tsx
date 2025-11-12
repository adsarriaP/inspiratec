const ClientsSection = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-center text-2xl text-gray-500 mb-10">Confían en nosotros</h2>
        <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16">
          <div className="w-32 h-16 flex items-center justify-center">
            <i className="fab fa-microsoft text-5xl text-gray-400"></i>
          </div>
          <div className="w-32 h-16 flex items-center justify-center">
            <i className="fab fa-google text-5xl text-gray-400"></i>
          </div>
          <div className="w-32 h-16 flex items-center justify-center">
            <i className="fab fa-amazon text-5xl text-gray-400"></i>
          </div>
          <div className="w-32 h-16 flex items-center justify-center">
            <i className="fab fa-apple text-5xl text-gray-400"></i>
          </div>
          <div className="w-32 h-16 flex items-center justify-center">
            <i className="fab fa-slack text-5xl text-gray-400"></i>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
