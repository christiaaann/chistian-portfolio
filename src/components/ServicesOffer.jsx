import React from 'react';
import { Code, Smartphone, Layout } from 'lucide-react';

const ServicesOffer = () => {
  const services = [
    {
      title: 'WEB DEVELOPMENT',
      icon: <Code className="w-5 h-5 text-blue-600 stroke-[2.5]" />,
      description: 'High-performance React, Next.js & TanStack apps with smooth-as-silk interactions and pixel-perfect responsive layouts.',
      tags: ['React', 'Next.js', 'TanStack', 'TypeScript', 'Tailwind CSS'],
    },
    {
      title: 'APP DEVELOPMENT',
      icon: <Smartphone className="w-5 h-5 text-blue-600 stroke-[2.5]" />,
      description: 'Cross-platform mobile experiences in React Native and Expo — one codebase, native performance, ready for the App Store and Play Store.',
      tags: ['React Native', 'Expo', 'iOS', 'Android'],
    },
    {
      title: 'UI / UX DESIGN',
      icon: <Layout className="w-5 h-5 text-blue-600 stroke-[2.5]" />,
      description: 'Identity, interface, and motion design from the first wireframe to the final pixel. Design systems that scale with your brand.',
      tags: ['Figma', 'Motion Design', 'Design Systems', 'Prototyping'],
    },
  ];

  return (
    <section className="bg-white w-full overflow-hidden font-sans select-none">
           <div className="w-full bg-white border-y border-black/20 py-5 overflow-hidden relative flex select-none">
              
              {/* Isang solong DIV wrapper na gumagamit ng array repetition para sa seamless flow */}
              <div className="flex gap-12 animate-marquee whitespace-nowrap text-4xl font-semibold uppercase tracking-wider text-[#0f172a] w-max flex-shrink-0 pr-12">
                {[...Array(4)].map((_, i) => (
                  <React.Fragment key={i}>
                    <span className="flex items-center gap-3">Web Development <span className="text-blue-600 text-lg">•</span></span>
                    <span className="flex items-center gap-3">Database & Architecture<span className="text-blue-600 text-lg">•</span></span>
                    <span className="flex items-center gap-3">UI/UX<span className="text-blue-600 text-lg">•</span></span>
                    <span className="flex items-center gap-3">Video Editing <span className="text-blue-600 text-lg">•</span></span>
                    <span className="flex items-center gap-3">Virtual Assistance <span className="text-blue-600 text-lg">•</span></span>
                  </React.Fragment>
                ))}
              </div>
      
            </div>
      <div className="px-6">
        
        {/* Category Indicator */}
        <div className="text-[11px] font-black tracking-[0.25em] text-blue-600 uppercase mb-5">
          / SERVICES
        </div>

        {/* Massive Title */}
        <h2 className="text-[60px] sm:text-[80px] md:text-[100px] font-[1000] text-[#0b132a] leading-[0.9] tracking-tighter mb-8">
          WHAT I DO.
        </h2>

        {/* Sub-bar Navigation Indicator */}
        <div className="flex items-center gap-4 text-[13px] md:text-[14px] font-medium text-slate-400 mb-16">
          <span>8 focused practices, one partner. Scroll horizontally to explore.</span>
          <div className="hidden md:flex items-center gap-3">
            <span className="w-12 h-[1px] bg-slate-200"></span>
            <span className="text-[11px] font-black tracking-widest text-slate-400 uppercase">
              SCROLL →
            </span>
          </div>
        </div>

        {/* Horizontal Container */}
        <div className="flex items-center gap-6 overflow-x-auto pb-10 pt-2 scrollbar-hide snap-x snap-mandatory -mx-6 px-6 md:mx-0 md:px-0">
          {services.map((service, index) => (
            <div
              key={index}
              className="snap-start flex-shrink-0 w-[600px] sm:w-[460px] md:w-[430px] bg-[#f8fafc]/60 border border-[#f1f5f9] rounded-[24px] p-9 flex flex-col justify-between min-h-[290px] hover:bg-white hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.04)] hover:border-slate-200 transition-all duration-300 ease-in-out"
            >
              {/* Content Header Block */}
              <div>
                <div className="flex items-center justify-between gap-4 mb-5">
                  <h3 className="text-[22px] md:text-[24px] font-[900] tracking-tight text-[#0b132a]">
                    {service.title}
                  </h3>
                  <div className="flex-shrink-0 p-1 bg-blue-50/50 rounded-lg">
                    {service.icon}
                  </div>
                </div>

                {/* Main Body Description */}
                <p className="text-slate-500 text-[14px] md:text-[15px] leading-relaxed font-normal pr-2">
                  {service.description}
                </p>
              </div>

              {/* Minimal Badges Footer */}
              <div className="flex flex-wrap gap-2 mt-8">
                {service.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-[11px] font-medium text-slate-600 bg-white border border-slate-200/80 rounded-full px-3.5 py-1 shadow-[0_1px_2px_rgba(0,0,0,0.01)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServicesOffer;