import './App.css';
import React from 'react';
import Counter from './Learning Hooks/Lesson 20/Counter';

export const UserContext = React.createContext();

function App() {
  return (
    <div className="App">
      <Counter></Counter>

    </div>
  );
}
/*

*/
export default App;
