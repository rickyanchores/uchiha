import React from 'react'
import axios from 'axios'

const Test = () => {

  const getFood = async () => {
    let url = "https://foodish-api.herokuapp.com/api/" // Updated the URL to a valid endpoint
    try {
      let res = await axios.get(url)
      console.log(res)
    } catch (err) {
      console.log("Something went wrong", err)
    }
  }

  return (
    <div id='Test' className='w-screen min-h-screen bg'>
      <h1>Test</h1>
    </div>
  )
}

export default Test
