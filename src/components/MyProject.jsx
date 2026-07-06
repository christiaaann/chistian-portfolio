import React, { useRef, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import arrow from '../assets/down.png'
import calendar from '../assets/calendar.png'
import landing from '../assets/landing.mp4'
import capstone from '../assets/capstone.mp4'
import N_Game from '../assets/N_Game.png'
import back from '../assets/back.png'
import Language from '../assets/Language.png'
import LoginGame from '../assets/LoginGame.png'
import { ArrowLeft, ArrowRight, Globe, Pause, Play } from 'lucide-react'
const MyProject = () => {
    const navigate = useNavigate();
    const previewRef = useRef(null);
    const thumbRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0); 
    const sectionProjects = useRef(null);
    const [selected, setSelected] = useState("capstone"); 
    
    const togglePlay = () => {
    setSelected("capstone");
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

  const media = [
    {
      id: "capstone",
      type: "video",
      src: capstone,
    },
    {
      id: "N_Game",
      type: "image",
      src: N_Game,
    },
    {
      id: "Language",
      type: "image",
      src: Language,
    },
    {
      id:"LoginGame",
      type: "image",
      src: LoginGame,
    }
  ]

  useEffect(() => {
  const handleKeyDown = (e) => {
      const currentIndex = media.findIndex(
      (item) => item.id === selected
    );

    if (e.key === "ArrowRight") {
      const nextIndex = (currentIndex + 1) % media.length;
      setSelected(media[nextIndex].id);
    }

    if (e.key === "ArrowLeft") {
      const prevIndex = (currentIndex - 1 + media.length) % media.length;
      setSelected(media[prevIndex].id);
    }else{
     previewRef.current?.pause();
     thumbRef.current?.pause(); 
     setIsPlaying(false); 
    }
  };

  window.addEventListener("keydown", handleKeyDown);

  return () => {
    window.removeEventListener("keydown", handleKeyDown);
  };
}, [selected, media]);



    const goHome = () => {
    navigate("/");
  };

  const handleScroll = () => {
    sectionProjects.current.scrollIntoView({ behavior: "smooth"});
  }
 


  return (
 <>
  <div className='h-screen  overflow-hidden bg-gradient-to-bl from-yellow-400 to-white text-white'>
  <div className=' mx-auto max-w-[1500px] p-5'>
  <div className='flex items-center justify-start  gap-2'>
    <img className='w-5 h-5' src={back} alt="" />
    <button className='text-[13px]' onClick={goHome}>Back to Home </button>
    <h1 className=' font-bold text-2xl'>Projects</h1>
  </div>
     {/* Button */}
     {/* <div className='flex justify-center animate-pulse'>
       <button onClick={handleScroll} className='border border-neutral-600 rounded-full h-16 w-16 flex justify-center items-center '> <img className='w-10 h-10' src={arrow} alt="" /></button>
     </div> */}
 </div>

 {/* TAMANGHULA */}
   <div className=' flex p-10 h-full'>
    <div className=' p-1 w-full'>
      <h1 className='text-white font-bold text-6xl drop-shadow-md'>Capstone  Project</h1>
    <div className="border-8 aspect-video flex items-center justify-between  mt-4 rounded-lg shadow-sm relative">
       <button className='px-5 py-5 rounded-full border text-white bg-black/20 backdrop-blur-sm relative -left-10 z-10 '><ArrowLeft/></button>
       <button className='bg-white px-5 py-5 rounded-full border text-white bg-black/20 backdrop-blur-sm relative -right-10 z-20'><ArrowRight/></button> 
      
     {media.map((item) =>
    item.type === "video" ? (
     <video
        key={item.id}
        ref={item.id === "capstone" ? previewRef : null}
        src={item.src}
        muted
        loop
        playsInline
        controls
      onPlay={() => {
        thumbRef.current?.play();
        setIsPlaying(true);
      }}

      onPause={() => {
        thumbRef.current?.pause();
        setIsPlaying(false);
      }}

      onTimeUpdate={() => {
      if (thumbRef.current) {
        thumbRef.current.currentTime = previewRef.current.currentTime;
      }
      }}
        className={`absolute inset-0 w-full h-full object-cover ${
          selected === item.id ? "block" : "hidden"
        }`}
      />
    ) : (
      <img
        key={item.id}
        src={item.src}
        className={`absolute inset-0 w-full h-full object-cover ${
          selected === item.id ? "block" : "hidden"
        }`}
      />
    )    
    )}


    </div>

{/* Thumbnails */}
<div className="flex items-center gap-4 mt-4">
  {media.map((item) => (
    <div
      key={item.id}
      onClick={() => {
        if (item.type === "image") {
          previewRef.current?.pause();
          thumbRef.current?.pause();
          setIsPlaying(false);
        }

        setSelected(item.id);
      }}
      className={`group relative w-32 cursor-pointer rounded transition-all ${
        selected === item.id
          ? "ring-4 ring-yellow-900 scale-105"
          : "hover:scale-105"
      }`}
    >
      {item.type === "video" ? (
        <>
          <video
            ref={thumbRef}
            src={item.src}
            muted
            loop
            playsInline
            className="w-full rounded"
          />
         <button
        onClick={(e) => {
          e.stopPropagation();
          togglePlay();
        }}
        className={`
          absolute inset-0 flex items-center justify-center
          ${isPlaying ? "opacity-0 group-hover:opacity-100" : "opacity-100"}
          transition-opacity duration-200
        `}
      >
        <div className="bg-black/60 p-3 rounded-full text-white">
          {isPlaying ? <Pause size={18} /> : <Play size={18} />}
        </div>
      </button>
        </>
      ) : (
        <img src={item.src} className="w-full rounded" />
      )}
    </div>
  ))}
</div>
   
   {/* Profile Container */}
 <div className='mt-10 flex items-center gap-2' >
  <img className='w-14 object-cover border-2 border-yellow-900 shadow-lg h-14 rounded-full' src={LoginGame} alt="" /> 
 <div className='flex flex-col items-start'>
 <h1 className='text-yellow-900 drop-shadow-lg font-bold'>TAMANGHULA ONLINE GAME</h1>
  <a className='text-black bg-white/50 text-sm shadow-lg px-2 rounded-lg border border-black/10 flex gap-1 py-1 items-center' href=""><Globe strokeWidth={1} size={20}/>Visit Site</a>
  </div>
 </div>
    
    </div>
  <div className="p-1 overflow-y-auto w-full h-[800px]">

      {/* Timeline Container */}
      <div className="relative border-l-2 border-dashed border-white ml-4 space-y-12">
        
        {/* Mission */}
        <div className="relative pl-8 group">
          {/* Glowing Dot Selector */}
          <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-yellow-500 border-4 border-white-950 ring-4 ring-green-500/20 group-hover:scale-125 transition-transform duration-300"></div>
          
          {/* Glass Card */}
          <div className="p-5 rounded-2xl bg-white/50 shadow-lg transition-all duration-300">
            <span className="text-4xl drop-shadow-lg font-bold tracking-wider text-black/50 uppercase">
              01 / Project Overview
            </span>
            <p className="mt-2 drop-shadow-lg text-lg text-black/50 leading-relaxed font-medium">
            Tamang Hula is a web-based educational word-guessing game inspired by 4 Pics 1 Word. The game aims to promote Filipino and Bicolano culture by allowing players to guess words based on images related to local traditions, places, food, language, and customs. It combines entertainment with learning to make cultural education more engaging.
            </p>
          </div>
        </div>

        {/* Vision */}
        <div className="relative pl-8 group">
          {/* Glowing Dot Selector */}
          <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-purple-500 border-4 border-slate-950 ring-4 ring-purple-500/20 group-hover:scale-125 transition-transform duration-300"></div>
          
          {/* Glass Card */}
          <div className="p-5 rounded-2xl bg-white/50 backdrop-blur-md hover:border-purple-500/40 transition-all duration-300 shadow-lg hover:shadow-purple-500/5">
            <span className="text-4xl font-bold tracking-wider text-black/50 uppercase">
              02 / Problem
            </span>
          
            <p className="mt-2 text-black/50 text-lg leading-relaxed font-medium">
             Many young Filipinos are becoming less familiar with their local culture and dialects because they spend more time on modern digital entertainment than on educational cultural resources. There are also few interactive games that focus on Filipino and Bicolano heritage.
            </p>
          </div>
        </div>

        {/* Goal */}
        <div className="relative pl-8 group">
          {/* Glowing Dot Selector */}
          <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-emerald-500 border-4 border-slate-950 ring-4 ring-emerald-500/20 group-hover:scale-125 transition-transform duration-300"></div>
          
          {/* Glass Card */}
          <div className="p-5 rounded-2xl bg-white/50 shadow-lg">
            <span className="text-4xl font-bold tracking-wider text-black/50 drop-shadow-lg uppercase">
              03 / Solution
            </span>
            <p className="mt-2 drop-shadow-lg text-lg text-black/50 leading-relaxed font-medium">
             Developed a responsive web application that presents players with image-based puzzles connected to Filipino and Bicolano culture. The game encourages players to learn new words while enjoying an interactive and challenging experience.
            </p>
          </div>
        </div>
       
               <div className="relative pl-8 group">
          {/* Glowing Dot Selector */}
          <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-emerald-500 border-4 border-slate-950 ring-4 ring-emerald-500/20 group-hover:scale-125 transition-transform duration-300"></div>
          
          {/* Glass Card */}
          <div className="p-5 rounded-2xl bg-white/50 shadow-lg">
            <span className="text-4xl font-bold tracking-wider text-black/50 drop-shadow-lg uppercase">
              04 / Features
            </span>
            <p className="mt-2 drop-shadow-lg text-lg text-black/50 leading-relaxed font-medium">
            Responsive user interface, Modern UI designed, Score tracking system, Hint System, Admin Dashboard, Leaderboards, Multiple difficulty levels, 1 vs 1 , Points System Interface,  User Menu Interface,  Lobby Room,  Login/Register Account, 
            </p>
          </div>
        </div>
      </div>
    </div>
   
   </div>
</div>


{/* <div className='h-screen flex bg-white'>
 
</div> */}
 </>
  )
}

export default MyProject