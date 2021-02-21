import React, { Component } from 'react'

class ClearCompleted extends Component {
  clearCompleted = () => {
    this.props.clearCompleted()
  }

  render() {
    return (
      <>
        <button onClick={this.clearCompleted}>Clear Completed</button>
      </>
    )
  }
}

export default ClearCompleted
