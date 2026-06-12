import React, { useEffect, useState } from 'react'
import info from '../assets/info.png'
import enrollment from '../assets/enrollment.png'
import rental from '../assets/rental.png'
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

  return (
     <div className=' bg-neutral-950 border max-w-[20rem] pp:max-w-full border-neutral-700 p-2 rounded-lg'>
     <div className='flex gap-2 relative left-1 items-center'>
     <img className='w-5 h-5' src={info} alt="" />  
     <h1 className='text-xl font-bold'>Projec History</h1>
     </div>
     <div className='flex flex-col gap-3 mt-2 text-[15px] text-justify p-1 '>
       <li className='text-lg relative left-5'>Enrollment System <span className=' bg-red-600 text-white text-sm rounded-sm px-2'>Live</span></li>
        {slider.length > 0 ? (
        <a target='_blank' href='https://myrtlechristianschool.com/'>
        <img className='h-72' src={slider[current].imageUrl} alt="" />
        </a>
        ):(
       <span>No Project</span>    
    )}
        <div className='p-3'>
        <li>Implemented Google Authentication login using Firebase.</li>
        <li>Developed frontend and backend features using React, Node.js, Tailwind CSS, and JavaScript.</li>
        <li>Integrated database and handled system functionality using Firebase.</li>
        <li>Added email notification system for application approval and rejection during enrollment.</li>
      </div>
       <li className='text-lg relative left-5'>Rental System</li>
       <img className=' border border-gray-500' src={rental} alt="" />

    </div>
    </div>
  )
}

export default Experience