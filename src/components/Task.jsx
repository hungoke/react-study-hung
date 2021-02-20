import React, { Component } from 'react'

class Task extends Component {
  delete = () => {
    this.props.delete(this.props.task)
  }

  render() {
    const { task } = this.props

    return (
      <div>
        <label>
          <input type="checkbox" name="" checked={task.checked === true} />
          {task.name}
        </label>
        <button onClick={this.delete}>X</button>
      </div>
    )
  }
}

export default Task
