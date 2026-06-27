import { FadeIn } from './FadeIn';
import { ContactButton } from './ContactButton';

export const HeroSection: React.FC = () => {
  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="h-screen w-full relative flex flex-col justify-between overflow-hidden bg-[#0C0C0C]">
      {/* Navbar */}
      <FadeIn y={-20} delay={0} className="w-full z-20">
        <nav className="flex justify-between items-center px-6 md:px-10 pt-6 md:pt-8 w-full">
          <div 
            onClick={() => handleScrollTo('about')}
            className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] cursor-pointer hover:opacity-70 transition-opacity duration-200"
          >
            About
          </div>
          <div 
            onClick={() => handleScrollTo('services')}
            className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] cursor-pointer hover:opacity-70 transition-opacity duration-200"
          >
            Skills
          </div>
          <div 
            onClick={() => handleScrollTo('projects')}
            className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] cursor-pointer hover:opacity-70 transition-opacity duration-200"
          >
            Projects
          </div>
          <div 
            onClick={() => handleScrollTo('contact')}
            className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] cursor-pointer hover:opacity-70 transition-opacity duration-200"
          >
            Contact
          </div>
        </nav>
      </FadeIn>

      {/* Hero Heading */}
      <div className="flex-grow flex flex-col justify-center items-center px-6 md:px-10 z-0">
        <div className="overflow-hidden w-full text-center">
          <FadeIn y={40} delay={0.15}>
            <h1 className="hero-heading font-black uppercase tracking-tight leading-none w-full text-[12vw] sm:text-[13vw] md:text-[14vw] lg:text-[15vw] mt-6 sm:mt-4 md:-mt-5">
              Hi, i&apos;m santhosh
            </h1>
          </FadeIn>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="flex justify-between items-end px-6 md:px-10 pb-7 sm:pb-8 md:pb-10 w-full z-20">
        <FadeIn y={20} delay={0.35}>
          <p 
            className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[160px] sm:max-w-[220px] md:max-w-[260px]"
            style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}
          >
            a founder & developer driven by crafting striking and intelligent solutions
          </p>
        </FadeIn>

        <FadeIn y={20} delay={0.5}>
          <ContactButton 
            onClick={() => handleScrollTo('contact')}
            className="px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-xs sm:text-sm md:text-base"
          />
        </FadeIn>
      </div>
    </section>
  );
};
