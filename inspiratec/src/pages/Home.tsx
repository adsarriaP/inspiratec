import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <main className="pt-20">
        <section id="inicio">
          {/* … tu hero … */}
        </section>
        <section id="servicios">
          {/* … tus servicios … */}
        </section>
      </main>
    </div>
  );
};

export default Home;
