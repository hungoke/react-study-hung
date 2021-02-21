import React, { Component } from 'react'
import './../../style/Task.scss'
import PropTypes from 'prop-types'
class Task extends Component {
  deleteTask = () => {
    this.props.deleteTask(this.props.task)
  }

  onChange = () => {
    this.props.changeStatus(this.props.task)
  }

  render() {
    const { task } = this.props
    return (
      <div>
        <label className={task.status === 'Completed' ? 'line-through' : ''}>
          <input type="checkbox" checked={task.status === 'Completed'} onChange={this.onChange} />
          {task.name}
        </label>

        <button onClick={this.deleteTask}>X</button>
      </div>
    )
  }
}

Task.propTypes = {
  task: PropTypes.object,
  deleteTask: PropTypes.func
}

export default Task
