import React, { useState, createContext } from "react";
import ComponentB from "./ComponentB";
import "../styles/Components.css";

export const UserContext = createContext();

function ComponentA() {
  const [user] = useState("Outhmane");

  return (
    <div className="box">
      <h1>Component A</h1>
      <UserContext.Provider value={user}>
        <ComponentB user={user} />
      </UserContext.Provider>
    </div>
  );
}

export default ComponentA;
