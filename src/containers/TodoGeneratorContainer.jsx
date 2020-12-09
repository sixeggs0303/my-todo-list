import { connect } from "react-redux";
import { submitTodo } from "../actions";
import TodoGenerator from "../components/TodoGenerator";

const mapDispatchToProps = (dispatch) => ({
  submitTodo: (todoText) => dispatch(submitTodo(todoText)),
});

const TodoGeneratorContainer = connect(null, mapDispatchToProps)(TodoGenerator);

export default TodoGeneratorContainer;
