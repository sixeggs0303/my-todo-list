import { combineReducers } from "redux"
import { SUBMIT, DELETE } from "./actionTypes"

const todoArray = (state = [], action) => {
    if (action.type === SUBMIT) {
        return state.concat(action.payload)
    }
    if (action.type === DELETE) {
        return state.filter(todo => todo.id !== action.payload)
    }
    return state
}

export default combineReducers(
    {
        todoArray
    }
)