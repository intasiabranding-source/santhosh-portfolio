import React from 'react';
import { FadeIn } from './FadeIn';
import { Mail, ArrowUpRight, Globe } from 'lucide-react';

export const ContactSection: React.FC = () => {
  return (
    <section
      id="contact"
      className="bg-[#0C0C0C] text-[#D7E2EA] pt-20 pb-16 px-5 sm:px-8 md:px-10 border-t border-[#D7E2EA]/10 relative z-10"
    >
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        {/* Title */}
        <FadeIn y={30} delay={0} className="mb-10 text-center">
          <h2 className="hero-heading font-black uppercase text-[clamp(2.5rem,8vw,100px)] leading-none mb-4">
            Contact
          </h2>
          <p className="text-zinc-400 uppercase tracking-widest text-sm max-w-md mx-auto">
            Founder of Intasia | Agentic AI & SaaS Specialist
          </p>
        </FadeIn>

        {/* Action / Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full mb-16">
          {/* Left card: Mail */}
          <FadeIn y={30} delay={0.15} className="w-full">
            <a
              href="mailto:santhoshkumarcc01@gmail.com"
              className="group p-8 rounded-[30px] border border-[#D7E2EA]/20 bg-zinc-950 flex flex-col justify-between h-48 hover:border-[#B600A8] transition-all duration-300"
            >
              <div className="flex justify-between items-start">
                <div className="p-3 bg-zinc-900 rounded-2xl group-hover:bg-[#B600A8]/20 transition-colors duration-300">
                  <Mail className="w-6 h-6 text-[#D7E2EA]" />
                </div>
                <ArrowUpRight className="w-5 h-5 opacity-40 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
              </div>
              <div>
                <span className="text-xs uppercase tracking-wider text-zinc-500 font-medium">Get in touch</span>
                <h3 className="text-lg sm:text-xl font-bold font-mono text-[#D7E2EA]">santhoshkumarcc01@gmail.com</h3>
              </div>
            </a>
          </FadeIn>

          {/* Right card: Intasia website */}
          <FadeIn y={30} delay={0.25} className="w-full">
            <a
              href="https://intasia-com.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-8 rounded-[30px] border border-[#D7E2EA]/20 bg-zinc-950 flex flex-col justify-between h-48 hover:border-[#7621B0] transition-all duration-300"
            >
              <div className="flex justify-between items-start">
                <div className="p-3 bg-zinc-900 rounded-2xl group-hover:bg-[#7621B0]/20 transition-colors duration-300">
                  <Globe className="w-6 h-6 text-[#D7E2EA]" />
                </div>
                <ArrowUpRight className="w-5 h-5 opacity-40 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
              </div>
              <div>
                <span className="text-xs uppercase tracking-wider text-zinc-500 font-medium">Company Website</span>
                <h3 className="text-lg sm:text-xl font-bold text-[#D7E2EA]">intasia-com.vercel.app</h3>
              </div>
            </a>
          </FadeIn>
        </div>

        {/* Footer info */}
        <FadeIn y={10} delay={0.4} className="border-t border-[#D7E2EA]/10 pt-8 w-full flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-zinc-500 uppercase tracking-widest">
          <div>
            &copy; {new Date().getFullYear()} Santhosh Kumar. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#D7E2EA] transition-colors flex items-center gap-1"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg> Github
            </a>
            <a
              href="https://www.instagram.com/santhoshkumar01_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#D7E2EA] transition-colors flex items-center gap-1"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg> Instagram
            </a>
            <span>Founder at Intasia</span>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
