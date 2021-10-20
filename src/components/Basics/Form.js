import React, { Component } from 'react'

export default class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      comments: '',
      topic: 'react'
    }
  }

  onChangeUsername(e) {
    this.setState({username: e.target.value})
  }
  onChangeComments(e) {
    this.setState({comments: e.target.value})
  }
  onChangeTopic(e) {
    this.setState({topic: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault();
    alert(`${this.state.username}, ${this.state.comments}, ${this.state.topic}`)
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="username">Username</label>
          <input type="text" value={this.state.username} name="username" id="username" onChange={(e) => {
            this.onChangeUsername(e)
          }} />

          <h1>Name Typed: {this.state.username} </h1>
        </div>

        <div>
          <label htmlFor="comments">Comments</label>
          <textarea value={this.state.comments} name="comments" id="comments" onChange={(e) => {
            this.onChangeComments(e)
          }} ></textarea>
        </div>

        <div>
          <label htmlFor="Topics">Topics</label>
          <select value={this.state.topic} name="comments" id="comments" onChange={(e) => {
            this.onChangeTopic(e)
          }} >
            <option value="react">React</option>
            <option value="angular">Angular</option>
            <option value="vue">Vue</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    )
  }
}
