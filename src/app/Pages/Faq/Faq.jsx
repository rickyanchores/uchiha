import React from 'react'

const Faq = () => {
  return (
    <div className='Faq min-h-screen w-screen flex justify-center items-center' id='Faq'>
        <div className="Faq-container m-4 p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="contacts-box grid grid-cols-1">
            <h1 className='text-2xl font-bold'>Contacts</h1>
            <ul className="list">
              <li>Facebook</li>
              <li>Instagram</li>
              <li>Uber</li>
            </ul>
          </div>
          <div className="faq-image">
            <img src="https://zenjapangroup.com/wp-content/uploads/2000/01/0000.jpg" alt="japanese resto" />
          </div>
        </div>
    </div>
  )
}

export default Faq;