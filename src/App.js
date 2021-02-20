import React, { Component} from 'react'
import ListTasks from './components/ListTasks'
import ListTag from './components/ListTag'
import { tasks } from './constant/tasks'
import AddNewTask from './components/AddNewTask'
class App extends Component {
  state = {
    tasks,
    tags: [
      { id: 1, name: 'home' },
      { id: 2, name: 'work' },
      { id: 3, name: 'school' }
    ],
    currentTag: 0,
  }

  delete = (task) => {
    tasks.splice(tasks.indexOf(task), 1)
    this.setState({
      tasks: [...tasks]
    })
  }

  changeCurrentTag = (tag) => {
    this.setState({
      currentTag: tag.id
    })
  }

  getCurrentTag = () => {
    const { currentTag } = this.state
    if (currentTag === 0) {
      return 'All'
    }

    const tag = this.state.tags.find(tag => tag.id === currentTag)

    return tag.name
  }

  addNewTask = (task) => {
    this.setState({
      tasks: [task, ...tasks]
    })
  }

  render() {
    return (
      <div>
        <AddNewTask
          currentTag={this.getCurrentTag()}
          addNewTask={this.addNewTask}
          tasks={this.state.tasks}
        />

        <ListTag
          currentTag={this.state.currentTag}
          tags={this.state.tags}
          changeCurrentTag={this.changeCurrentTag}
        />

        <ListTasks
          currentTag={this.state.currentTag}
          tasksListTask={this.state.tasks}
          tags={this.state.tags}
          delete={this.delete}
        />
      </div>
    )
  }
}

export default App
