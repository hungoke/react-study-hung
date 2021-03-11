import axios from 'axios'
import React, { useState } from 'react'

const Login = () => {
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')

  const handleOnChangePassword = event => {
    setPassword(event.target.value)
  }

  const handleOnChangeUserName = event => {
    setUserName(event.target.value)
  }

  const submit = () => {
    const id = userName

    if (!id) {
      return
    }

    axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(response => {
        console.log('-----response', response)
        const user = response.data
      })
      .catch(error => {
        alert('hãy nhập lại')
      })
  }

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <label htmlFor="">User Name</label>
            <input
              type="text"
              className="form-control"
              value={userName}
              onChange={handleOnChangeUserName}
            />
          </div>

          <div className="col-6">
            <label htmlFor="">Password</label>
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={handleOnChangePassword}
            />
          </div>

          <div className="col-6 mt-2">
            <button onClick={submit} className="btn btn-success">Login</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
