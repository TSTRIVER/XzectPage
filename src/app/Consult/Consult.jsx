'use client'
import React from 'react';
import "./consult.css";

const Consult = () => {
    const lines_arr = Array(16).fill(null);
    
  return (
    <>
      <div id="consult-cont">
        {
            lines_arr.map((e,i)=>(
            <>
            <div className='line'></div>
            <div className='line2' style={{width: "100%"}}> </div>
            </>
            ))
        }
        <h1>Innovate.<span>Validate.</span><span>Launch.</span></h1>
        <div id="second-head">
            <h2>Let's transform your idea into reality with our</h2>
            <h2> MVP development services.</h2>
        </div>
        <div id="consult-btn">
          <h2>Book A Free Consultation!</h2>
        </div>
      </div>
    </>
        
  )
}

export default Consult

