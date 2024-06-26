import React from 'react'

const Faq = () => {
  return (
    <div className='Faq min-h-screen w-screen flex justify-center items-center' id='Faq'>
        <div className="Faq-container m-4 p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="contacts-box grid grid-cols-1 md:grid-cols-2 gap-8">
            <h1 className='text-2xl font-bold'>Contacts</h1>
            <div className="contact-booking">
              <h1>uchiha-restaurant.xyz</h1>
            </div>
            <div className="contact-info text-xl font-semibold">
              <h1>570 St.Regent</h1>
              <h1>London,United Kingdom</h1>
              <h1>E3 5ST</h1>
              <h1>uchiha.reservations@gmail.com</h1>
            </div>
            <div className="medialinks">
              <ul className="list">
                <li>Facebook</li>
                <li>Instagram</li>
                <li>Uber</li>
              </ul>
            </div>
          </div>
          <div className="faq-image">
            <img src="https://zenjapangroup.com/wp-content/uploads/2000/01/0000.jpg" alt="japanese resto" />
          </div>
        </div>
    </div>
  )
}

export default Faq;