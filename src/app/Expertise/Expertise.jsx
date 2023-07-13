import React from "react";
import "./expertise.css";
import { fetcher2 } from "../utils/fetch";

const Expertise = async () => {
  let logos = await fetcher2();

  return (
    <>
      <div id="expert-cont">
        <h1>Leverage Our Software And Hardware Expertise</h1>
        <div id="h2-cont">
          <h2>
            Use our services and tech expertise to create disruptive products &
            solutions that can revolutionize your business and stay ahead with
            evolving technological advancements
          </h2>
        </div>
        <div className="grid-cont2">
          {[...Array(5)].map((e, rowIndex) =>
            logos.map((ele, index) => (
              <div className="langs" key={`${rowIndex}-${index}`}>
                <img src={ele.logo} alt={ele.name} />
                <h3>{ele.name}</h3>
              </div>
            ))
          )}
        </div>
        <div className="stack-btn butn3">
        <a href="#"><span>Explore Our Entire Tech Stack</span></a>
        </div>
      </div>
    </>
  );
};

export default Expertise;