import React, { Component } from 'react'

class Counter extends Component {

  levelUp = () => {
    this.props.edit(this.props.firstNumber + 5)
  }

  getLow = () => {
    this.props.edit(this.props.firstNumber - 1)
  }

  render() {
    return (
      <>
        <p>total tại counter: {this.props.firstNumber}</p>
        <button onClick={this.levelUp}>tăng lên</button>
        <button onClick={this.getLow}>giảm xuống</button>
      </>
    )
  }
}

export default Counter
