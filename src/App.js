import React, { Component} from 'react'
import TasksList from './components/ShowTasksList/TasksList'
import TagsList from './components/Tags/TagsList'
import { tasks } from './constant/tasks'
import AddNewTask from './components/AddNewRecord/AddNewTask'
class App extends Component {
  state = {
    tasks,
    tags: [
      { id: 1, name: 'home' },
      { id: 2, name: 'work' },
      { id: 3, name: 'school' }
    ],
    currentTag: 0,
    statusList: [
      { id: 1, name: 'Active' },
      { id: 2, name: 'Completed' }
    ],
    currentStatus: 0
  }

  deleteTask = task => {
    tasks.splice(tasks.indexOf(task), 1)
    this.setState({
      tasks: [...tasks]
    })
  }

  changeCurrentTag = tag => {
    this.setState({
      currentTag: tag.id
    })
  }

  getCurrentTagName = () => {
    const { currentTag, tags } = this.state
    if (currentTag === 0) {
      return 'All'
    }

    const tagName = tags.find(tag => tag.id === currentTag).name
    return tagName
  }

  addNewTask = task => {
    tasks.unshift(task)
    this.setState({
      tasks: [...tasks]
    })
  }

  changeStatus = task => {
    tasks.forEach(item => {
      if (item.id === task.id) {
        if (task.status === 'Completed') {
          task.status = 'Active'
        } else {
          task.status = 'Completed'
        }
      }
    })

    this.setState({
      tasks: [...tasks]
    })
  }

  changeCurrentStatus = status => {
    this.setState({
      currentStatus: status.id
    })
  }

  clearCompleted = (arrayTasks) => {
    arrayTasks.forEach(task => {
      task.status = 'Active'
    })

    this.setState({
      tasks: [...tasks]
    })
  }

  render() {
    return (
      <div>
        <h1>React Todo App</h1>
        <AddNewTask
          currentTag={this.getCurrentTagName()}
          addNewTask={this.addNewTask}
          tasks={this.state.tasks}
        />

        <TagsList
          currentTag={this.state.currentTag}
          tags={this.state.tags}
          changeCurrentTag={this.changeCurrentTag}
        />

        <TasksList
          currentTag={this.state.currentTag}
          tasks={this.state.tasks}
          tags={this.state.tags}
          deleteTask={this.deleteTask}
          changeStatus={this.changeStatus}
          statusList={this.state.statusList}
          currentStatus={this.state.currentStatus}
          changeCurrentStatus={this.changeCurrentStatus}
          clearCompleted={this.clearCompleted}
        />
      </div>
    )
  }
}

export default App
