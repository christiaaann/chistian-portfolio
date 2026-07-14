import React from 'react';

import BONITA from "../assets/BONITA.png"
import MYRTLE from '../assets/MYRTLE.png'
import Capstone from '../assets/LoginGame.png'
const RecentProject = () => {
  const projects = [
    {
      id: 1,
      type: "WEB APP • 2026",
      title: "BONITA",
      tag: "E-Commerce & Rental",
      // Maglagay ng path ng image mo rito (hal. "/images/bonita.png" o online URL)
      image: BONITA, 
      gradient: "from-cyan-500/30 to-blue-600/20",
      link: "#"
    },
    {
      id: 2,
      type: "WEB APP • 2026",
      title: "Enrollment System",
      tag: "School Management",
      image: MYRTLE,
      gradient: "from-emerald-400/20 to-teal-600/20",
      link: "#"
    },
    {
      id: 3,
      type: "WEB APP • 2026",
      title: "Game based Learning",
      tag: "",
      image: Capstone,
      gradient: "from-slate-900/5 to-slate-950/20",
      link: "#"
    }
  ];

  return (
    <section className="w-full bg-[#FAFCFF] py-20 px-6 text-slate-900">
      <div className="max-w-7xl mx-auto grid grid-cols-12 gap-12 pp:grid-cols-1 pp:gap-8">
        
        {/* Left Side: Sticky Headers & Intro */}
        <div className="col-span-5 pp:col-span-1 space-y-6 h-fit sticky top-10 pp:relative pp:top-0">
          <div className="text-xs font-bold tracking-widest text-blue-500 uppercase">
            / Selected Work
          </div>
          
          <h2 className="text-5xl font-black tracking-tight text-slate-950 uppercase leading-none ss:text-3xl xx:text-4xl">
            Recent<br />Projects.
          </h2>
          
          <p className="text-slate-500 text-sm leading-relaxed max-w-sm">
            A taste of what's been built lately — and the tools used to build it. Click any project to see the stack and story.
          </p>
          
          {/* Case Studies Counter */}
          <div className="flex items-center space-x-4 pt-4">
            <span className="w-8 h-[1px] bg-slate-300"></span>
            <span className="text-xs font-bold tracking-widest text-slate-400 uppercase">
              {projects.length} Case Studies
            </span>
          </div>
        </div>

        {/* Right Side: Vertical Project Cards List */}
        <div className="col-span-7 pp:col-span-1 space-y-6">
          {projects.map((project) => (
            <a
              key={project.id}
              href={project.link}
              className="block relative w-full aspect-[2/1] rounded-3xl overflow-hidden shadow-lg group transition-transform duration-300 hover:scale-[1.01]"
            >
              {/* Actual Project Image Background */}
              {project.image && (
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              )}

              {/* Gradient Overlay na may kulay para mabasa ang text */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} mix-blend-multiply opacity-90 group-hover:opacity-85 transition-opacity`} />

              {/* Foreground Content */}
              <div className="relative z-10 w-full h-full flex flex-col justify-between p-8 md:p-12 text-white">
                
                {/* Top Row: Info & Arrow */}
                <div className="flex justify-between items-center w-full">
                  <span className="text-xs font-bold tracking-widest opacity-95">
                    {project.type}
                  </span>
                  {/* Arrow Icon */}
                  <div className="w-8 h-8 rounded-full flex items-center justify-center bg-white/20 group-hover:bg-white/30 transition-colors">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>

                {/* Centered Small Badge Preview */}
                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-30 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none">
                  <span className="text-[10px] tracking-widest uppercase font-bold">{project.tag}</span>
                  <span className="text-xl font-bold tracking-tight mt-1">{project.title.toLowerCase()}</span>
                </div>

                {/* Bottom Big Bold Text Layout */}
                <div className="space-y-1 mt-auto">
                  <h3 className="text-4xl font-black drop-shadow-lg tracking-tight uppercase ss:text-2xl xx:text-3xl">
                    {project.title}
                  </h3>
                  <p className="text-[10px] tracking-widest font-bold opacity-80 uppercase">
                    HOVER TO VIEW STACK
                  </p>
                </div>

              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};

export default RecentProject;