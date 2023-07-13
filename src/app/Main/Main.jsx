import React from "react";
import "./main-anime.css";
import Set1 from "./Set1";
import Set2 from "./Set2";
import Set3 from "./Set3";
import Set4 from "./Set4";
import Heading from "./Heading";

const Main = () => {

  const lines_arr = Array(16).fill(null);

  return (
    <>
      <div id="main-cont">
        <Heading/>
        <Set1/>
        <Set2/>
        <Set3/>
        <Set4/>
        { 
           lines_arr.map((e,i)=>(
            <>
            <div className='c1'></div>
            <div className='c2' style={{width: "100%"}}> </div>
            </>
            ))
        }
      </div>
    </>
  );
};

export default Main;
