import { DELETE, SUBMIT } from './actionTypes'

export const submitTodo = (todo) => {
  return {
    type: SUBMIT,
    payload: todo
  }
}

export const deleteTodo = (todoId) => {
  return {
    type: DELETE,
    payload: todoId
  }
}