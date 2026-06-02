import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import HeroBooking from './components/HeroBooking';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Pricing from './components/Pricing';
import Reviews from './components/Reviews';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import LiveChat from './components/LiveChat';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Offset for sticky header height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
      setActiveSection(id);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'residential', 'commercial', 'pricing', 'contact', 'faq'];
      const scrollPosition = window.scrollY + 120; // safe top margin threshold

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col justify-between bg-white text-gray-800 selection:bg-brand-green-light selection:text-brand-green-dark">
      {/* 1. Header (Navbar Sticky Navigation) */}
      <Header activeSection={activeSection} scrollTo={scrollTo} />

      {/* Main Container Views */}
      <main className="flex-grow">
        {/* 2. Hero Section + Integrated Booking form (id="home") */}
        <HeroBooking />

        {/* 3. About Us Block (id="about") */}
        <AboutUs />

        {/* 4. Services (id="residential" & id="commercial") */}
        <Services />

        {/* 5. Pricing Cards Grid (id="pricing") */}
        <Pricing />

        {/* 6. Live Reviews, Stars Rating submission (id="reviews" inside views) */}
        <Reviews />

        {/* 7. FAQs Accordion Box (id="faq") */}
        <FAQ />
      </main>

      {/* 8. Technical Support Info & SSM dark Footer (id="contact" & copyright footer inside) */}
      <Footer scrollTo={scrollTo} />

      {/* Floating Live Chat & Direct Messaging Hub */}
      <LiveChat />
    </div>
  );
}
