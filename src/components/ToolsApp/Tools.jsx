import React, { Component } from 'react'
import ClearCompleted from './ClearCompleted'
import Statistics from './Statistics'
import Status from './Status'

class Tools extends Component {
  clearCompleted = () => {
    this.props.clearCompleted()
  }

  changeCurrentStatus = (status) => {
    this.props.changeCurrentStatus(status)
  }

  render() {
    const { statusList } = this.props
    return (
      <div>
        <Status
          key={0}
          status={{id: 0, name: 'All Tasks'}}
          changeCurrentStatus={this.changeCurrentStatus}
        />

        {
          statusList.map(status => (
            <Status
              key={status.id}
              status={status}
              changeCurrentStatus={this.changeCurrentStatus}
            />
          ))
        }

        <ClearCompleted clearCompleted={this.clearCompleted} />
        <Statistics
          countTasks={this.props.countTasks}
          countTasksCompleted={this.props.countTasksCompleted}
        />
      </div>
    )
  }
}

export default Tools
