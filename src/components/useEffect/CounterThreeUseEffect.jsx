import { useState, useEffect } from "react";
const CounterThreeUseEffect = () => {
  const [count, setCount] = useState(1);
  const [name, setName] = useState("");
  useEffect(() => {
    console.log(`count value is ${count} `);
  }, []);
  return (
    <>
      <input
        type="text"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
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
export default CounterThreeUseEffect;

// when i given [] as dependency ,it will log- count value is 1  only once when component rendered first time after that how many times it renders it wont logs
