'use client'
import React from 'react';
import "./navbar.css";
import { useState } from 'react';
import { useEffect } from 'react';

const Navbar = () => {

   const [flag,setFlag] = useState(1);

   useEffect(()=>{
    const interval = setInterval(() => {
        setFlag((prev)=>!prev);
      }, 2000); 

      return () => {
        clearInterval(interval);
      };

   },[])
    
  return (
    <>
      <div id="nav-cont">
      <img src="https://media.istockphoto.com/id/1367769484/vector/letter-x-logo-print-for-t-shirt-cyberpunk-trend-gradient-tech-symbol-smooth-waves-pattern.jpg?s=612x612&w=0&k=20&c=Fv9XASWs10tk8xal2YpSh29gP7xLHVpuAnGmXtoLgsU="/>
      <h1 id='logo-heading'>Xzect</h1>
      </div>
      <div id="lower-bound" className={flag == 1?"grad1":"grad2"}></div>
    </>
  )
}

export default Navbar