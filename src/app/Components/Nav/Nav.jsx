import Link from 'next/link';
import React from 'react'

const Nav = () => {

  return (
    <div className='Nav shadow text-gray-700 font-semibold flex justify-between items-center p-4 mb-2  sticky top-2'>
        <Link href="/#Hero"><h1 className='font-bold text-2xl text-red-900'>uchiha</h1></Link>
        <ul className="navLinks  flex justify-around items-center gap-4">
          <Link href="/#Menu" className='hover:text-red-900'>Menu</Link>
          <Link href="/#Gallery" className='hover:text-red-900'>Gallery</Link>
          <Link href="/#About" className='hover:text-red-900'>About</Link>
          <Link href="/#Faq" className='hover:text-red-900'>Faq</Link>
        </ul>
    </div>
  )
}

export default Nav;