'use client'
import React from "react";
import {
  FacebookIcon,
  TwitterIcon,
  InstagramIcon,
  LinkedinIcon,
  PinterestIcon,
  WhatsappIcon,
} from "next-share";

const Box1 = () => {
  return (
    <>
      <div id="box1">
        <h1>Xzect Labs Pvt. Ltd.</h1>
        <div id="para">
          <h2>
            Xzect provides a diverse array of services that enable both
            businesses and individuals to bring their vision to life . Our
            specialties include software development, website design and SEO,
            cloud services, robotics and automation, 3D printing and
            prototyping, data science and analytics, AI and machine learning,
            IOT, AR and VR, blockchain, and other tech-related services. Our
            team of experienced professionals is available to assist with the
            design and development of new products, exploration of robotics and
            automation possibilities, or any other requirements of yours...!
          </h2>
        </div>
        <h4>Registered Address: 203, 2-A/3, Asaf Ali Road, Delhi - 110002</h4>
        <h4>CIN: U72200DL2022PTC408714</h4>
        <h4>GST: 07AAACX4373J1Z2</h4>
        <div id="social-logs">
          <FacebookIcon size={36} round className="ics" />
          <TwitterIcon size={36} round className="ics" />
          <InstagramIcon size={36} round className="ics" />
          <LinkedinIcon size={36} round className="ics" />
          <PinterestIcon size={36} round className="ics" />
          <WhatsappIcon size={36} round className="ics" />
        </div>
      </div>
    </>
  );
};

export default Box1;
