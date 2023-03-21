import React, { useRef } from "react";
import UseImperativeChild from "./UseImperativeChild";

function UseImperativeParent() {
  const buttonRef = useRef(null);
  return (
    <div>
      <button
        onClick={() => {
          buttonRef.current.alterToggle();
        }}
      >
        Button From Parent
      </button>
      <UseImperativeChild ref={buttonRef} />
    </div>
  );
}

export default UseImperativeParent;
