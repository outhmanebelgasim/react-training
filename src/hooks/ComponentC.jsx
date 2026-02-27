import React, { useContext } from "react";
import ComponentD from "./ComponentD";
import { UserContext } from "./ComponentA";

function ComponentC() {
  const user = useContext(UserContext);
  return (
    <div className="box">
      <h1>ComponentC</h1>
      <p>{`Bye ${user}`}</p>
      <ComponentD />
    </div>
  );
}

export default ComponentC;
