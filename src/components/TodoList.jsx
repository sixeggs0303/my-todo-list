import React, { Component } from "react";
import TodoGroupContainer from "../containers/TodoGroupContainer";
import TodoGeneratorContainer from "../containers/TodoGeneratorContainer";

export default class TodoList extends Component {
  render() {
    return (
      <div>
        <h4>Todo List</h4>
        <TodoGroupContainer />
        <TodoGeneratorContainer />
      </div>
    );
  }
}
