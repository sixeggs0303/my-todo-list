import { combineReducers } from "redux"
import { SUBMIT, DELETE, TOGGLE } from "./actionTypes"
import { v4 as uuidv4 } from "uuid";


const todoArray = (state = [], action) => {
    if (action.type === SUBMIT) {
        const todo = {
            id: uuidv4(),
            text: action.payload,
            done: false,
        }
        return state.concat(todo)
    }
    if (action.type === DELETE) {
        return state.filter(todo => todo.id !== action.payload)
    }
    if (action.type === TOGGLE) {
        return state.map(todo => {
            if (todo.id === action.payload) {
                return {
                    ...todo,
                    done: !todo.done
                }
            }
            return todo
        })
    }
    return state
}

export default combineReducers(
    {
        todoArray
    }
)