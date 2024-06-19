import Link from 'next/link';
import React from 'react'

const Hero = () => {
  return (
    <div className='Hero opacity-2 w-screen min-h-screen flex flex-col md:flex-row justify-around items-center' id='Hero' > 
      <p className='text-white'>Est 1993</p>
      <h1 className='text-zinc-200'>Your new favorite restaurant</h1>
      <h1 className='Title text-[250px] font-bold text-white'>
        uchiha
      </h1>
    </div>
  )
}

export default Hero;