import { INCREMENT, DECREMENT } from './../actionType'

export const increment = number => {
  return {
    type: INCREMENT,
    number
  }
}

export const decrement = payload => {
  return {
    type: DECREMENT,
    payload
  }
}
