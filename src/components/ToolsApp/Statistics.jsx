import React, { Component} from 'react'

class Statistics extends Component {
  render() {
    return (
      <>
        <label>{this.props.countTasksCompleted}/{this.props.countTasks} Completed</label>
      </>
    )
  }
}

export default Statistics
