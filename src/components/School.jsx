import React from 'react'
import school from '../assets/school.png'
const School = () => {
  return (
    <>
      <div className='flex pp:flex-wrap gap-2'>
        <div className='bg-neutral-950 p-5 max-w-[20rem] pp:max-w-[50rem]  flex-grow rounded-lg border border-neutral-700'>
          <h1 className='font-semibold text-xl'>Socials</h1>
        <div className='flex gap-2 justify-center'>
        <div className=" mt-2 bg-blue-500/5 w-16 h-16 p-2 flex justify-center items-center  border border-blue-500/10 rounded-xl">
         <a
          href="" 
          target="_blank" 
          rel="noopener noreferrer"
          className=" object-contain group opacity-80  transition-all duration-300"
        >
          <img 
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg" 
            alt="Facebook logo" 
            className="w-8 h-8 grayscale group-hover:grayscale-0 object-contain" 
            loading="lazy"
          />
        </a>
         </div>
     
     
        <div className=" mt-2  bg-blue-600/5  w-16 h-16 p-2 flex justify-center items-center  border border-blue-500/5 rounded-xl">
         <a
          href="" 
          target="_blank" 
          rel="noopener noreferrer"
          className=" group object-contain opacity-80  transition-all duration-300"
        >
          <img 
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
            alt="Linkind logo" 
            className="w-8 h-8 grayscale group-hover:grayscale-0  object-contain transition-all duration-300" 
            loading="lazy"
          />
        </a>
         </div>
        
        {/* <div className=" mt-2 bg-neutral-900 w-16 h-16 p-2 flex justify-center items-center  border border-neutral-700 rounded-xl">
         <a
          href="" 
          target="_blank" 
          rel="noopener noreferrer"
          className=" object-contain grayscale opacity-80  transition-all duration-300"
        >
          <img 
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons//javascript-original.svg" 
            alt="Facebook logo" 
            className="w-8 h-8 object-contain" 
            loading="lazy"
          />
        </a>
         </div> */}
        </div>
        </div>
          
          {/* school */}
        <div className='bg-neutral-950 border flex-grow border-neutral-700 p-5 rounded-lg'>
         <h1 className='text-xl font-semibold'>School</h1>  
          <div className='flex flex-col relative items-start gap-2 mt-2'> 
          <button className='bg-black w-full flex px-5 gap-2 items-center py-3 rounded-lg hover:bg-slate-900'> <img className='w-5 h-5' src={school} alt="" />Veritas College Irosin <h1 className=' absolute right-5 font-semibold'>2022-2026</h1></button>
          <button className='bg-black w-full px-5 flex rounded-lg py-3 gap-2 items-center hover:bg-slate-900'> <img className='w-5 h-5' src={school} alt="" />Gallanosa National High School <h1 className=' absolute right-5 font-semibold'>2016-2022</h1></button>
            <button className='bg-black w-full px-5 flex rounded-lg py-3 gap-2 items-center hover:bg-slate-900'> <img className='w-5 h-5' src={school} alt="" />Tabon-Tabon Elementary School</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default School