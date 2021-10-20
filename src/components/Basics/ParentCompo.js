import React, { Component } from 'react'
import PureCompo from './PureComp';
import RegularComponent from './RegularComponent';
import FunctionCompo from './FunctionCompo';
import MemoCompo from './MemoCompo';

export class ParentCompo extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: 'Eufránio'
    }
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: 'Eufránio'
      })
    }, 2000);
  }

  render() {
    console.log('*********Parent Component*********');
    return (
      <div>
        Parent Component
        <MemoCompo name={this.state.name}></MemoCompo>

        {
          /*
          <FunctionCompo name={this.state.name}></FunctionCompo>
                <RegularComponent name={this.state.name}></RegularComponent>
                <PureCompo name={this.state.name}></PureCompo>
          */
        }

      </div>
    )
  }
}
export default ParentCompo
