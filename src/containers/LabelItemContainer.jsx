import { connect } from "react-redux";
import { updateStoreTodoLabels } from "../actions";
import LabelItem from "../components/LabelItem";

const mapDispatchToProps = (dispatch) => ({
  updateStoreTodoLabels: (todo) => dispatch(updateStoreTodoLabels(todo)),
});

const LabelItemContainer = connect(null, mapDispatchToProps)(LabelItem);

export default LabelItemContainer;
