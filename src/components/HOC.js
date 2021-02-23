import React, { Component } from 'react'
import Input, { InputCard } from './Input'

class HOC extends Component {
  render() {
    return (
      <div>
        <Input type="text" label="Nhập tên" max={10} />
        <InputCard type="number" label="Nhập tuổi" max={20} />
      </div>
    )
  }
}

export default HOC
