import React, { Component } from 'react'

class Card extends Component {
  render() {
    return (
      <div style={{ border: '1px solid green', padding: '10px' }}>
        {this.props.children}
      </div>
    )
  }
}

export default Card
