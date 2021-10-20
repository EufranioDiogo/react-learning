import React, { Component } from 'react'
import ChildComponent from './ChildComponent';

class ParentComponent extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      parentName: 'Parent'
    }

    this.greetParent = this.greetParent.bind(this);
  }

  greetParent(childName) {
    alert(`Hello: ${this.state.parentName}, from child: ${childName}`); 
  }

  render() {
    return (
      <div>
        <ChildComponent greetParent={this.greetParent}></ChildComponent>
      </div>
    )
  }
}

export default ParentComponent
