import "./App.css";
import React, { useReducer } from "react";
import Posts from "./Learning Redux/Posts";
import TitleModifier from "./Learning Hooks/Lesson 7/TitleModifier";
import HookMouse from "./Learning Hooks/Lesson 9/HookMouse";
import HiderButton from "./Learning Hooks/Lesson 10/HiderButton";
import DataFetching from "./Learning Hooks/Lesson 33/UserForm";
import DataFetching1 from "./Learning Hooks/Lesson 32/CounterTwo";

const initialState = {
  counter1: 0,
  counter2: 0,
};
const reducer = (currentState, action) => {
  switch (action.type) {
    case "increment1":
      return {
        ...currentState,
        counter1: currentState.counter1 + action.value,
      };
    case "decrement1":
      return {
        ...currentState,
        counter1: currentState.counter1 + action.value,
      };
    case "increment2":
      return {
        ...currentState,
        counter2: currentState.counter2 + action.value,
      };
    case "decrement2":
      return {
        ...currentState,
        counter2: currentState.counter2 + action.value,
      };
    case "reset1":
      return { ...currentState, counter1: 0 };
    case "reset2":
      return { ...currentState, counter2: 0 };
    default:
      return { ...currentState };
  }
};

export const CounterContext = React.createContext({});
function App() {
  return (
    <div className="App">
      <DataFetching />
    </div>
  );
}
/*

*/
export default App;
