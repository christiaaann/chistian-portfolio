import React from 'react'
import info from '../assets/info.png'
const Experience = () => {
  return (
     <div className=' bg-neutral-950 border max-w-[20rem] pp:max-w-full border-neutral-700 p-5 rounded-lg'>
     <div className='flex gap-2 items-center'>
     <img className='w-5 h-5' src={info} alt="" />  
     <h1 className='text-xl font-bold'>Projects</h1>
     </div>
     <div className='flex flex-col gap-3 mt-2 text-[15px] text-justify p-3 '>
        <li>Tamang Hula (Capstone Project) – Developed a guessing game focused on Filipino culture using Unreal Engine. Designed an engaging, ensuring smooth gameplay and accessibility across devices. Implemented a multiplayer feature, allowing players to compete with friends in real-time, enhancing interactivity and player engagement.</li>
        <li>[Food Ordering System] (2nd Year Baby Thesis) – Created a desktop application in Vb.net using Visual Studio with a dedicated admin panel for managing system data and user activities. Designed the interface, implemented key functionalities, and ensured data accuracy through proper validation. This project gave me early experience in building role-based systems, handling user management, and applying database operations.</li>
        <li>UI/UX Design – Created mockups and prototypes using Figma for different web app concepts, focusing on intuitive navigation and clean design.</li>  
    </div>
    </div>
  )
}

export default Experience