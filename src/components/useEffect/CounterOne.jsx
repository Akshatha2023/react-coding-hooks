import React, { useState, useEffect } from "react";
const CounterOne = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `count value is ${count} times`;
  });

  return (
    <>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click me {count}
      </button>
    </>
  );
};
export default CounterOne;

// This is just the document.title will get update on each and every render - useEffect is running on each and every time component renders
