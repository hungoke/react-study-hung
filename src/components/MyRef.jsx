import React from 'react'

class MyRef extends React.Component {
  changeColor = () => {
    const h2 = document.querySelector('h2')
    console.log(h2.style.background)
    if (!h2.style.background || h2.style.background === 'green') {
      h2.style.background = 'red'
    } else {
      h2.style.background = 'green'
    }

  }

  render() {
    return (
      <>
        <h2>Đây là thẻ h2</h2>
        <button onClick={this.changeColor}>Đổi màu</button>
      </>
    )
  }
}

export default MyRef
