import React, { Component } from 'react'
import Counter from './components/Counter'
import ShowCounter from './components/ShowCounter'
class App extends Component {

  state = {
    number: 0
  }

  editNumber = (value) => {
    this.setState({
      number: value
    })
  }

  render() {
    return (
      <>
        <p>total tại App: {this.state.number}</p>
        <Counter firstNumber={this.state.number} edit={this.editNumber}/>
        <ShowCounter ShowCounter={this.state.number}/>
      </>
    )
  }
}

export default App
