import { menuItems } from '@/app/Data/menuData';
import React from 'react'

const Menu = () => {
  return (
    <div className='Menu min-h-screen w-screen flex justify-center items-center' id='Menu'>
      <div className="Menu-container grid grid-cols-1 md:grid-cols-2 justify-center items-center">
      <div className="menuTitle flex justify-center items-center border-b-2 border-gray-400">
        <h1 className='text-6xl font-extrabold'>Menu</h1>
      </div>
      <div className="MenuItems hover:shadow-md p-4 m-4">
        {menuItems.map((item) => (
          <div key={item.id} className="MenuItem p-4 m-4">
            <h2 className='itemName font-bold'>{item.name}</h2>
            <p>{item.description}</p>
            <p className="itemPrice font-semibold">${item.price.toFixed(2)}</p>
          </div>
        ))}
      </div>
    </div>
    </div>
  )
}

export default Menu;