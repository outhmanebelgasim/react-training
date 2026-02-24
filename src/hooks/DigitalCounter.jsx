import React, { useState } from "react";
import "../styles/DigitalCounter.css";

function DigitalCounter() {
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div className="counter-container">
      <div className="counter-card">
        <h2 className="header">{count}</h2>
        <div className="button-group">
          <button className="increment" onClick={increment}>
            Increment
          </button>
          <button className="decrement" onClick={decrement}>
            Decrement
          </button>
          <button className="reset" onClick={reset}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default DigitalCounter;
