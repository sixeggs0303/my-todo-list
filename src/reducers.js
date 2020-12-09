import { combineReducers } from "redux";
import { SUBMIT, DELETE, TOGGLE, INIT_TODOS, UPDATE } from "./actionTypes";

const todoArray = (state = [], action) => {
  if (action.type === SUBMIT) {
    return state.concat(action.payload);
  }
  if (action.type === DELETE) {
    return state.filter((todo) => todo.id !== action.payload);
  }
  if (action.type === TOGGLE) {
    return state.map((todo) => {
      if (todo.id === action.payload) {
        return { ...todo, done: !todo.done };
      }
      return todo;
    });
  }
  if (action.type === INIT_TODOS) {
    return action.payload;
  }
  if (action.type === UPDATE) {
    return state.map((todo) => {
      if (todo.id === action.payload.id) {
        return action.payload;
      }
      return todo;
    });
  }
  return state;
};

export default combineReducers({
  todoArray,
});
