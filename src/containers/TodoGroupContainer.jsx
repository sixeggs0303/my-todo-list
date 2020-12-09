import { connect } from "react-redux";
import { initTodos } from "../actions";
import TodoGroup from "../components/TodoGroup";

const mapStateToProps = (state) => ({
  todoArray: state.todoArray,
});

const mapDispatchToProps = (dispatch) => ({
  initTodos: (todos) => dispatch(initTodos(todos)),
});

const TodoGroupContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoGroup);

export default TodoGroupContainer;
