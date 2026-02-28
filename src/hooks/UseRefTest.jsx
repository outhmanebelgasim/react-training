import React, { useEffect, useRef } from "react";

function UseRefTest() {
  const refInput = useRef(0);
  //   const [number, setNumber] = useState(0);

  useEffect(() => console.log("Document was rendred!"));

  function handleInput() {
    // setNumber((n) => n + 1);
    refInput.current++;
    console.log(refInput.current);
  }

  return (
    <div>
      <button onClick={handleInput}>Click</button>
    </div>
  );
}

export default UseRefTest;
