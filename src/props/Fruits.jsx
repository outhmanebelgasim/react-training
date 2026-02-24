import React from "react";

function Fruits() {
  const fruits = ["banana", "apple", "Cherry"];

  return (
    <div>
      <h1>Fruits list</h1>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
}

export default Fruits;
