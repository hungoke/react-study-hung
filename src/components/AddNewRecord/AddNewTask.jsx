import React, { Component } from 'react'
import PropTypes from 'prop-types'
class AddNewTask extends Component {
  state = {
    id: '',
    name: '',
    tag: this.props.currentTag,
    status: 'Active'
  }

  generateID = () => {
    let maxID = 0
    const { tasks } = this.props
    tasks.forEach(task => {
      if (task.id > maxID) {
        maxID = task.id
      }
    })

    return maxID + 1
  }

  onChange = event => {
    this.setState({
      name: event.target.value
    })
  }

  addTask = event => {
    event.preventDefault()
    if (this.state.name === '') {
      alert('không được để trống')
      return
    }

    if (this.props.currentTag === 'All') {
      alert('phải chọn 1 thẻ khác All')
      return
    }

    const task = {
      id: this.generateID(),
      name: this.state.name,
      tag: this.props.currentTag,
      status: 'Active'
    }

    this.props.addNewTask(task)
    this.setState({
      id: '',
      name: '',
      tag: this.props.currentTag,
      status: 'Active'
    })
  }

  render() {
    return (
      <form onSubmit={this.addTask}>
        <input type="text" value={this.state.name} onChange={this.onChange} />
        <button onClick={this.addTask}>+</button>
      </form>
    )
  }
}

AddNewTask.propTypes = {
  currentTag: PropTypes.string,
  addNewTask: PropTypes.func,
  tasks: PropTypes.array
}

export default AddNewTask
