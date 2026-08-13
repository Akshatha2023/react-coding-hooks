import { useState } from "react";
const CounterTwo = () => {
  let initialCount = 0;
  const [count, setCount] = useState(initialCount);
  const incrementFive = () => {
    for (let i = 0; i < 5; i++) {
      setCount((prev) => prev + 1);
    }
  };

  return (
    <>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount(initialCount);
        }}
      >
        RESET
      </button>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={incrementFive}>Increment Five</button>
    </>
  );
};
export default CounterTwo;
