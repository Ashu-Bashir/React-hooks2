import React, { useEffect, useLayoutEffect, useRef } from "react";

function UseLayoutEffect() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.value = "Hello ";
  }, []);

  useLayoutEffect(() => {
    console.log(inputRef.current.value);
  }, []);

  return (
    <div>
      <h2>Use Layout Effect Hook</h2>
      <input
        type="text"
        value="Ashu"
        ref={inputRef}
        style={{ width: "400px" }}
      />
    </div>
  );
}

export default UseLayoutEffect;
