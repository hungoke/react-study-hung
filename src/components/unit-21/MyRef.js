import React, { Component } from 'react'
import Counter from './Counter'

class MyRef extends Component {
  myH2 = React.createRef()
  myCounter = React.createRef()

  changeColor = () => {
    const myH2 = this.myH2.current

    if (!myH2.style.background || myH2.style.background === 'green') {
      myH2.style.background = 'red'
    } else {
      myH2.style.background = 'green'
    }
  }

  componentDidMount() {
    this.changeColor()
    console.log(this.myCounter.current)
  }

  increment = () => {
    this.myCounter.current.setState({
      count: this.myCounter.current.state.count + 7
    })
  }

  render() {
    return (
      <div>
        <h2 ref={this.myH2}>Đây là thẻ h2</h2>
        <button onClick={this.changeColor}>đổi màu</button>

        <Counter ref={this.myCounter} />

        <button onClick={this.increment}>increment from parent</button>
      </div>
    )
  }
}

export default MyRef
