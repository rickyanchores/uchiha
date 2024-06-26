import React from 'react'

const About = () => {
  return (
    <div className='About w-screen min-h-screen flex justify-around items-center' id='About'>
        <div className="about-grid m-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="title  p-4">
            <h1 className='text-2xl text-red-700 font-semibold'>uchiha.</h1>
          </div>
          <div className="text p-4">
            <p className='text-6xl font-extrabold'>Discover the essence of fresh food and spectacular sand garden.
              Embrace the zen.
            </p>
          </div>
        </div>
    </div>
  )
}

export default About;