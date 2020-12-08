import React, { Component } from "react";
import TodoItemContainer from "../containers/TodoItemContainer";
import { v4 as uuidv4 } from "uuid";

export default class TodoGroup extends Component {
  initTodoArray = (todoArray) => {
    return todoArray;
  };

  render() {
    const todoArray = this.props.todoArray;

    return (
      <div>
        {todoArray.map((todo) => (
          <TodoItemContainer key={uuidv4()} todo={todo} />
        ))}
      </div>
    );
  }
}
