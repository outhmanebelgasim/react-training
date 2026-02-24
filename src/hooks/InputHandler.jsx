import React, { useState } from "react";

function InputHandler() {
  const [input, setInput] = useState("");
  const changeContent = (event) => setInput(event.target.value);

  return (
    <div>
      <h2>Input Handler</h2>
      <input
        type="text"
        value={input}
        onChange={changeContent}
        placeholder="Enter value"
      />
      <p>You enter: {input}</p>
    </div>
  );
}

export default InputHandler;
