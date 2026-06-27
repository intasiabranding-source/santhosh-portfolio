import React from 'react';
import { FadeIn } from './FadeIn';

interface SkillItem {
  num: string;
  name: string;
  desc: string;
}

const skillsList: SkillItem[] = [
  {
    num: '01',
    name: 'AGENTIC AI',
    desc: 'Autonomous AI Systems • Multi-Agent Architecture • RAG • Memory • Tool Calling • LLM Orchestration',
  },
  {
    num: '02',
    name: 'AI AUTOMATION',
    desc: 'AI Pipelines • LangChain • MCP • n8n • REST APIs • Webhooks • Workflow Orchestration',
  },
  {
    num: '03',
    name: 'SAAS DEVELOPMENT',
    desc: 'Cloud-Native SaaS • Multi-Tenancy • JWT/OAuth • RBAC • Subscription Billing • Scalable Architecture',
  },
  {
    num: '04',
    name: 'FULL-STACK DEVELOPMENT',
    desc: 'React • Next.js • TypeScript • Node.js • Express • PostgreSQL • Prisma • Tailwind CSS',
  },
  {
    num: '05',
    name: 'BACKEND ENGINEERING',
    desc: 'REST APIs • GraphQL • WebSockets • Redis • Authentication • Distributed Systems • API Design',
  },
  {
    num: '06',
    name: 'AI INTEGRATIONS',
    desc: 'OpenAI • Claude • Gemini • Grok • DeepSeek • RAG • Vector Databases • Embeddings • Prompt Engineering',
  },
  {
    num: '07',
    name: 'CLOUD & DEVOPS',
    desc: 'Docker • Kubernetes • AWS • CI/CD • GitHub Actions • Linux • Nginx • Cloudflare • Monitoring',
  },
  {
    num: '08',
    name: 'ENTERPRISE CRM',
    desc: 'CRM Development • Workflow Automation • Analytics • RBAC • Business Intelligence • Enterprise Software',
  },
];

export const ServicesSection: React.FC = () => {
  return (
    <section 
      id="services" 
      className="bg-white text-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 relative z-10"
    >
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <FadeIn y={40} delay={0}>
          <h2 className="text-[#0C0C0C] font-black uppercase text-center text-[clamp(3rem,12vw,160px)] leading-none mb-16 sm:mb-20 md:mb-28">
            Skills
          </h2>
        </FadeIn>

        {/* Skill Items List */}
        <div className="flex flex-col border-t border-[rgba(12,12,12,0.15)]">
          {skillsList.map((skill, index) => (
            <FadeIn 
              key={skill.num} 
              y={30} 
              delay={index * 0.1}
              className="border-b border-[rgba(12,12,12,0.15)] py-8 sm:py-10 md:py-12 flex items-center justify-between gap-6 sm:gap-10"
            >
              {/* Number (Left) */}
              <div className="font-black text-[clamp(3rem,10vw,140px)] leading-none text-[#0C0C0C] select-none min-w-[80px] sm:min-w-[150px]">
                {skill.num}
              </div>

              {/* Stacked Name + Description (Right) */}
              <div className="flex-1 flex flex-col gap-2">
                <h3 className="font-medium uppercase text-[#0C0C0C] text-[clamp(1rem,2.2vw,2.1rem)]">
                  {skill.name}
                </h3>
                <p className="font-light leading-relaxed text-[#0C0C0C]/60 max-w-2xl text-[clamp(0.85rem,1.6vw,1.25rem)]">
                  {skill.desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
