import React from 'react'
import client from '../assets/client.png'
import itsupport from '../assets/itsupport.png'
const Experience = () => {
  return (
    <div className="relative min-h-screen w-full bg-black text-white flex flex-col justify-center items-center py-16 px-8 pp:py-10 pp:px-5 ss:px-3 font-sans border border-neutral-900">
      
      {/* Micro-dot matrix background effect */}
    

      <div className="relative z-10 w-full max-w-7xl mx-auto">
        
        {/* Header bar with counter and link */}
        <div className="flex justify-between items-start mb-3 border-t border-neutral-800/80 pt-6 pp:pt-4">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2 text-xs font-mono text-neutral-400 xx:text-[11px]">
              <span>01 / 05</span>
              <span className="text-neutral-600">// // // //</span>
            </div>
            <span className="text-2xl font-mono tracking-widest text-neutral-400 uppercase mt-2 xx:text-[10px]">
              EXPERIENCIES
            </span>
          </div>

          <a 
            href="#visit-podcast" 
            className="flex items-center gap-1.5 text-xs font-mono tracking-wider text-neutral-400 hover:text-white uppercase transition-colors xx:text-[10px]"
          >
            ABOUT MY INTERNSHIP <span>→</span>
          </a>
        </div>

        {/* Title */}
        <h2 className="font-heading text-4xl pp:text-3xl tt:text-2xl xx:text-xl  tracking-wide uppercase text-white mb-4">
         AIMBLE IT SOLUTIONS / Web Developer | IT Support ( Intern )
        </h2>

        {/* Description */}
        <p className="text-neutral-400 text-sm pp:text-xs leading-relaxed max-w-2xl mb-8 tt:mb-6">
        My internship at Aimble IT Solutions allowed me to apply my academic knowledge in real-world projects, strengthening my skills in web development, problem-solving, and IT support.
        </p>

        {/* Featured Episode Card */}
        <div className="bg-[#141414] border border-neutral-800/80 rounded-sm p-4 pp:p-3 grid grid-cols-12 pp:grid-cols-1 gap-6 pp:gap-4 mb-10">
          
          {/* Left Thumbnail with Corner Cuts */}
          <div className="col-span-5 pp:col-span-1 bg-[#0a0a0a] p-3 flex items-center justify-center">
            <div 
              className="relative w-full h-64  aspect-square bg-neutral-900 overflow-hidden"
              style={{
                clipPath: 'polygon(0 0, calc(100% - 18px) 0, 100% 18px, 100% 100%, 18px 100%, 0 calc(100% - 18px))'
              }}
            >
              <img 
                src={client} 
                alt="Building Young in the AI Era | Jed Tan" 
                className="w-full h-full object-cover grayscale contrast-125"
              />
            </div>
          </div>

          {/* Right Details */}
          <div className="col-span-7 pp:col-span-1 flex flex-col justify-center py-2">
            {/* <div className="flex items-center gap-2 text-xs tt:text-[11px] font-mono text-neutral-400 uppercase mb-3">
              <span>▷</span>
              <span>FEATURED EPISODE</span>
            </div> */}

            <h3 className="font-heading text-xl pp:text-lg tt:text-base uppercase tracking-wide text-white mb-3">
              BUILDING SYSTEM AT MYRTLE CHRISTIAN SCHOOL INC.
            </h3>

            <p className="text-neutral-400 text-xs leading-relaxed mb-8 pp:mb-5 max-w-lg">
             	Developed and deployed a web based enrollment and record management system used by administrators, teachers, and parents at Myrtle Christian School Inc.
            </p>

            <div>
              <a 
                target='_blank'
                href="https://myrtlechristianschool.com/" 
                className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-wider text-white hover:text-neutral-300 uppercase transition-colors"
              >
                LIVE DEMO <span>→</span>
              </a>
            </div>
          </div>
                

            <div className="col-span-5 pp:col-span-1 bg-[#0a0a0a] p-3 flex items-center justify-center">
            <div 
              className="relative w-full h-64  aspect-square bg-neutral-900 overflow-hidden"
              style={{
                clipPath: 'polygon(0 0, calc(100% - 18px) 0, 100% 18px, 100% 100%, 18px 100%, 0 calc(100% - 18px))'
              }}
            >
              <img 
                src={itsupport} 
                alt="Building Young in the AI Era | Jed Tan" 
                className="w-full h-full object-cover grayscale contrast-125"
              />
            </div>
          </div>

          {/* Right Details */}
          <div className="col-span-7 pp:col-span-1 flex flex-col justify-center py-2">
            {/* <div className="flex items-center gap-2 text-xs tt:text-[11px] font-mono text-neutral-400 uppercase mb-3">
              <span>▷</span>
              <span>FEATURED EPISODE</span>
            </div> */}

            <h3 className="font-heading text-xl pp:text-lg tt:text-base uppercase tracking-wide text-white mb-3">
              IT SUPPORT
            </h3>

            <p className="text-neutral-400 text-xs leading-relaxed mb-8 pp:mb-5 max-w-lg">
             Assembled, maintained, and upgraded 15+ computers by installing SSDs, troubleshooting hardware software issues, and configuring operating systems.
            </p>

            <div>
              <a 
                href="#watch-now" 
                className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-wider text-white hover:text-neutral-300 uppercase transition-colors"
              >
                LIVE DEMO <span>→</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Episodes Grid */}
        {/* <div className="grid grid-cols-2 pp:grid-cols-1 gap-8 pp:gap-6 pt-2">
          
          <div className="flex flex-col">
            <div className="flex items-center gap-2 text-xl font-mono text-neutral-400 uppercase mb-2">
              <span>▷</span>
              <span>CERTIFICATION</span>
            </div>
            <h4 className="font-heading text-sm pp:text-xs uppercase tracking-wide text-white mb-2">
              OWNERSHIP MAKES YOU A BETTER ENGINEER | RAVEN DURAN
            </h4>
            <p className="text-neutral-400 text-xs xx:text-[11px] leading-relaxed">
              A conversation with Raven Duran on how taking ownership helps engineers grow — from making better decisions to becoming more dependable technical leaders.
            </p>
          </div>

        
          <div className="flex flex-col">
            <div className="flex items-center gap-2 text-xs font-mono text-neutral-400 uppercase mb-2">
              <span>▷</span>
              <span>EPISODE</span>
            </div>
            <h4 className="font-heading text-sm pp:text-xs uppercase tracking-wide text-white mb-2">
              CYBER SECURITY SHAPED HOW I BUILD | ELIEZER RABADON
            </h4>
            <p className="text-neutral-400 text-xs xx:text-[11px] leading-relaxed">
              A conversation with Eliezer Rabadon on how cybersecurity shaped the way he builds software, leads DVCODE Technologies, and thinks about trust in technical work.
            </p>
          </div>

        </div> */}

      </div>
    </div>
  );
};

export default Experience;