import { useState } from "react";
import "./App.css";
import NormalCounter from "./components/useState/NormalCounter";
import CounterTwo from "./components/useState/CounterTwo";
import CounterObject from "./components/useState/CounterObject";
import CounterArray from "./components/useState/CounterArray";
import CounterOne from "./components/useEffect/CounterOne";
import CounterTwoUseEffect from "./components/useEffect/CounterTwoUseEffect";
import CounterThreeUseEffect from "./components/useEffect/CounterThreeUseEffect";

function App() {
  return (
    <>
      {/* <NormalCounter /> */}
      {/* <CounterTwo /> */}
      {/* <CounterObject /> */}
      {/* <CounterArray /> */}
      {/* <CounterOne /> */}
      {/* <CounterTwoUseEffect /> */}
      <CounterThreeUseEffect />
    </>
  );
}

export default App;
