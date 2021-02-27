import { useDispatch } from 'react-redux'
import { increment, decrement } from './../redux/actions/counter'
import { getUser } from './../redux/actions/user'

const Button = () => {
  const dispatch = useDispatch()

  const incrementCount = (number) => {
    dispatch(increment(number))
  }

  const decrementCount = () => {
    dispatch(decrement())
  }

  const getData = () => {
    dispatch(
      getUser(3)
    )
  }

  return (
    <>
      <button onClick={() => incrementCount(1)}>increment 1</button>
      <button onClick={() => incrementCount(2)}>Increment 2</button>
      <button onClick={() => incrementCount(10)}>Increment 10</button>

      <button onClick={decrementCount}>decrement</button>

      <hr />

      <button onClick={getData}>Get data</button>
    </>
  )
}

export default Button
