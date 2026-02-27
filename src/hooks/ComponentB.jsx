import React, { useContext } from "react";
import { UserContext } from "./ComponentA";
import ComponentC from "./ComponentC";

function ComponentB() {
  const user = useContext(UserContext);
  return (
    <div className="box">
      <h1>ComponentB</h1>
      <p>{`bye ${user}`}</p>
      <ComponentC />
    </div>
  );
}

export default ComponentB;
