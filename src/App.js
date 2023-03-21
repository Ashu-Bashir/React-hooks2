import UseCallback from "./components/UseCallbackHook.js/UseCallback";
import UseContext from "./components/UseContextHook.js/UseContext";
import UseEffectHook from "./components/UseEffectHook";
import UseImperativeParent from "./components/UseImperativeHook.js/UseImperativeParent";
import UseLayoutEffect from "./components/UseLayoutEffect";
import UseMemoHook from "./components/UseMemoHook";
import UseReducerHook from "./components/UseReducerHook";
import UseRefHook from "./components/UseRefHook";
import UseStateHook from "./components/UseStateHook";

function App() {
  return (
    <div>
      <h1>React Hooks</h1>
      {/* <UseStateHook /> */}
      {/* <UseReducerHook /> */}
      {/* <UseEffectHook /> */}
      {/* <UseRefHook /> */}
      {/* <UseLayoutEffect /> */}
      {/* <UseImperativeParent /> */}
      {/* <UseContext /> */}
      {/* <UseMemoHook /> */}
      <UseCallback />
    </div>
  );
}

export default App;
