import React from "react";

const Hello = () => {
  //return (
  //  <h1>
  //    Hello Dude
  //  </h1>
  //)

  return React.createElement('div', {id: 1, className: 'main-container'}, React.createElement('h1', null, 'Hello Dude'));
}

export default Hello;