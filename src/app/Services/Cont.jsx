import React from "react";
import "./cont.css";
import { fetcher1 } from "../utils/fetch";

const Cont = async() => {
   let cards_arr = await fetcher1();
  return (
    <>
      <div id="service-cont">
        <h1>Customised Solution For All Your Business Needs</h1>
        <h2>
          Take Your Business To The Next Level With Our Industry-Leading
          Services
        </h2>
        <div className="grid-container">
          {cards_arr.map((ele,ind) => (
            <div className="cards" key={ind}>
              <img src={ele.image} alt="image" />
              <h2>{ele.name}</h2>
              <h3>Get Started</h3>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Cont;
