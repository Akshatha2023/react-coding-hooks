import React, { useState } from "react";

const NormalCounter = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click Me{count}
      </button>
    </>
  );
};
export default NormalCounter;
