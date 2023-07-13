import React from "react";
import { fetchCategory } from "../utils/fetch";

const Box4 = async () => {
  let req_arr = await fetchCategory();
  let cat_arr = await req_arr.data3;
  return (
    <>
      <div className="box-styles sep3">
        <h1>Resources</h1>
        {cat_arr.map((ele, ind) => (
          <h2 key={ind} className="subcats">
            {ele}
          </h2>
        ))}
      </div>
    </>
  );
};

export default Box4;
