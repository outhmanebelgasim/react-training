import React from "react";

function Logical({ name, age }) {
  return (
    <h1>
      Hello {name || "Guest"}, Your age is {age || 0}
    </h1>
  );
}

export default Logical;
