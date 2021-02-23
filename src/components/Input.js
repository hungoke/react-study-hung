import React, { Component } from "react"
import Card from './Card'

class Input extends Component {
  state = {
    value: "",
    errorMessage: "",
  };

  validate = (value) => {
    this.setState({
      errorMessage: "",
    })

    const { type, max } = this.props

    if (type === "text" && value.length > max) {
      this.setState({
        errorMessage: `Name tối đa là ${max} ký tự`,
      })
    }

    if (type === "number" && value > max) {
      this.setState({
        errorMessage: `Tuổi tối đa là ${max}`,
      })
    }
  };

  onChange = (event) => {
    const { value } = event.target
    this.validate(value)

    this.setState({
      value: value,
    })
  };

  render() {
    const { errorMessage } = this.state
    return (
      <div>
        <label>{this.props.label}</label>
        <input onChange={this.onChange} type={this.props.type} />

        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      </div>
    )
  }
}

export const InputCardHOC = MyComponent => class _InputCard extends React.Component {
  render() {
    return (
      <Card>
        <MyComponent {...this.props} />
        <MyComponent {...this.props} />
      </Card>
    )
  }
}

export default Input
export const InputCard = InputCardHOC(Input)
