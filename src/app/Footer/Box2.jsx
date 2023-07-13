import React from "react";
import { fetchCategory } from "../utils/fetch";

const Box2 = async() => {
    let req_arr = await fetchCategory();
     let cat_arr = await req_arr.data1;
  return (
    <>
      <div className="box-styles sep2">
        <h1>Services</h1>
        {
            cat_arr.map((ele,ind)=>(
                <h2 key={ind} className="subcats">{ele}</h2>
            ))
        }
      </div>
    </>
  );
};

export default Box2;
