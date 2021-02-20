import React, { Component} from 'react'
import Task from './Task'

class ListTasks extends Component {
  get filterData() {
    const { tasksListTask, tags, currentTag } = this.props
    const tag = tags.find(tag => tag.id === this.props.currentTag)

    if (currentTag === 0) {
      return tasksListTask
    }

    return tasksListTask.filter(task => task.tag === tag.name)
  }

  delete = (task) => {
    this.props.delete(task)
  }

  render() {
    return (
      <div>
        {
          this.filterData.map((task, index) => (
            <Task
              key={index}
              task={task}
              delete={this.delete}
            />
          ))
        }
      </div>
    )
  }
}

export default ListTasks
