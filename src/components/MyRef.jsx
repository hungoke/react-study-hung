import React, { Component } from 'react'
import Counter from './Counter'

class MyRef extends Component {
  myH2 = React.createRef()
  myCounter = React.createRef()

  changeColor = () => {
    const h2 = this.myH2.current

    if (!h2.style.background || h2.style.background === 'green') {
      h2.style.background = 'red'
    } else {
      h2.style.background = "greecxn"
    }
  }

  componentDidMount() {
    console.log('--my counter', this.myCounter.current)
    this.changeColor()
  }

  increment = () => {
    this.myCounter.current.increment()
  }

  render() {
    return (
      <div>
        <h2 ref={this.myH2}>Đây là h2</h2>
        <button onClick={this.changeColor}>đổi màu</button>

        <Counter ref={this.myCounter} />
        <button onClick={this.increment}>increment from my ref</button>
      </div>
    )
  }
}

export default MyRef
