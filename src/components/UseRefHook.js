import React, { useRef } from "react";

function UseRefHook() {
  const inputRef = useRef(null);

  const handleClick = () => {
    // console.log(inputRef.current.value);
    inputRef.current.focus();
  };
  return (
    <div>
      <h2>Use Ref Hook</h2>
      <h1>Ashu</h1>
      <input type="text" placeholder="example..." ref={inputRef} />
      <button onClick={handleClick}>Change Name</button>
    </div>
  );
}

export default UseRefHook;
