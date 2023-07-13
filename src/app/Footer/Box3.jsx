import React from "react";
import { fetchCategory } from "../utils/fetch";

const Box3 = async() => {
    let req_arr = await fetchCategory();
     let cat_arr = await req_arr.data2;
  return (
    <>
      <div className="box-styles sep3">
        <h1>Industries</h1>
        {
            cat_arr.map((ele,ind)=>(
                <h2 key={ind} className="subcats">{ele}</h2>
            ))
        }
      </div>
    </>
  );
};

export default Box3;
