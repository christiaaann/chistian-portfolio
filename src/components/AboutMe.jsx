import React from 'react';

const AboutMe = () => {
  const techStack = [
    {
      category: "FRONTEND",
      skills: ["React", "JavaScript", "TypeScript", "HTML5"]
    },
    {
      category: "BACKEND",
      skills: ["Node.js", "Express", "RESTful APIs"]
    },
    {
      category: "UI & STYLING",
      skills: ["Tailwind CSS", "Figma", "Framer Motion", "CSS3"]
    },
    {
      category: "DATABASE",
      skills: ["Firebase", "Firestore"]
    },
    {
      category: "VIDEO EDITING",
      skills: ["Premiere Pro", "After Effects", "CapCut", "DaVinci Resolve"]
    },
    {
      category: "DEVOPS & TOOLS",
      skills: ["Git", "GitHub", "NPM / Yarn"]
    }
  ];

  const serviceNotes = [
    {
      icon: (
        <svg className="w-6 h-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Pricing",
      description: "Final price depends on project complexity, scope, and specific requirements."
    },
    {
      icon: (
        <svg className="w-6 h-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Terms",
      description: "Down payment is required before the start of frontend design and development."
    },
    {
      icon: (
        <svg className="w-6 h-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Timeline",
      description: "1–3 weeks depending on the project scope. Regular progress updates and revisions included."
    }
  ];

  return (
    <section className="w-full bg-[#FAFCFF] py-20 px-6 text-slate-900">
      <div className="max-w-7xl mx-auto grid grid-cols-12 gap-12 pp:grid-cols-1 pp:gap-8">
        
        {/* Left Column: Technology Stack */}
        <div className="col-span-8 pp:col-span-1 space-y-8">
          <h2 className="text-4xl font-black tracking-tight text-slate-950 uppercase ss:text-2xl xx:text-3xl">
            Technology Stack
          </h2>
          
          <div className="grid grid-cols-2 gap-2 pp:grid-cols-1 xx:grid-cols-1">
            {techStack.map((group, index) => (
              <div 
                key={index} 
                className="bg-white shadow border border-slate-100/80 rounded-3xl p-8 space-y-5 ss:p-6"
              >
                {/* Category Header */}
                <div className="flex items-center space-x-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span>
                  <span className="text-xs font-extrabold tracking-widest text-slate-950 uppercase">
                    {group.category}
                  </span>
                </div>

                {/* Badges / Pills */}
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill, idx) => (
                    <span 
                      key={idx} 
                      className="px-4 py-2 text-xs font-medium text-slate-600 bg-[#F4F8FA]/60 border border-slate-100/60 rounded-full hover:bg-white hover:shadow-sm hover:border-blue-200 transition-all duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Service Notes */}
        <div className="col-span-4 pp:col-span-1 space-y-8">
          <h2 className="text-4xl font-black tracking-tight text-slate-950 uppercase ss:text-2xl xx:text-3xl">
            Service Notes
          </h2>

          <div className="space-y-4">
            {serviceNotes.map((note, index) => (
              <div 
                key={index} 
                className="bg-white border border-slate-100/80 rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.015)] flex items-start space-x-5 ss:p-6"
              >
                {/* Custom Icon Wrapper */}
                <div className="p-3 bg-blue-50/50 rounded-2xl flex-shrink-0">
                  {note.icon}
                </div>
                
                <div className="space-y-1.5">
                  <h3 className="font-bold text-slate-950 text-base">
                    {note.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {note.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutMe;