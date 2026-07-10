import React, { useRef, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import back from '../assets/back.png'
import capstone from '../assets/capstone.mp4'
import N_Game from '../assets/N_Game.png'
import Language from '../assets/Language.png'
import LoginGame from '../assets/LoginGame.png'
import { ArrowLeft, ArrowRight, Globe, Pause, Play, LayoutGrid } from 'lucide-react'

const MyProject = () => {
  const navigate = useNavigate();
  const previewRef = useRef(null);
  const thumbRef = useRef(null);
  const autoPlayTimerRef = useRef(null); // Timer Reference
  
  const [isPlaying, setIsPlaying] = useState(false);
  const [projectIndex, setProjectIndex] = useState(1);
  const [isAutoPlayActive, setIsAutoPlayActive] = useState(true); // Auto-play control state

  const projects = [
    {
      title: "E-Commerce Web App",
      subtitle: "LOCAL CRAFTS MARKETPLACE",
      description: "Online B2C Trading Platform",
      overview: "An e-commerce platform dedicated to promoting local Bicolano handicraft products. It bridges local artisans directly to modern consumers, making traditional crafts accessible globally.",
      problem: "Local artisans lack digital presence and struggling to find modern platforms to showcase their physical products.",
      solution: "Built a fully operational digital storefront with a secure checkout gateway and an advanced inventory system for local vendors.",
      features: ["Shopping Cart", "Payment Gateway Integration", "Vendor Dashboard", "Product Rating System", "Order History"],
      media: [
        { id: "ecom_1", type: "image", src: Language },
        { id: "ecom_2", type: "image", src: N_Game }
      ]
    },
    {
      title: "Capstone Project",
      subtitle: "TAMANGHULA ONLINE GAME",
      description: "Cultural Educational Word Game",
      overview: "Tamang Hula is a web-based educational word-guessing game inspired by 4 Pics 1 Word. The game aims to promote Filipino and Bicolano culture by allowing players to guess words based on images related to local traditions, places, food, language, and customs. It combines entertainment with learning to make cultural education more engaging.",
      problem: "Many young Filipinos are becoming less familiar with their local culture and dialects because they spend more time on modern digital entertainment than on educational cultural resources.",
      solution: "Developed a responsive web application that presents players with image-based puzzles connected to Filipino and Bicolano culture.",
      features: [
        "Responsive User Interface", "Modern UI Design", "Score Tracking System", 
        "Hint System", "Admin Dashboard", "Leaderboards", "Multiple Difficulty Levels", 
        "1 vs 1 Mode", "Points System Interface", "User Menu Interface", "Lobby Room", "Login/Register"
      ],
      media: [
        { id: "capstone", type: "video", src: capstone },
        { id: "N_Game", type: "image", src: N_Game },
        { id: "Language", type: "image", src: Language },
        { id: "LoginGame", type: "image", src: LoginGame }
      ]
    },
    {
      title: "Enrollment System",
      subtitle: "AUTOMATED ENROLLMENT PORTAL",
      description: "School Management & Registration Platform",
      overview: "An automated web-based enrollment system built to streamline student registration, sectioning, and fee evaluations. It eliminates the manual pen-and-paper workload, making the process seamless for both students and school administrators.",
      problem: "Traditional enrollment methods create long queues, consume significant time, and are highly prone to clerical human errors and lost physical student records.",
      solution: "Created a centralized database portal with secure authentication where students can select subjects instantly, and registrars can approve entries with a single click.",
      features: [
        "Student Registration Portal", "Admin Dashboard", "Subject & Sectioning Controls", 
        "Automated Fee Assessment", "Real-time Slot Counter", "Data Export to Excel"
      ],
      media: [
        { id: "enroll_1", type: "image", src: LoginGame },
        { id: "enroll_2", type: "image", src: N_Game },
        { id: "enroll_3", type: "image", src: Language }
      ]
    }
  ];

  const currentProject = projects[projectIndex];
  const [selectedMediaId, setSelectedMediaId] = useState(currentProject.media[0].id);

  // --- AUTO PLAY LOGIC ---
  useEffect(() => {
    // Mag-start lang ang timer kung active ang isAutoPlayActive
    if (isAutoPlayActive) {
      autoPlayTimerRef.current = setInterval(() => {
        setProjectIndex((prev) => (prev + 1) % projects.length);
      }, 5000); // Lipat kada 5 segundo
    }

    return () => {
      if (autoPlayTimerRef.current) clearInterval(autoPlayTimerRef.current);
    };
  }, [isAutoPlayActive, projects.length]);

  // Function para i-stop ang auto-play kapag ginalaw ng user
  const stopAutoPlay = () => {
    if (isAutoPlayActive) {
      setIsAutoPlayActive(false);
      if (autoPlayTimerRef.current) {
        clearInterval(autoPlayTimerRef.current);
      }
    }
  };

  useEffect(() => {
    setSelectedMediaId(currentProject.media[0].id);
    resetVideo();
  }, [projectIndex]);

  const handleNextProject = () => {
    stopAutoPlay(); // Stop automatic lipat kapag pinindot ng user
    setProjectIndex((prev) => (prev + 1) % projects.length);
  };

  const handlePrevProject = () => {
    stopAutoPlay(); // Stop automatic lipat kapag pinindot ng user
    setProjectIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const handleCardClick = (idx) => {
    stopAutoPlay(); // Stop automatic lipat kapag pumili ng card ang user
    setProjectIndex(idx);
  };

  const resetVideo = () => {
    previewRef.current?.pause();
    thumbRef.current?.pause();
    setIsPlaying(false);
  };

  const togglePlay = () => {
    stopAutoPlay(); // Patayin din ang auto-play kung pinanuod ng user ang video
    setSelectedMediaId(currentProject.media[0].id);
    setTimeout(() => {
      if (isPlaying) {
        thumbRef.current?.pause();
        previewRef.current?.pause();
      } else {
        thumbRef.current?.play();
        previewRef.current?.play();
      }
      setIsPlaying(!isPlaying);
    }, 0);
  };

  const goHome = () => navigate("/");

  return (
    <div className="min-h-screen bg-[#09090b] text-zinc-100 font-sans antialiased overflow-x-hidden relative selection:bg-amber-500/30">
      
      {/* Background Subtle Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-orange-600/5 rounded-full blur-[150px] pointer-events-none" />

      {/* Header Navbar */}
      <header className="border-b border-zinc-800/60 backdrop-blur-md sticky top-0 z-50 bg-[#09090b]/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <button onClick={goHome} className="flex items-center gap-2 text-sm font-medium text-zinc-400 hover:text-zinc-100 transition-colors group">
            <img className="w-4 h-4 invert opacity-70 group-hover:opacity-100 transition-opacity" src={back} alt="" />
            <span>Back to Home</span>
          </button>
          <div className="flex items-center gap-2">
            <LayoutGrid className="w-5 h-5" />
            <h1 className="font-semibold text-lg tracking-tight">Projects Showcase</h1>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12 relative">
        
        <div className="flex pp:flex-col  gap-8 items-start relative">
          
          {/* LEFT COLUMN: CAROUSEL WITH NO BACK CONTAINER */}
          <div className="w-full space-y-6">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <div>
                <span className="text-xs font-bold tracking-widest uppercase  px-2.5 py-1">
                  Featured Work
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mt-3 bg-gradient-to-r from-zinc-50 to-zinc-400 bg-clip-text text-transparent">
                  {currentProject.title}
                </h2>
              </div>
              
              {/* Optional Indicator Status para alam ng user kung hinto na ang autoplay */}
              {/* {!isAutoPlayActive && (
                <span className="text-[10px] text-zinc-500 border border-zinc-800 bg-zinc-900/50 px-2 py-0.5 rounded-md">
                  
                </span>
              )} */}
            </div>

            {/* Carousel Container */}
            <div className="relative aspect-video w-full flex items-center justify-center group/container">
              
              {/* BUTTON LEFT */}
              <button 
                onClick={(e) => { e.stopPropagation(); handlePrevProject(); }}
                className="absolute left-2 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/80 backdrop-blur-md border border-zinc-800/80 text-amber-500 hover:text-amber-400 hover:bg-black active:scale-90 transition-all z-40 shadow-xl opacity-0 group-hover/container:opacity-100"
              >
                <ArrowLeft size={18} strokeWidth={2.5} />
              </button>

              {/* 3D Cards Track */}
              <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
                {projects.map((proj, idx) => {
                  let position = idx - projectIndex;
                  if (position < -1) position = position + projects.length;
                  if (position > 1) position = position - projects.length;

                  const isActive = position === 0;
                  const isLeft = position === -1;
                  const isRight = position === 1;

                  return (
                    <div
                      key={idx}
                      onClick={() => !isActive && handleCardClick(idx)}
                      className={`absolute w-[82%] h-[96%] rounded-2xl border bg-zinc-950 overflow-hidden shadow-2xl transition-all duration-500 ease-out select-none
                        ${isActive ? "z-30 scale-100 opacity-100 border-amber-500/50 shadow-amber-500/5 pointer-events-auto" : ""}
                        ${isLeft ? "z-10 -translate-x-[46%] scale-[0.72] opacity-15 border-zinc-800/80 pointer-events-auto blur-[1px]" : ""}
                        ${isRight ? "z-10 translate-x-[46%] scale-[0.72] opacity-15 border-zinc-800/80 pointer-events-auto blur-[1px]" : ""}
                        ${!isActive && !isLeft && !isRight ? "opacity-0 scale-50 pointer-events-none" : ""}
                      `}
                    >
                      {isActive ? (
                        currentProject.media.map((item) =>
                          item.type === "video" ? (
                            <video
                              key={item.id}
                              ref={item.id === "capstone" ? previewRef : null}
                              src={item.src}
                              muted loop playsInline controls
                              onPlay={() => { thumbRef.current?.play(); setIsPlaying(true); stopAutoPlay(); }}
                              onPause={() => { thumbRef.current?.pause(); setIsPlaying(false); }}
                              onTimeUpdate={() => {
                                if (thumbRef.current && previewRef.current) {
                                  thumbRef.current.currentTime = previewRef.current.currentTime;
                                }
                              }}
                              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
                                selectedMediaId === item.id ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                              }`}
                            />
                          ) : (
                            <img
                              key={item.id}
                              src={item.src}
                              alt=""
                              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
                                selectedMediaId === item.id ? "opacity-100 z-10" : "opacity-0 z-0"
                              }`}
                            />
                          )
                        )
                      ) : (
                        <div className="w-full h-full relative">
                          <img 
                            src={proj.media[0].type === 'video' ? proj.media[1]?.src || LoginGame : proj.media[0].src} 
                            alt="" 
                            className="w-full h-full object-cover opacity-30"
                          />
                          <div className="absolute inset-0 bg-black/20 flex items-end p-4">
                            <p className="text-xs font-bold uppercase text-zinc-400 tracking-wider line-clamp-1">{proj.title}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* BUTTON RIGHT */}
              <button 
                onClick={(e) => { e.stopPropagation(); handleNextProject(); }}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/80 backdrop-blur-md border border-zinc-800/80 text-amber-500 hover:text-amber-400 hover:bg-black active:scale-90 transition-all z-40 shadow-xl opacity-0 group-hover/container:opacity-100"
              >
                <ArrowRight size={18} strokeWidth={2.5} />
              </button>
            </div>

            {/* Inner Project Dynamic Carousel Thumbnails */}
            <div className="flex items-center gap-3 overflow-x-auto py-2 no-scrollbar">
              {currentProject.media.map((item) => (
                <div
                  key={item.id}
                  onClick={() => {
                    stopAutoPlay(); // Patayin ang autoplay kapag may pinindot na thumbnail
                    if (item.type === "image") resetVideo();
                    setSelectedMediaId(item.id);
                  }}
                  className={`group/thumb relative w-28 sm:w-32 aspect-video flex-shrink-0 cursor-pointer rounded-lg overflow-hidden border transition-all duration-200 ${
                    selectedMediaId === item.id
                      ? "border-amber-500 ring-2 ring-amber-500/20 scale-[1.02]"
                      : "border-zinc-800 opacity-60 hover:opacity-100"
                  }`}
                >
                  {item.type === "video" ? (
                    <>
                      <video ref={thumbRef} src={item.src} muted loop playsInline className="w-full h-full object-cover" />
                      <button
                        onClick={(e) => { e.stopPropagation(); togglePlay(); }}
                        className={`absolute inset-0 flex items-center justify-center bg-black/40 transition-opacity duration-200 ${
                          isPlaying ? "opacity-0 group-hover/thumb:opacity-100" : "opacity-100"
                        }`}
                      >
                        <div className="bg-zinc-900/90 p-2 rounded-full border border-zinc-700 text-amber-500 shadow-md">
                          {isPlaying ? <Pause size={14} /> : <Play size={14} />}
                        </div>
                      </button>
                    </>
                  ) : (
                    <img src={item.src} alt="" className="w-full h-full object-cover" />
                  )}
                </div>
              ))}
            </div>

            {/* Profile / Client Branding Info Footer */}
            <div className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-800/80 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <img className="w-12 h-12 object-cover border border-zinc-700 rounded-full bg-zinc-800" src={LoginGame} alt="" />
                <div>
                  <h3 className="font-bold text-zinc-100 tracking-wide text-sm sm:text-base uppercase">{currentProject.subtitle}</h3>
                  <p className="text-xs text-zinc-400">{currentProject.description}</p>
                </div>
              </div>
              <a href="#visit" onClick={stopAutoPlay} className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-zinc-950 bg-white  rounded-lg shadow-lg shadow-amber-500/10 transition-all active:scale-95">
                <Globe size={14} />
                Visit Site
              </a>
            </div>
          </div>

          {/* RIGHT COLUMN: DOCUMENTATION CARD TRACK */}
          <div className="lg:col-span-5 w-full lg:h-[calc(100vh-8rem)] lg:overflow-y-auto pr-1 space-y-8 custom-scrollbar">
            {/* Overview */}
            <div className="relative pl-6 border-l border-zinc-800 group">
              <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-amber-500 ring-4 ring-amber-500/10" />
              <div className="p-5 rounded-xl bg-zinc-900/30 border border-zinc-800/60 hover:border-zinc-700/60 transition-colors">
                <span className="text-xs font-bold tracking-widest text-zinc-500 uppercase">01 / Project Overview</span>
                <p className="mt-3 text-zinc-300 text-sm leading-relaxed font-normal">{currentProject.overview}</p>
              </div>
            </div>

            {/* Problem */}
            <div className="relative pl-6 border-l border-zinc-800 group">
              <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-rose-500 ring-4 ring-rose-500/10" />
              <div className="p-5 rounded-xl bg-zinc-900/30 border border-zinc-800/60 hover:border-zinc-700/60 transition-colors">
                <span className="text-xs font-bold tracking-widest text-zinc-500 uppercase">02 / Problem</span>
                <p className="mt-3 text-zinc-300 text-sm leading-relaxed font-normal">{currentProject.problem}</p>
              </div>
            </div>

            {/* Solution */}
            <div className="relative pl-6 border-l border-zinc-800 group">
              <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-4 ring-emerald-500/10" />
              <div className="p-5 rounded-xl bg-zinc-900/30 border border-zinc-800/60 hover:border-zinc-700/60 transition-colors">
                <span className="text-xs font-bold tracking-widest text-zinc-500 uppercase">03 / Solution</span>
                <p className="mt-3 text-zinc-300 text-sm leading-relaxed font-normal">{currentProject.solution}</p>
              </div>
            </div>

            {/* Features */}
            <div className="relative pl-6 border-l border-zinc-800 group">
              <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-blue-500 ring-4 ring-blue-500/10" />
              <div className="p-5 rounded-xl bg-zinc-900/30 border border-zinc-800/60 hover:border-zinc-700/60 transition-colors">
                <span className="text-xs font-bold tracking-widest text-zinc-500 uppercase block mb-4">04 / Features</span>
                <div className="flex flex-wrap gap-2">
                  {currentProject.features.map((feature, i) => (
                    <span key={i} className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-zinc-800/50 text-zinc-300 border border-zinc-700/50 hover:border-zinc-600 transition-colors">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  )
}

export default MyProject