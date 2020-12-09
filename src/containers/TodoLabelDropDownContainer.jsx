import { connect } from "react-redux";
import { updateStoreTodoLabels } from "../actions";
import TodoLabelDropDown from "../components/TodoLabelDropDown";

const mapDispatchToProps = (dispatch) => ({
  updateStoreTodoLabels: (todo) => dispatch(updateStoreTodoLabels(todo)),
});

const TodoLabelDropDownContainer = connect(null, mapDispatchToProps)(TodoLabelDropDown);

export default TodoLabelDropDownContainer;
