import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import arrow from '../assets/down.png'
import calendar from '../assets/calendar.png'
import landing from '../assets/landing.mp4'
import capstone from '../assets/capstone.mp4'
import test2 from '../assets/test2.png'
import back from '../assets/back.png'
const MyProject = () => {
     const navigate = useNavigate();
     
     const goHome = () => {
     navigate("/");
      };
 
  const sectionProjects = useRef(null);
  
  const handleScroll = () => {
    sectionProjects.current.scrollIntoView({ behavior: "smooth"});
  }


  return (
 <>
  <div className='min-h-screen overflow-hidden bg-black text-white'>
  <div className='p-24 mx-auto flex flex-col gap-10'>

  <div className='flex items-center justify-start  gap-2'>
    <img className='w-5 h-5' src={back} alt="" />
    <button className='text-[13px]' onClick={goHome}>Back to Home </button>
    <h1 className=' font-bold text-2xl'>Projects</h1>
  </div>
   {/* Box */}
   <div className='flex gap-2'>
    <div className='flex flex-col gap-2'>
      <div className='flex-grow group flex gap-2'>
       <div className='bg-neutral-900 p-2 rounded-lg group overflow-hidden border border-neutral-600 w-[30rem] h-[20rem] '>
        <div className='flex flex-col h-[18rem] justify-end  p-5'> 
        <h1 className=' font-bold text-neutral-500 text-7xl'>I CREATE</h1>
         <h1 className=' font-bold text-neutral-500 text-7xl'>AWESOME</h1>
          <h1 className=' font-bold text-neutral-500 text-7xl'>UI</h1>
       </div>
       </div>
        <div className='bg-lime-400 flex justify-center items-center p-2 rounded-lg group overflow-hidden border border-neutral-600 w-[15rem] h-[20rem] '>
        <h1 className=' rotate-45 text-4xl font-bold text-black/80'>RESPONSIVE</h1>
       </div>
        <div className='bg-neutral-900 p-2 rounded-lg group overflow-hidden border border-neutral-600 w-[15rem] h-[20rem] '>
       
       </div>
      </div>
       <div className='flex gap-2'>
      <div className='bg-black p-2 rounded-lg group overflow-hidden border border-neutral-600 w-[30rem] h-[15rem] '>
       <div className='flex flex-col justify-center items-center ml-2 mt-10'>
        
         <h1 className='text-4xl font-thin text-lime-300'>Clean</h1>
          <h1 className='text-4xl font-thin'>Modern</h1>
           <h1 className='text-4xl font-thin'>Intuitive</h1>
        </div>
       </div>
       <div className='bg-lime-400 flex justify-center items-center p-2 rounded-lg group overflow-hidden border border-neutral-600 w-full h-[15rem] '>
       <h1 className='text-black/80 text-6xl font-bold text-center'>USER-FRIENDLY</h1>
       </div>
       </div>
    </div>

    <div className='bg-neutral-900 flex justify-center items-center p-2 border border-neutral-600 rounded-lg w-full'>
      <h1 className='text-neutral-600 font-bold text-4xl'>PROBLEM-SOLVING UI</h1>
    </div>
    
    </div>
    
     {/* Button */}

     <div className='flex justify-center animate-pulse'>
       <button onClick={handleScroll} className='border border-neutral-600 rounded-full h-16 w-16 flex justify-center items-center '> <img className='w-10 h-10' src={arrow} alt="" /></button>
     </div>
 </div>
</div>

<div ref={sectionProjects} className='min-h-screen overflow-hidden relative bg-black bg-gradient-to-t from-neutral-800 '>
<div className='p-24 m-auto'>
<div className='flex gap-2'>
  {/* box */}
  <div className='flex flex-col gap-2'>
  <div className=' overflow-hidden border flex flex-col gap-2 border-white/20 bg-gradient-to-br to-white/10 from-white/10 shadow-lg p-5 h-[25rem]  relative rounded-2xl w-[30rem]'>
   {/* bg-video */}
   <video className=' absolute rounded-xl inset-0 h-full object-fill' src={landing} autoPlay loop playsInline muted/>
   <div className=' bg-gradient-to-b to-white/10 from-black/85 inset-0 absolute'></div>
   
   <div className='flex flex-col z-10 gap-2 h-screen'>
   <h1 className='text-white font-semibold text-2xl text-center'>GNHS PORTAL PAGE</h1>
    {/* <p className='text-neutral-600 text-center'>Advance security features to keep your invesments safe</p> */}
   <hr className='mt-auto border-neutral-700' />
   <div className=' flex gap-1 justify-center items-center'>
   <div className='bg-white flex gap-2 items-center relative py-1 px-3 rounded-lg '>
    <img className='w-5 h-5' src={calendar} alt="" />
    <div className='flex flex-col'>
    <h1 className='text-[12px] text-neutral-500 font-semibold'>Deploy</h1>
    <h1 className='text-[11px] text-black font-bold'>28 August</h1>
    </div>
   </div>
     <div className='bg-white flex py-1 flex-col px-4 rounded-lg '>
    <h1 className='text-[12px] text-neutral-500 font-semibold'>Work Time</h1>
    <h1 className='text-black font-bold text-[11px]'>8:12</h1>
   </div>
    <button className='bg-white px-5 py-3 rounded-lg text-red-600 hover:text-white  font-semibold text-[12px] hover:bg-red-600'>Live</button>
   </div>
  </div>
   
  </div>
  
    <div className=' border flex flex-col gap-2 border-white/20 bg-gradient-to-br to-white/5 from-white/5 shadow-lg p-6 h-[33rem] relative rounded-2xl w-full'>
   <h1 className='text-white font-thin text-2xl text-center'>Landing Page</h1>
    <p className='text-neutral-600 text-center'>Advance security features to keep your invesments safe</p>      
  </div>
  </div>

    <div className='flex flex-col gap-2'>
    <div className=' border flex flex-col gap-2 border-white/20 bg-gradient-to-br to-white/5 from-white/5 shadow-lg p-6 h-[15rem] relative rounded-2xl w-[25rem]'>
    <h1 className='text-white text-2xl text-center font-thin'>Error / Warning Pop-up</h1>
   <p className='text-neutral-600 text-center'>A pop-up that clearly communicates system errors (e.g., failed payment, invalid form submission). Includes retry/cancel actions.</p>
    <hr className='mt-auto border-neutral-700' />
   <div className=' flex gap-1 justify-center items-center'>
   <div className='bg-neutral-700 flex gap-2 items-center relative py-1 px-3 rounded-lg '>
    <img className='w-5 h-5' src={calendar} alt="" />
    <div className='flex flex-col'>
    <h1 className='text-[12px] text-neutral-500 font-semibold'>Deploy</h1>
    <h1 className='text-[11px] text-white'>28 August</h1>
    </div>
   </div>
     <div className='bg-neutral-700 flex py-1 flex-col px-4 rounded-lg '>
    <h1 className='text-[12px] text-neutral-500 font-semibold'>Work Time</h1>
    <h1 className='text-white text-[11px]'>8:12</h1>
   </div>
    <button className='bg-neutral-700 px-5 py-3 rounded-lg text-red-600 font-semibold text-[12px] hover:bg-white'>Live</button>
   </div>
 </div>
  <div className=' overflow-hidden border flex flex-col gap-2 border-white/20 bg-gradient-to-br to-white/5 from-white/5 shadow-lg p-6 h-[28rem] relative rounded-2xl w-[25rem]'>
    <img className='absolute inset-0' src='' alt="" />
  <div className='flex flex-col z-10 gap-2 h-screen'>
   <h1 className='text-white text-2xl font-thin text-center'>Sign Up Form</h1>
    <p className=' text-center text-neutral-600'>A step-by-step signup process with progress indicators. Splits the form into multiple stages personal info, account details, confirmation for better user experience. Includes form validation at each step.</p>
   <hr className='mt-auto border-neutral-700' />
   <div className=' flex gap-1 justify-center items-center'>
   <div className='bg-neutral-700 flex gap-2 items-center relative py-1 px-3 rounded-lg '>
    <img className='w-5 h-5' src={calendar} alt="" />
    <div className='flex flex-col'>
    <h1 className='text-[12px] text-neutral-500 font-semibold'>Deploy</h1>
    <h1 className='text-[11px] text-white'>28 August</h1>
    </div>
   </div>
     <div className='bg-neutral-700 flex py-1 flex-col px-4 rounded-lg '>
    <h1 className='text-[12px] text-neutral-500 font-semibold'>Work Time</h1>
    <h1 className='text-white text-[11px]'>8:12</h1>
   </div>
    <button className='bg-neutral-700 px-5 py-3 rounded-lg text-red-600 font-semibold text-[12px] hover:bg-white'>Live</button>
   </div>
</div>
  </div>
   <div className=' border flex flex-col gap-2 border-white/20 bg-gradient-to-br to-white/5 from-white/5 shadow-lg p-6 h-[15rem] relative rounded-2xl w-[25rem]'>
    <h1 className='text-white text-2xl text-center font-thin'>Error / Warning Pop-up</h1>
   <p className='text-neutral-600 text-center'>A pop-up that clearly communicates system errors e.g., failed payment, invalid form submission. Includes retry/cancel actions.</p>
 </div>
</div>
 <div className=' flex gap-2 flex-col'>
 
 <div className=' border-2 overflow-hidden flex flex-col gap-2 border-white/30 bg-gradient-to-br to-white/5 from-white/5 shadow-lg p-6 h-[30rem] relative rounded-2xl w-full'>
    {/* bg-video */}
   <video className='absolute rounded-xl inset-0 h-full w-full object-fill' src={capstone} autoPlay loop playsInline muted/>
   <div className='bg-gradient-to-b to-white/10 from-black/80 inset-0 absolute'></div>
   
    
     <div className='flex flex-col pl-20 pr-20 h-full   z-10 gap-2'>
    <h1 className='text-white text-2xl text-center font-semibold'>CAPSTONE PROJECT</h1>
   {/* <p className='text-white text-center p-5 rounded-xl font-semibold'>Tamang Hula is a web-based game I designed and built as my capstone project. This project showcases my creativity, problem-solving skills, and ability to create engaging user experiences through frontend development</p> */}
   <div className=' flex gap-1 justify-center absolute  left-1/2 -translate-x-1/2 -translate-y-1/2 bottom-10 items-center'>
   <div className='bg-white flex gap-2 items-center relative py-1 px-3 rounded-lg '>
    <img className='w-5 h-5' src={calendar} alt="" />
    <div className='flex flex-col'>
    <h1 className='text-[12px] text-neutral-500 font-semibold'>Deploy</h1>
    <h1 className='text-[11px] text-black font-bold'>28 August</h1>
    </div>
   </div>
     <div className='bg-white flex py-1 flex-col px-4 rounded-lg '>
    <h1 className='text-[12px] text-neutral-500 font-semibold'>Work Time</h1>
    <h1 className='text-black font-bold text-[11px]'>8:12</h1>
   </div>
    <a href="https://tamanghula.online"  target="_blank" className='bg-white px-5 py-3 rounded-lg text-red-600 hover:text-white  font-semibold text-[12px] hover:bg-red-600'>Live</a>
   </div>
  </div>
 
 </div>
  <div className=' border flex flex-col gap-2 border-white/20 bg-gradient-to-br to-white/5 from-white/5 shadow-lg p-6 h-[15rem] relative rounded-2xl w-full'>
    <h1 className='text-white text-2xl text-center font-thin'>Error / Warning Pop-up</h1>
   <p className='text-neutral-600 text-center'>A pop-up that clearly communicates system errors (e.g., failed payment, invalid form submission). Includes retry/cancel actions.</p>
 </div>
 <div className=' border flex flex-col gap-2 border-white/20 bg-gradient-to-br to-white/5 from-white/5 shadow-lg p-6 h-[18rem] relative rounded-2xl w-full'>
    <h1 className='text-white text-2xl text-center font-thin'>Error / Warning Pop-up</h1>
   <p className='text-neutral-600 text-center'>A pop-up that clearly communicates system errors (e.g., failed payment, invalid form submission). Includes retry/cancel actions.</p>
 </div>
 </div>
</div>
</div>
</div>

<div className='min-h-screen flex bg-gradient-to-t to-neutral-800 from-blue-700'>
 
</div>
 </>
  )
}

export default MyProject