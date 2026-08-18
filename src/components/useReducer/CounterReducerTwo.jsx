import { useReducer } from "react";
const initialCount = {
  firstCounter: 1,
  secondCounter: 5,
};
const reducer = (action, state) => {
  switch (action.type) {
    case "increment":
      state.firstCounter + value;
    case "decrement":
      state.firstCounter - 1;
    case "reset":
      state.firstCounter;
    case "increment":
      state.secondCounter + 1;
    case "decrement":
      state.secondCounter - 1;
  }
};
const CounterReducerTwo = () => {
  const [count, dispatch] = useReducer(useReducer, initialState);
  return;
  <>
    <p>Count {count}</p>
    <button onClick={() => dispatch({ type: "increment", value: "1" })}>
      INCREMENT
    </button>
    <button onClick={() => dispatch({ type: "decrement", value: "1" })}>
      DECREMENT
    </button>
    <button
      onClick={() => dispatch({ type: "reset", value: state.firstCounter })}
    >
      RESET
    </button>
    <button onClick={() => dispatch({ type: "increment", value: "1" })}>
      INCREMENT SECOND Counter
    </button>
    <button onClick={() => dispatch({ type: "decrement", value: "1" })}>
      DECREMENT SECOND Counter
    </button>
  </>;
};
export default CounterReducerTwo;
