import React, { useEffect, useState, useRef } from 'react'
import Profile from '../components/Profile'
import AboutMe from '../components/AboutMe'
import Experience from '../components/Experience'
import School from '../components/School'
import data from '../assets/data.gif'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'
const Home = () => {
   
  const [showPopup, setShowPopup] = useState(false);
  const ran = useRef(false);


  useEffect ( () =>{
    if (ran.current) return; 
    ran.current = true;

   const visited = sessionStorage.getItem("visitedPortfolio");
   if (!visited) {
    setShowPopup(true);
    sessionStorage.setItem("visitedPortfolio", "true");
   }
  },[]);
  return (
   <>
   <div className='bg-black scroll-smooth from-slate-900 min-h-screen overflow-hidden   text-white'>
      {showPopup && (
      <div className=' fixed z-50 flex justify-center items-center inset-0 '>
        <div className=' backdrop-blur-md border border-white/10 bg-gradient-to-br to-white/5 from-white/5 shadow-lg p-6 max-w-sm h-[18rem] relative rounded-2xl w-full'>
          {/* <img className='w-32 h-32 object-contain drop-shadow-xl absolute -top-12 left-1/2 -translate-x-1/2' src={data} alt="" /> */}
           <DotLottieReact
          src="https://lottie.host/1425a0dd-3865-4e90-853e-a503d681d49b/eTSD4tqMAP.lottie"
         loop
         autoplay className='w-48 h-40 object-contain absolute -top-16 left-1/2 -translate-x-1/2'
        />
         <div className='flex flex-col gap-2 h-full justify-center items-center mt-2'>
         <h1 className='text-center font-bold text-3xl'>Thank You</h1>
         <p className='text-neutral-400 font-semibold'>for visiting my portfolio! 🚀</p>
         <p className='text-neutral-400 text-center font-normal'>Explore my projects and get to know more about me</p>       
         <button onClick={() => setShowPopup(false)} className=' bg-white mt-2 text-black font-semibold text-[15px] px-6 py-2 rounded-full'>Continue</button>
        </div> 
        </div>
      </div>
)}
     <div className='p-6 max-w-4xl mx-auto flex flex-col gap-2'>
       <Profile/>
       <div className='flex gap-2 pp:flex-wrap mt-3'>
        <AboutMe/>
        <Experience/> 
       </div>
      <School/>
     </div>
   </div>
   </>
  )
}

export default Home