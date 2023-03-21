import React, { useEffect, useState } from "react";
import axios from "axios";

const UseEffectHook = () => {
  const [data, setData] = useState("");
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        const data = response.data;
        data.forEach((item) => {
          setData(item.email);
        });
      });
  }, []);
  return (
    <div>
      <h2>Use Effect Hook</h2>
      {data}
    </div>
  );
};

export default UseEffectHook;
