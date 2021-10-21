import './App.css';
import React, { useReducer } from 'react';
import DataFetching from './Learning Hooks/Lesson 24/DataFetching';


export const UserContext = React.createContext();
export const CounterContext = React.createContext();


const initialState = {
  counter1: 0,
  counter2: 0
}

const reducer = (currentState, action) => {
  switch (action.type) {
    case 'increment1':
      return {
        ...currentState,
        counter1: currentState.counter1 + action.value
      }
    case 'decrement1':
      return {
        ...currentState,
        counter1: currentState.counter1 - action.value
      }
    case 'reset1':
      return {
        ...currentState,
        counter1: currentState.counter1 + action.value
      }

    case 'increment2':
      return {
        ...currentState,
        counter2: currentState.counter2 + action.value
      }
    case 'decrement2':
      return {
        ...currentState,
        counter2: currentState.counter2 - action.value
      }
    case 'reset2':
      return {
        ...currentState,
        counter2: currentState.counter2 + action.value
      }

    default:
      break;
  }
}

function App() {
  return (
    <div className="App">
      <DataFetching>

      </DataFetching>


    </div>
  );
}
/*

*/
export default App;
