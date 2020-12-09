import { connect } from "react-redux";
import { deleteTodo, toggleTodo } from "../actions";
import TodoItem from "../components/TodoItem";

const mapDispatchToProps = (dispatch) => ({
  deleteTodo: (todoId) => dispatch(deleteTodo(todoId)),
  toggleTodo: (todoId) => dispatch(toggleTodo(todoId)),
});

const TodoItemContainer = connect(null, mapDispatchToProps)(TodoItem);

export default TodoItemContainer;
