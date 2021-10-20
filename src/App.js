import './App.css';
import React from 'react';
import ComponentC from './Learning Hooks/Lesson 16/ComponentC';

export const UserContext = React.createContext();

function App() {
  return (
    <div className="App">
      <UserContext.Provider value={{ id: 1, name: 'Eufranio Diogo' }}>
        <ComponentC></ComponentC>
      </UserContext.Provider>

    </div>
  );
}
/*

*/
export default App;
