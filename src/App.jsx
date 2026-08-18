import { useState } from "react";
import "./App.css";
import NormalCounter from "./components/useState/NormalCounter";
import CounterTwo from "./components/useState/CounterTwo";
import CounterObject from "./components/useState/CounterObject";
import CounterArray from "./components/useState/CounterArray";
import CounterOne from "./components/useEffect/CounterOne";
import CounterTwoUseEffect from "./components/useEffect/CounterTwoUseEffect";
import CounterThreeUseEffect from "./components/useEffect/CounterThreeUseEffect";
import HookMouse from "./components/useEffect/HookMouse";
import MouseContainer from "./components/useEffect/MouseContainer";
import FetchData from "./components/useEffect/FetchData";
import { createContext } from "react";
import DataPassing from "./components/useContext/DataPassing";
import CounterReducerOne from "./components/useReducer/CounterReducerOne";
import CounterReducerTwo from "./components/useReducer/CounterReducerTwo";

export const UserContext = createContext();
export const ChannelContext = createContext();
function App() {
  return (
    <>
      {/* <NormalCounter /> */}
      {/* <CounterTwo /> */}
      {/* <CounterObject /> */}
      {/* <CounterArray /> */}
      {/* <CounterOne /> */}
      {/* <CounterTwoUseEffect /> */}
      {/* <CounterThreeUseEffect /> */}
      {/* <HookMouse /> */}
      {/* <MouseContainer /> */}
      {/* <FetchData /> */}
      {/* <UserContext.Provider value={"Akshatha"}>
        <ChannelContext.Provider value={"DAILY - VLOGS"}>
          <DataPassing />
        </ChannelContext.Provider>
      </UserContext.Provider> */}
      {/* <CounterReducerOne /> */}
      <CounterReducerTwo />
    </>
  );
}

export default App;
