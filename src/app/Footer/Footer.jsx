import React from "react";
import Box1 from "./Box1";
import Box2 from "./Box2";
import Box3 from "./Box3";
import Box4 from "./Box4";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <div id="foot-cont">
        <div id="boxes">
            <Box1/>
            <Box2/>
            <Box3/>
            <Box4/>
        </div>
        <div id="rights">
        <h3> © 2018 - 2023. Xzect Labs Pvt. Ltd. All rights reserved.</h3>
        </div>
      </div>
    </>
  );
};

export default Footer;
