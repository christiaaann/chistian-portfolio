import React from 'react'
import info from '../assets/info.png'
const AboutMe = () => {
  return (
    <>
    <div className='flex flex-col gap-2 '>
    <div className='bg-neutral-950 border border-neutral-700 p-5 rounded-lg max-w-[35rem] pp:max-w-full'>
     <div className='flex items-center gap-2'>
      <img className='w-5 h-5' src={info} alt="" />  
     <h1 className='text-xl font-bold'>About</h1>
    </div>
     <div className='flex flex-col gap-5 mt-3 text-[15px] text-justify'>
      <p> I’m Christian Pretista Heje, a graduating student and passionate Game Developer. I love creating games that are engaging, fun, and immersive for players. Seeing a project come to life from start to finish and making sure everything works smoothly excites me.</p>
       <p>Currently, I’m learning web development to expand my skills and explore new ways to build interactive experiences. I enjoy solving problems, thinking creatively, and finding ways to make projects better. I work well with others, but I’m also comfortable figuring things out on my own..</p>
       <p>I’m excited to start my career, take on new challenges, and build projects that people enjoy using. I want to create experiences that are practical, useful, and fun, and I’m ready to bring my energy, curiosity, and dedication to any opportunity I get.</p>
     </div>
 
    </div>
    {/* tech stack */}
    <div className='bg-neutral-950 border border-neutral-700 p-5 rounded-lg'>
      <div className='flex justify-between'>
      <h1 className='font-bold text-xl'>Tech Stack</h1>
      <button className='text-[14px] px-4 rounded'>View All</button> 
      </div>
       <h1 className='mt-2 font-semibold text-lg'>Framework</h1>
        <div className='flex mt-2 gap-2 flex-wrap'>
         <h2 className='border px-5 rounded-md text-[15px]'>React</h2>
         <h2 className='border px-5 rounded-md text-[15px]'>TailwindCSS</h2>
        </div>
        <h1 className='mt-2 font-semibold text-lg'>Backend</h1>
        <div className='flex gap-2 mt-2 flex-wrap'>
        <h2 className='border px-5 rounded-md text-[15px]'>NodeJs</h2>
          <h2 className='border px-5 rounded-md text-[15px]'>MySQL</h2>
          <h2 className='border px-5 rounded-md text-[15px]'>Javascript</h2> 
        </div>
        <h1 className='font-bold text-lg mt-1'>Software Tools</h1>
        <div className='flex gap-2 mt-2'>
         <h2 className='border px-5 rounded-md text-[15px]'>Vscode</h2>
         <h2 className='border px-5 rounded-md text-[15px]'>Figma</h2>
         <h2 className='border px-5 rounded-md text-[15px]'>Canva</h2>
        </div>
                <h1 className='font-bold text-lg mt-1'>Game Engine</h1>
        <div className='flex gap-2 mt-2'>
         <h2 className='border px-5 rounded-md text-[15px]'>Unreal Engine</h2>
          <h2 className='border px-5 rounded-md text-[15px]'>C++ / Blueprint</h2>
        </div>
    </div>
    </div>
    </>
  )
}

export default AboutMe