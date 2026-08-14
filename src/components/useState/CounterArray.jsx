import { useState } from "react";

const CounterArray = () => {
  const [items, setItems] = useState([]);
  const addItems = () => {
    setItems([
      ...items,
      {
        id: items.length,
        value: Math.floor(Math.random() * 10),
      },
    ]);
  };
  return (
    <>
      <button onClick={addItems}>Add a number</button>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.value}</li>
        ))}
      </ul>
    </>
  );
};
export default CounterArray;

// we can also write it as below
// if we use {} in arrow ,we shld explicitly add return keyword ,otherwise we can add ()

//  <ul>
//         {items.map((item) => {
//           return <li key={item.id}>{item.value}</li>;
//         })}
//       </ul>
