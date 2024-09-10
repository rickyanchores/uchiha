import Link from 'next/link';
import React from 'react'

const Hero = () => {
  return (
    <div className='Hero opacity-2 w-screen min-h-screen' id='Hero' > 
      <div className="Hero-container bg-red-900 w-screen min-h-screen p-4 grid grid-cols-1 md:grid-cols-2 gap-4 justify-center items-center">
        <div className="hero-text">
          <p className='text-white'>Est 1993</p>
          <h1 className='text-zinc-200'>Your new favorite restaurant</h1>
        </div>
        <h1 className='Title text-8xl md:text-[9em] font-bold uppercase text-white'>
          uchiha
        </h1>
      </div>
    </div>
  )
}

export default Hero;