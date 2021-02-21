import React, { Component } from 'react'

class Status extends Component {
  onClick = () => {
    this.props.changeCurrentStatus(this.props.status)
  }
  render() {
    const { status } = this.props
    return (
      <button onClick={this.onClick}>
        {status.name}
      </button>
    )
  }
}

export default Status
