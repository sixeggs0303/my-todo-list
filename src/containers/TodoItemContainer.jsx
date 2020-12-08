import { connect } from "react-redux";
import { deleteTodo } from "../actions";
import TodoItem from "../components/TodoItem";

const mapDispatchToProps = (dispatch) => ({
  deleteTodo: (todoId) => {
    dispatch(deleteTodo(todoId));
  },
});

const TodoItemContainer = connect(null, mapDispatchToProps)(TodoItem);

export default TodoItemContainer;
