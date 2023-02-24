import React from 'react'
import './subscribe.css'

const Subscribe = () => {
  return (
    <div className='subscribe'>
        <div className="subscribeTitleBox">
          <h1 className='subscribeTitle'>Subscribe to Newsletter</h1>
          <p>We have a wide experience in experience design and strategy</p>
        </div>
        <div className="subscribeInput">
        <input type="text 
        "  placeholder='Enter your emai address'/>
        <button>Send Now</button>
        </div>
      
    </div>
  )
}

export default Subscribe
