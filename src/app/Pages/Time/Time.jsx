import React from 'react'

const Time = () => {
  return (
    <div className='Time'>
        <div className="time-gridcontainer grid grid-cols-1 md:grid-cols-2 p-4 m-4">
            <div className="right"></div>
            <div className="left p-4">
                <div className="time-title">
                    <h1 className='font-semibold text-2xl pb-14 between border-b-2 border-gray-400 uppercase'>Opening Hours</h1>
                    <div className="time-list font-bold uppercase">
                        <div className="time-item flex justify-between border-b-2 border-gray-400 pt-4 pb-4">
                            <div className="time-days">
                                Monday - Thursday
                            </div>
                            <div className="time-hours">
                                8AM - 9PM
                            </div>
                        </div>
                        <div className="time-item flex justify-between  border-b-2 border-gray-400 pt-4 pb-4">
                            <div className="time-days">
                                Friday - Saturday
                            </div>
                            <div className="time-hours">
                                8AM - 11PM
                            </div>
                        </div>
                        <div className="time-item flex justify-between  border-b-2 border-gray-400 pt-4 pb-4">
                            <div className="time-days">
                                Sunday
                            </div>
                            <div className="time-hours">
                                Closed
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Time;