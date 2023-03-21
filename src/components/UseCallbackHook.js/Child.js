import React, { useEffect } from "react";

const Child = ({ returnComment }) => {
  useEffect(() => {
    console.log("Function was created!!!");
  }, [returnComment]);

  return <div>{returnComment("Ashu")}</div>;
};

export default Child;
