import React from 'react'
import school from '../assets/school.png'
const School = () => {
  return (
    <>
      <div className='flex pp:flex-wrap gap-2'>
        <div className='bg-neutral-950 p-5 max-w-[20rem] pp:max-w-[50rem]  flex-grow rounded-lg border border-neutral-700'>
          <h1 className='font-semibold text-xl'>Motivation</h1>
          <p className='mt-2'>You don't have to be perfect just keep learning stay consistent.</p>
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