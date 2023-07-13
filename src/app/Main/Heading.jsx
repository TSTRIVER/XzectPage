'use client'
import React from "react";
import "./heading.css";
import { WhatsappIcon } from "next-share";

const Heading = () => {
  const st1 = {
    color: "red",
  };
  const st2 = {
    color: "blue",
  };
  const st3 = {
    color: "gray",
  };
  const st4 = {
    color: "rgb(194,194,25)",
  };
  const st5 = {
    color: "green",
  };
  return (
    <>
      <div id="head-cont">
        <h1>
          <span style={st1}>Build,</span>
          <span style={st2}>Test</span> <span style={st3}>And</span>{" "}
          <span style={st5}>Execute Your Ideas</span>
          <span style={st3}> With Our</span>{" "}
          <span style={st4}>Innovative Solutions</span>
        </h1>
      </div>
      <div className="wrapper-btn butn1">
      <a href="#"><WhatsappIcon size={36} round className="icon"/><span>Chat Now On WhatsApp!</span></a>
      </div>
      <div className="wrapper-btn butn2">
      <a href="#"><span>Explore Our Services</span></a>
      </div>
    </>
  );
};

export default Heading;

//