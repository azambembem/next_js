import React from "react";
import Child from "../child";

const Parent = () => {
  return (
    <div>
      <b>ParentComponent Money: 10000</b>
      <Child money={10000} />
    </div>
  );
};

export default Parent;
