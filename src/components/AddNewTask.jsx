import React, { Component } from 'react'

class AddNewTask extends Component {
  state = {
    name: '',
    tag: this.props.currentTag
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

  addTask = (event) => {
    event.preventDefault()
    console.log(event.target.value)
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
      checked: false,
      complete: false
    }

    this.props.addNewTask(task)

    this.setState({
      name: ''
    })
  }

  render() {
    return (
      <div>
        <input type="text" value={this.state.name} onChange={this.onChange} />
        <button onClick={this.addTask}>+</button>
      </div>
    )
  }
}

export default AddNewTask
