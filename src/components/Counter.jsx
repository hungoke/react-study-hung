import React, { Component } from 'react'

class Counter extends Component {
  state = {
    count: 0
  }

  increment = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  render() {
    const { count } = this.state
    console.log("day this", this)
    return (
      <div>
        <p>{count}</p>
        <button onClick={this.increment}>increment</button>
      </div>
    )
  }
}

export default Counter
