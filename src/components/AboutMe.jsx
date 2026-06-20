import React, {useState} from 'react'
import info from '../assets/info.png'
const AboutMe = () => {

  const techs = [
    { 
      name: "React", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      color: "text-sky-400 border-sky-500/20 bg-sky-500/5" 
    },
    { 
      name: "Tailwind CSS", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg", 
      color: "text-cyan-400 border-cyan-500/20 bg-cyan-500/5" 
    },
    { 
      name: "JavaScript", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", 
      color: "text-amber-400 border-amber-500/20 bg-amber-500/5" 
    },
    { 
      name: "Node.js", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", 
      color: "text-emerald-400 border-emerald-500/20 bg-emerald-500/5" 
    },
    { 
      name: "MySQL", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", 
      color: "text-blue-400 border-blue-500/20 bg-blue-500/5" 
    },
    { 
      name: "Firebase", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-original.svg", 
      color: "text-orange-400 border-orange-500/20 bg-orange-500/5" 
    },
    { 
      name: "Figma", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", 
      color: "text-purple-400 border-purple-500/20 bg-purple-500/5" 
    },
  ];
    
    const doubleTechs = [...techs, ...techs];
    const [isPaused, setIsPaused] = useState(false);
    
  return (
    <>
    
    <div className='flex flex-col w-[30rem] pp:w-full gap-2 '>
    <div className='bg-neutral-950 border border-neutral-700 p-5 rounded-lg'>
     <div className='flex items-center gap-2'>
      <img className='w-5 h-5' src={info} alt="" />  
     <h1 className='text-xl font-bold'>About</h1>
    </div>
     <div className='flex flex-col gap-5 mt-3 text-[15px] text-justify'>
      <p>I am a recent Information Technology graduate with experience in web development and basic IT support gained through academic projects and internship. I have worked on building systems that involve user interfaces, database management, and basic system functionality.</p>
       <p>During my internship and projects, I worked with structured data using CRUD operations for managing records such as users, students, enrollments, and payments. I also gained experience in troubleshooting basic hardware and software issues, as well as installing and configuring operating systems and applications.</p>
       <p>I am eager to continue learning and improving my technical skills in web development, database handling, and IT-related work. I am open to opportunities where I can contribute, grow, and gain more practical experience in a professional environment.</p>
     </div>
 
    </div>
    {/* tech stack */}
    <div className=' bg-neutral-950 border border-neutral-700 p-5 rounded-lg'>
     <h1 className='font-bold'>Techstack</h1> 
    <div className='flex justify-center h-28 items-center'>
        <style>{`
      @keyframes marquee {
        0% { transform: translateX(0%); }
        100% { transform: translateX(-50%); }
      }
      .animate-marquee {
        animation: marquee 30s linear infinite;
        animation-play-state: ${isPaused ? 'paused' : 'running'};
      }
      /* Preno: Humihinto ang tren kapag tinapatan ng mouse (hover) */
      .hover\:pause-marquee:hover .animate-marquee {
        animation-play-state: paused;
      }
    `}</style>
     

      <div className="flex overflow-hidden  relative  hover:pause-marquee select-none cursor-pointer">
      
        {/* The Marquee Row */}
        <div
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        className="flex gap-5 whitespace-nowrap animate-marquee px-3">
          {doubleTechs.map((tech, index) => (
            <div
              key={index}
              className={`flex items-center  gap-3 px-10 py-3.5 rounded-2xl border backdrop-blur-md font-medium tracking-wide shadow-lg transition-all duration-300 hover:scale-105 hover:bg-slate-900/60 ${tech.color}`}
            >
              <img 
                src={tech.icon} 
                alt={`${tech.name} logo`} 
                className="w-6 h-6 object-contain" 
                loading="lazy"
              />
              <span className="text-sm md:text-base">{tech.name}</span>
            </div>
          ))}
        </div>

      </div>
    </div>
</div>

    </div>
    </>
  )
}

export default AboutMe