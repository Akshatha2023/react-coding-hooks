import { useState } from "react";
import "./App.css";
import NormalCounter from "./components/useState/NormalCounter";
import CounterTwo from "./components/useState/CounterTwo";
import CounterObject from "./components/useState/CounterObject";
import CounterArray from "./components/useState/CounterArray";

function App() {
  return (
    <>
      {/* <NormalCounter /> */}
      {/* <CounterTwo /> */}
      {/* <CounterObject /> */}
      <CounterArray />
    </>
  );
}

export default App;
