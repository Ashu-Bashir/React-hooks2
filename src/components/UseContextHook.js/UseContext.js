import React, { createContext, useState } from "react";
import User from "./User";
import Login from "./Login";

export const AppContext = createContext(null);
function UseContext() {
  const [username, setUsername] = useState("");
  return (
    <div>
      <h2>Use Context Hook</h2>
      <AppContext.Provider value={(username, setUsername)}>
        <Login />
        <User />
      </AppContext.Provider>
    </div>
  );
}

export default UseContext;
