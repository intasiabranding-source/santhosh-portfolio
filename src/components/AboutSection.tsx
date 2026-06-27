import React from 'react';
import { FadeIn } from './FadeIn';
import { AnimatedText } from './AnimatedText';
import { ContactButton } from './ContactButton';

export const AboutSection: React.FC = () => {
  const handleScrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="about" 
      className="min-h-screen w-full relative flex flex-col justify-center items-center bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-20 overflow-hidden"
    >
      {/* Decorative 3D images */}
      
      {/* Top-Left: Moon Icon */}
      <div className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] pointer-events-none z-0">
        <FadeIn x={-80} y={0} delay={0.1} duration={0.9}>
          <img 
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png" 
            alt="Moon Icon" 
            className="w-[120px] sm:w-[160px] md:w-[210px] h-auto object-contain"
          />
        </FadeIn>
      </div>

      {/* Bottom-Left: 3D Object */}
      <div className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] pointer-events-none z-0">
        <FadeIn x={-80} y={0} delay={0.25} duration={0.9}>
          <img 
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png" 
            alt="3D Abstract Object" 
            className="w-[100px] sm:w-[140px] md:w-[180px] h-auto object-contain"
          />
        </FadeIn>
      </div>

      {/* Top-Right: Lego Icon */}
      <div className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] pointer-events-none z-0">
        <FadeIn x={80} y={0} delay={0.15} duration={0.9}>
          <img 
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png" 
            alt="Lego Icon" 
            className="w-[120px] sm:w-[160px] md:w-[210px] h-auto object-contain"
          />
        </FadeIn>
      </div>

      {/* Bottom-Right: 3D Group */}
      <div className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] pointer-events-none z-0">
        <FadeIn x={80} y={0} delay={0.3} duration={0.9}>
          <img 
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png" 
            alt="3D Group Object" 
            className="w-[130px] sm:w-[170px] md:w-[220px] h-auto object-contain"
          />
        </FadeIn>
      </div>

      {/* Heading */}
      <FadeIn y={40} delay={0} className="z-10 mb-10 sm:mb-14 md:mb-16">
        <h2 className="hero-heading font-black uppercase leading-none tracking-tight text-center text-[clamp(3rem,12vw,160px)]">
          About me
        </h2>
      </FadeIn>

      {/* Animated Paragraph */}
      <div className="z-10 text-center max-w-[800px] mb-16 sm:mb-20 md:mb-24 px-4">
        <AnimatedText
          text="I'm a full-stack developer and AI entrepreneur passionate about engineering intelligent, scalable, and high-performance digital products. As the Founder of Intasia, I architect AI-powered SaaS platforms by leveraging Agentic AI, Large Language Models (LLMs), Retrieval-Augmented Generation (RAG), AI automation, RESTful APIs, cloud-native architectures, and workflow orchestration with n8n. My expertise spans full-stack development, CRM systems, backend architecture, database optimization, and API integrations. I focus on building secure, scalable, and automation-first solutions that transform complex business challenges into impactful digital experiences."
          className="text-[#D7E2EA] font-medium leading-relaxed text-center text-[clamp(1rem,2vw,1.35rem)]"
        />
      </div>

      {/* Contact Button */}
      <FadeIn y={20} delay={0.1} className="z-10">
        <ContactButton 
          onClick={handleScrollToContact}
          className="px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-xs sm:text-sm md:text-base"
        />
      </FadeIn>
    </section>
  );
};
