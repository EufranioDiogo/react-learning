import React, { Component } from 'react'

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       hasError: false
    }
  }
  
  getDerivedStateFromError(error) {
    return {
      hasError: true
    }
  }
  render() {
    if (this.state.hasError === true) {
      return <h1>Error Occurred</h1>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary
