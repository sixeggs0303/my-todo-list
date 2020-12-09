import { DELETE, SUBMIT, TOGGLE } from './actionTypes'

export const submitTodo = (todoText) => {
  return {
    type: SUBMIT,
    payload: todoText
  }
}

export const deleteTodo = (todoId) => {
  return {
    type: DELETE,
    payload: todoId
  }
}

export const toggleTodo = (todoId) => {
  return {
    type: TOGGLE,
    payload: todoId
  }
}