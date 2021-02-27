import React, { useState } from 'react'
import Form from './components/Form'

const App = () => {
  const [isShowForm, setIsShowForm] = useState(true)

  return (
    <>
      <h1>My component</h1>
      {
        isShowForm === true ?
          <Form /> : ''
      }

      <button onClick={() => { setIsShowForm(!isShowForm) }}>toggle show form</button>
    </>
  )
}

export default App
