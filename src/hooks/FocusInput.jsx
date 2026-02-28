import React, { useRef } from "react";

function FocusInput() {
  const inputRef = useRef(0);

  function handleInput() {
    inputRef.current.focus();
    inputRef.current.style.background = "red";
  }
  return (
    <div>
      <button onClick={handleInput}>Click</button>
      <input type="text" ref={inputRef} />
    </div>
  );
}

export default FocusInput;
