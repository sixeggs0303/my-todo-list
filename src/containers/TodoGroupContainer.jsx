import { connect } from "react-redux";
import TodoGroup from "../components/TodoGroup";

const mapStateToProps = (state) => ({
  todoArray: state.todoArray,
});

const TodoGroupContainer = connect(mapStateToProps)(TodoGroup);

export default TodoGroupContainer;
