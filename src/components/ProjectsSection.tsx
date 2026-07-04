import React, { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import { FadeIn } from './FadeIn';
import { LiveProjectButton } from './LiveProjectButton';

interface ProjectData {
  num: string;
  name: string;
  category: string;
  liveUrl: string;
  col1Img1: string;
  col1Img2: string;
  col2Img: string;
}

const projectsList: ProjectData[] = [
  {
    num: '01',
    name: 'Intasia',
    category: 'Founder / SaaS Platform',
    liveUrl: 'https://intasia-com.vercel.app/',
    col1Img1: '/media__1782529703115.png',
    col1Img2: '/media__1782529731213.png',
    col2Img: '/media__1782529668468.png',
  },
  {
    num: '02',
    name: 'Cakewalk by Indhu',
    category: 'Full Stack E-commerce',
    liveUrl: 'https://cakewalkbyindhu.vercel.app/',
    col1Img1: '/media__1782489678984.png',
    col1Img2: '/media__1782489703273.png',
    col2Img: '/media__1782489661033.png',
  },
  {
    num: '03',
    name: 'Solaris Digital AI',
    category: 'Agentic Workflows & Automation',
    liveUrl: 'https://santhoshai.app.n8n.cloud/workflow/suaQZeQUbnjVV0xC',
    col1Img1: '/media__1782493110981.png',
    col1Img2: '/media__1782489812407.jpg',
    col2Img: '/media__1782492992278.png',
  },
  {
    num: '04',
    name: 'Intasia CRM',
    category: 'Enterprise SaaS & RAG CRM',
    liveUrl: 'https://intasia-crm-eece.vercel.app/',
    col1Img1: '/media__1783139295407.png',
    col1Img2: '/media__1783139315745.png',
    col2Img: '/media__1783139457105.png',
  },
  {
    num: '05',
    name: 'Bright Builders',
    category: 'Architecture & Construction Platform',
    liveUrl: 'https://bright-builders-phi.vercel.app/',
    col1Img1: '/media__1783139181037.png',
    col1Img2: '/media__1783139198755.png',
    col2Img: '/media__1783139154090.png',
  },
];

export const ProjectsSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  return (
    <section
      id="projects"
      ref={containerRef}
      className="bg-[#0C0C0C] text-[#D7E2EA] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 pt-20 pb-32 relative z-10"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-10">
        {/* Heading */}
        <FadeIn y={40} delay={0} className="mb-16 sm:mb-20 md:mb-28">
          <h2 className="hero-heading font-black uppercase text-center text-[clamp(3rem,12vw,160px)] leading-none">
            Projects
          </h2>
        </FadeIn>

        {/* Project Cards (Sticky Stack) */}
        <div className="flex flex-col gap-24 relative">
          {projectsList.map((project, idx) => {
            const totalCards = projectsList.length;
            const targetScale = 1 - (totalCards - 1 - idx) * 0.03;
            
            // Stacking scale transform
            // Map the scroll range for this specific card
            const startScroll = idx / totalCards;
            const endScroll = (idx + 1) / totalCards;
            
            // eslint-disable-next-line react-hooks-rules-of-hooks
            const scale = useTransform(
              scrollYProgress, 
              [startScroll, endScroll], 
              [1, targetScale]
            );

            return (
              <div
                key={project.num}
                className="sticky h-[85vh] w-full flex items-start justify-center"
                style={{
                  top: `${100 + idx * 28}px`,
                }}
              >
                <motion.div
                  style={{ scale }}
                  className="w-full bg-[#0C0C0C] border-2 border-[#D7E2EA] rounded-[40px] sm:rounded-[50px] md:rounded-[60px] p-4 sm:p-6 md:p-8 flex flex-col gap-6 md:gap-10 shadow-[0_30px_60px_rgba(0,0,0,0.8)]"
                >
                  {/* Top Row: Details & Button */}
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-[#D7E2EA]/20 pb-6">
                    <div className="flex items-center gap-4 sm:gap-6">
                      <span className="font-black text-[clamp(2.5rem,6vw,80px)] leading-none text-[#D7E2EA]">
                        {project.num}
                      </span>
                      <div className="flex flex-col">
                        <span className="text-xs uppercase tracking-widest text-[#D7E2EA]/60 font-light">
                          {project.category}
                        </span>
                        <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold uppercase text-[#D7E2EA]">
                          {project.name}
                        </h3>
                      </div>
                    </div>
                    
                    <LiveProjectButton 
                      href={project.liveUrl !== '#' ? project.liveUrl : undefined}
                      onClick={project.liveUrl === '#' ? () => alert('Project live link coming soon!') : undefined}
                      className="px-6 py-2 sm:px-8 sm:py-3 text-xs sm:text-sm"
                    />
                  </div>

                  {/* Bottom Row: Images Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-10 gap-4 md:gap-6 flex-1 items-stretch">
                    {/* Left Column (40% width on md+) */}
                    <div className="col-span-1 md:col-span-4 flex flex-col gap-4 md:gap-6 justify-between">
                      <div className="rounded-[30px] sm:rounded-[40px] overflow-hidden border border-[#D7E2EA]/10 flex-1">
                        <img
                          src={project.col1Img1}
                          alt={`${project.name} preview 1`}
                          className="w-full h-full object-cover min-h-[130px] max-h-[230px]"
                          loading="lazy"
                        />
                      </div>
                      <div className="rounded-[30px] sm:rounded-[40px] overflow-hidden border border-[#D7E2EA]/10 flex-1">
                        <img
                          src={project.col1Img2}
                          alt={`${project.name} preview 2`}
                          className="w-full h-full object-cover min-h-[160px] max-h-[340px]"
                          loading="lazy"
                        />
                      </div>
                    </div>

                    {/* Right Column (60% width on md+) */}
                    <div className="col-span-1 md:col-span-6 rounded-[30px] sm:rounded-[40px] overflow-hidden border border-[#D7E2EA]/10 h-full">
                      <img
                        src={project.col2Img}
                        alt={`${project.name} main showcase`}
                        className="w-full h-full object-cover min-h-[250px] md:min-h-full"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
