import { useState } from "react";
import "./App.css";
import NormalCounter from "./components/useState/NormalCounter";
import CounterTwo from "./components/useState/CounterTwo";
import CounterObject from "./components/useState/CounterObject";
import CounterArray from "./components/useState/CounterArray";
import CounterOne from "./components/useEffect/CounterOne";

function App() {
  return (
    <>
      {/* <NormalCounter /> */}
      {/* <CounterTwo /> */}
      {/* <CounterObject /> */}
      {/* <CounterArray /> */}
      <CounterOne />
    </>
  );
}

export default App;
