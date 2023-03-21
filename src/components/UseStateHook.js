import React, { useState } from "react";

const UseStateHook = () => {
  const [value, SetValue] = useState("Ashu");
  const handleChange = (e) => {
    SetValue(e.target.value);
  };
  return (
    <div>
      <h2>Use State Hook</h2>

      <input
        type="text"
        placeholder="Enter Something..."
        onChange={handleChange}
      />
      {value}
    </div>
  );
};

export default UseStateHook;
