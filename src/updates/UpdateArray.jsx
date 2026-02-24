import React, { useState } from "react";

function UpdateArray() {
  const [fruits, setFruits] = useState(["Apple", "Banana", "Orange"]);

  function addFruits() {
    const newFruit = document.getElementById("addFruit").value;
    document.getElementById("addFruit").value = "";
    setFruits((f) => [...f, newFruit]);
  }

  function removeFruit(index) {
    setFruits(fruits.filter((element, i) => i !== index));
  }

  return (
    <div>
      <h1>List Of Fruits</h1>
      <ol>
        {fruits.map((fruit, idx) => (
          <li key={idx} onClick={() => removeFruit(idx)}>
            {fruit}
          </li>
        ))}
      </ol>
      <input type="text" id="addFruit" placeholder="enter fruit name" />
      <button onClick={addFruits}>add fruit</button>
    </div>
  );
}

export default UpdateArray;
