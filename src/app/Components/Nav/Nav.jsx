import Link from 'next/link';
import React from 'react'

const Nav = () => {

  return (
    <div className='Nav shadow text-gray-700 rounded-lg flex justify-between items-center p-4 m-4 sticky top-2'>
        <Link href="/#Hero"><h1 className='font-bold text-2xl'>uchiha</h1></Link>
        <ul className="navLinks  flex justify-around items-center gap-4">
          <Link href="/#Menu" className='hover:font-semibold'>Menu</Link>
          <Link href="/#Gallery" className='hover:font-semibold'>Gallery</Link>
          <Link href="/#About" className='hover:font-semibold'>About</Link>
          <Link href="/#Faq" className='hover:font-semibold'>Faq</Link>
        </ul>
    </div>
  )
}

export default Nav;