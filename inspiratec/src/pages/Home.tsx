import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import ClientsSection from '../components/ClientsSection';
import ServicesSection from '../components/ServicesSection';
import AboutSection from '../components/AboutSection';
import ProjectsSection from '../components/ProjectsSection';
import TestimonialsSection from '../components/TestimonialsSection';
import ContactSection from '../components/ContactSection';
import FAQSection from '../components/FAQSection';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ClientsSection />
      <ServicesSection />
      <AboutSection />
      <ProjectsSection />
      <TestimonialsSection />
      <ContactSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Home;