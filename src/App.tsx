import Header from './components/Header';
import Hero from './components/Hero';
import ValueProposition from './components/ValueProposition';
import ServicesSection from './components/ServicesSection';
import TestimonialsSection from './components/TestimonialsSection';
import FAQSection from './components/FAQSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-between selection:bg-amber-500 selection:text-white overflow-x-hidden">
      
      {/* Sticky Header with Glassmorphism */}
      <Header />

      {/* Main Sections */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero />

        {/* Value Proposition / Who We Are Section */}
        <ValueProposition />

        {/* Services Showcase Section */}
        <ServicesSection />

        {/* Testimonials Showcase Section */}
        <TestimonialsSection />

        {/* FAQs Accordion Section */}
        <FAQSection />

        {/* Contact & Consultation Form Section */}
        <ContactSection />
      </main>

      {/* Global Luxury Footer */}
      <Footer />
    </div>
  );
}
