import { useMemo } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import VenturesSection from './components/VenturesSection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import { services, ventures, stats, aboutPoints, contactLinks } from './data/siteContent';

function App() {
  const navItems = useMemo(
    () => [
      { href: '#services', label: 'Services' },
      { href: '#ventures', label: 'Ventures' },
      { href: '#about', label: 'About' },
      { href: '#contact', label: 'Contact Us', isCta: true },
    ],
    [],
  );

  return (
    <>
      <Navbar items={navItems} />
      <main>
        <HeroSection stats={stats} />
        <ServicesSection services={services} />
        <VenturesSection ventures={ventures} />
        <AboutSection points={aboutPoints} />
        <ContactSection links={contactLinks} />
      </main>
      <Footer />
    </>
  );
}

export default App;
