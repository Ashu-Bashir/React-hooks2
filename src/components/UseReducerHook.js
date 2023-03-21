import React, { useReducer } from "react";

const reducer = (state, action) => {
  console.log(state, "state");
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1, showText: state.showText };
    case "TOGGLESHOWTEXT":
      return { count: state.count, showText: !state.showText };

    default:
      return state;
  }
};

const UseReducerHook = () => {
  //   const [count, setCount] = useState(0);
  //   const [showText, setShowText] = useState(true);

  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    showText: true,
  });

  return (
    <div>
      <h1>Use Reducer Hook</h1>

      <h2>{state.count}</h2>
      <button
        onClick={() => {
          dispatch({ type: "INCREMENT" });
          dispatch({ type: "TOGGLESHOWTEXT" });
        }}
      >
        Click Here
      </button>
      {state.showText && <p>This is some text</p>}
    </div>
  );
};

export default UseReducerHook;
