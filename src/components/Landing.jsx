import React from 'react';

const Landing = () => {
  const navItems = [
    { id: '01', title: 'EXPERIENCES' },
    { id: '02', title: 'PROJECTS' },
    { id: '03', title: 'ABOUT' },
    { id: '04', title: 'CONTACT' },
    { id: '05', title: 'SERVICES' },
  ];

  return (
    <div className="relative min-h-screen w-full text-white flex flex-col  font-sans">
      
      {/* Background Micro-Grid / Texture Effect */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.15) 1px, transparent 1px)`,
          backgroundSize: '4px 4px'
        }}
      />

      {/* Main Hero Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 pt-32 pb-16 w-full flex-grow flex flex-col justify-center pp:pt-20 pp:px-6 ss:px-4">
        
        {/* Main Heading */}
        <h1 className="font-heading text-nowrap text-7xl md:text-8xl tracking-wider uppercase font-extrabold text-white mb-6 leading-none tt:text-5xl xx:text-4xl">
          HI, I'M CHRISITAN PRETISTA HEJE
        </h1>

        {/* Subtitle Line */}
        <div className="w-full border-t border-neutral-800/80 mb-6"></div>

        {/* Description Paragraph */}
        <p className="text-neutral-400 text-lg md:text-xl max-w-2xl font-normal mb-10 leading-relaxed tt:text-base xx:text-sm">
          Building in public through podcast, blog, and ventures across business and tech.
        </p>

        {/* CTA Buttons */}
        <div className="flex items-center gap-8 tt:flex-col tt:items-start tt:gap-4">
          
          {/* Primary Button */}
          <button className="flex items-center gap-3 bg-white text-black font-mono font-bold text-xs tracking-wider px-6 py-3.5 uppercase hover:bg-neutral-200 transition-all cursor-pointer">
            <svg 
              className="w-3.5 h-3.5 fill-current" 
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
            START PROJECT
          </button>

          {/* Secondary Button Link */}
          {/* <button className="flex items-center gap-2 font-mono text-xs font-bold tracking-wider text-neutral-300 hover:text-white uppercase transition-colors cursor-pointer group">
            READ THE BLOG
            <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
          </button> */}

        </div>

        <div className=" sticky top-0 z-10 w-full mt-10  pp:px-6 ss:px-4">
        <div className="grid grid-cols-5 border border-neutral-800/80 bg-black/60 backdrop-blur-sm pp:grid-cols-2 tt:grid-cols-1">
          {navItems.map((item, index) => (
            <div
              key={item.id}
              className={`flex items-center justify-between p-4 py-5  cursor-pointer hover:bg-neutral-900/60 transition-colors group ${
                index !== navItems.length - 1 ? 'border-r pp:border-r-0 pp:border-b border-neutral-800/80' : ''
              }`}
            >
              <div className="flex flex-col">
                <span className="font-mono text-[10px] text-neutral-500 mb-1 group-hover:text-neutral-300">
                  {item.id}
                </span>
                <span className="font-heading text-base tracking-widest text-neutral-400 group-hover:text-white">
                  {item.title}
                </span>
              </div>
              <span className="text-neutral-600 text-xs group-hover:text-white group-hover:translate-x-0.5 transition-all">
                →
              </span>
            </div>
          ))}
        </div>
      </div>

      </div>

      {/* Footer Navigation Bar */}
   
    </div>
  );
};

export default Landing;