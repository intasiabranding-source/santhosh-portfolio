import { useEffect } from 'react';
import Lenis from 'lenis';
import { Analytics } from '@vercel/analytics/react';
import { HeroSection } from './components/HeroSection';
import { MarqueeSection } from './components/MarqueeSection';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { ProjectsSection } from './components/ProjectsSection';
import { TestimonialsVariant } from './components/Testimonials';
import { Skiper39 } from './components/Skiper39';
import { Preloader } from './components/Preloader';
import { ContactSection } from './components/ContactSection';

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="bg-[#0C0C0C] min-h-screen text-[#D7E2EA] font-sans overflow-x-clip select-none">
      {/* Premium cinematic preloader */}
      <Preloader />

      {/* Hero Section */}
      <HeroSection />

      {/* Marquee Section */}
      <MarqueeSection />

      {/* About Section */}
      <AboutSection />

      {/* Services/Skills Section */}
      <ServicesSection />

      {/* Projects Section */}
      <ProjectsSection />

      {/* Testimonials Section */}
      <TestimonialsVariant />

      {/* Crowd Animation Section */}
      <Skiper39 />

      {/* Contact Section */}
      <ContactSection />

      {/* Vercel Analytics */}
      <Analytics />
    </div>
  );
}

export default App;
