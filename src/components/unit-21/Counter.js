import React, { Component } from 'react'

class Counter extends Component {
  state = {
    count: 0
  }

  incrementOfCounter = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  render() {
    const { count } = this.state
    return (
      <>
        <h2>Current count: {count}</h2>
        <button onClick={this.incrementOfCounter}>increment</button>
      </>
    )
  }
}

export default Counter
