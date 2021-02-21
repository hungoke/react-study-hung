import React, { Component} from 'react'
import PropTypes from 'prop-types'
import Task from './Task'
import Tools from '../ToolsApp/Tools'

class TasksList extends Component {
  get filterData() {
    const { tasks, tags, currentTag } = this.props
    if (currentTag === 0) {
      return tasks
    }

    const tag = tags.find(tag => tag.id === currentTag)
    return tasks.filter(task => task.tag === tag.name)
  }

  get filterDataStatus() {
    const { statusList, currentStatus } = this.props
    if (currentStatus === 0) {
      return this.filterData
    }

    const statusOfTask = statusList.find(status => status.id === currentStatus)
    return this.filterData.filter(task => task.status === statusOfTask.name)
  }

  deleteTask = task => {
    this.props.deleteTask(task)
  }

  changeStatus = task => {
    this.props.changeStatus(task)
  }

  changeCurrentStatus = status => {
    this.props.changeCurrentStatus(status)
  }

  clearCompleted = () => {
    this.props.clearCompleted(this.filterDataStatus)
  }

  countTasksCompleted = () => {
    let count = 0
    this.filterData.forEach(task => {
      if (task.status === 'Completed') {
        count++
      }
    })

    return count
  }

  render() {
    return (
      <div>
        <div>
          {
            this.filterDataStatus.map((task, index) => (
              <Task
                key={index}
                task={task}
                deleteTask={this.deleteTask}
                changeStatus={this.changeStatus}
              />
            ))
          }
        </div>

        <div>
          <Tools
            statusList={this.props.statusList}
            changeCurrentStatus={this.changeCurrentStatus}
            clearCompleted={this.clearCompleted}
            countTasks={this.filterData.length}
            countTasksCompleted={this.countTasksCompleted()}
          />
        </div>
      </div>
    )
  }
}

TasksList.propTypes = {
  currentTag: PropTypes.number,
  tasks: PropTypes.array,
  tags: PropTypes.array,
  deleteTask: PropTypes.func
}

export default TasksList
