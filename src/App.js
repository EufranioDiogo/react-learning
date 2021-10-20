import './App.css';
import React from 'react';
import ComponentC from './Learning Hooks/Lesson 17/ComponentC';

export const UserContext = React.createContext();

function App() {
  return (
    <div className="App">
      <UserContext.Provider value={{ id: 2, name: 'Eufranio Lukeny Manuel Matias Diogo' }}>
        <ComponentC></ComponentC>
      </UserContext.Provider>

    </div>
  );
}
/*

*/
export default App;
