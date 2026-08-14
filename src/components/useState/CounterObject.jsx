import { useState } from "react";

const CounterObject = () => {
  const [name, setName] = useState({ firstName: "", lastName: "" });
  return (
    <>
      <input
        value={name.firstName}
        onChange={(e) => setName({ ...name, firstName: e.target.value })}
      />
      <input
        value={name.lastName}
        onChange={(e) => setName({ ...name, lastName: e.target.value })}
      />
      <h2>First name is :{name.firstName}</h2>
      <h2>Last name is :{name.lastName}</h2>
      <h2>{JSON.stringify(name)}</h2>
    </>
  );
};

export default CounterObject;

// problem: if i type firstname lastname getting dissapeared ,if i type lastname firstname will dissapeared,coz usestate automatically doesnot merge and update object ,so we should spread operator
