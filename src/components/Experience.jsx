import React, { useEffect, useState, useRef } from 'react'
import info from '../assets/info.png'
import enrollment from '../assets/enrollment.png'
import rental from '../assets/rental.png'
import { ChevronLeft, ChevronRight } from 'lucide-react'
const Experience = () => {
  
  const [slider, setSlider] = useState([
  { imageUrl: enrollment },
  { imageUrl: rental }
]);
  const [current, setCurrent] = useState(0);

  useEffect( () => {
   const interval = setInterval( () => {
     setCurrent(prev => slider.length ? (prev + 1) % slider.length : 0);
   }, 3000);
   return () => clearInterval(interval);
  }, [slider]);
  
  const ref = useRef();
  const [show, setShow] = useState(false);
  
  return (
     <div className=' bg-neutral-950 w-full border border-neutral-700 p-2 rounded-lg'>
     <div className='flex gap-2 relative left-1 items-center'>
     <img className='w-5 h-5' src={info} alt="" />  
     <h1 className='text-xl font-bold'>Project History</h1>
     </div>
     <div className='flex relative flex-col gap-3 mt-2 text-[15px] text-justify p-1 '>
       <li className='text-lg relative left-5 flex items-center gap-2'>Enrollment System Online<span className='w-3 h-3 animate-pulse bg-green-600 rounded-full p-1'></span></li>
        {slider.length > 0 ? (
        <>
        <a target='_blank' href='https://myrtlechristianschool.com/'>
        <img 
         className='h-72 rounded-md' 
         src={slider[current].imageUrl} 
         />
        </a>
        <button
         className='absolute top-44 -left-2 border border-white/50 backdrop-blur-xl w-10 h-10 rounded-full flex justify-center items-center'
         >
          <ChevronLeft/>
          </button>
        <button
         className='absolute top-44 -right-2 border border-white/50 backdrop-blur-xl w-10 h-10 rounded-full flex justify-center items-center'
         >
          <ChevronRight/>
          </button>
      </>  
     ):(
       <span>No Project</span>    
    )}
        {/* <div className='p-3'>
         <p className=' border p-2 rounded-lg border-neutral-700'>Implemented Google Authentication login using Firebase.</p> 
           <p className=' border p-2 rounded-lg border-neutral-700'>Added email notification system for application approval and rejection during enrollment.</p>  
             <p className=' border p-2 rounded-lg border-neutral-700'>Integrated database and handled system functionality using Firebase</p>   
        <li>Implemented Google Authentication login using Firebase.</li>
        <li>Developed frontend and backend features using React, Node.js, Tailwind CSS, and JavaScript.</li>
        <li>Integrated database and handled system functionality using Firebase.</li>
        <li>Added email notification system for application approval and rejection during enrollment.</li>
      </div> */}
     <div >
      <h1 className='text-xl'>Skills</h1> 
      
      <div className='flex flex-wrap gap-1 mt-2'>
      <h1 className='bg-neutral-900 py-3 px-3 rounded-full border border-neutral-800'>Web Development</h1>
      <h1 className='bg-neutral-900 py-3 px-3 rounded-full border border-neutral-800'>Frontend Developer</h1>
      <h1 className='bg-neutral-900 py-3 px-3 rounded-full border border-neutral-800'>Backend Developer</h1>
        <h1 className='bg-neutral-900 py-3 px-3 rounded-full border border-neutral-800'>Computer Troubleshooting</h1>
      </div>
     </div>

    </div>
    </div>
  )
}

export default Experience