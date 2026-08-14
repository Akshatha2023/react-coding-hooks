import { useState, useEffect } from "react";
const CounterTwoUseEffect = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    console.log(`clicked ${count} times `);
  }, [count]);
  return (
    <>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Clicked {count} times
      </button>
    </>
  );
};
export default CounterTwoUseEffect;

// in above console.log was running on each and every execution ,when along with button click ,it was even running when i was typing in input field, so adding dependency array in useeffect avoid this,it executes only when count value changes
