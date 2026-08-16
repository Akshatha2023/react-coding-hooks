import React, { useReducer } from "react";
const initialCount = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialCount;
    default:
      return state;
  }
};
const CounterReducerOne = () => {
  const [count, dispatch] = useReducer(reducer, initialCount);
  return (
    <>
      <p>Count {count}</p>
      <button type="button" onClick={() => dispatch("increment")}>
        Increment
      </button>
      <button type="button" onClick={() => dispatch("decrement")}>
        Decrement
      </button>
      <button type="button" onClick={() => dispatch("reset")}>
        Reset
      </button>
    </>
  );
};
export default CounterReducerOne;
// This is first example for useReducer which demonstrates the simple execution of useReducer
