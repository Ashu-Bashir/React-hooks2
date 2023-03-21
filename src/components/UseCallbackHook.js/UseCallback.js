import React, { useState, useCallback } from "react";
import Child from "./Child";

const UseCallback = () => {
  const [toggle, setToggle] = useState(false);
  const [data, setData] = useState("Hello I am Data");

  const returnComment = useCallback(
    (name) => {
      return data + name;
    },
    [data]
  );

  return (
    <div>
      <h2>Use Callback Hook</h2>
      <Child returnComment={returnComment} />
      <button onClick={() => setToggle(!toggle)}>Toggle</button>
      {toggle && <h3>Toggled</h3>}
    </div>
  );
};

export default UseCallback;
