import React, { Component } from "react";
import TodoItemContainer from "../containers/TodoItemContainer";

export default class TodoGroup extends Component {
  initTodoArray = (todoArray) => {
    return todoArray;
  };

  render() {
    const todoArray = this.props.todoArray;

    return (
      <div>
        {todoArray.map((todo) => (
          <TodoItemContainer key={todo.id} todo={todo} />
        ))}
      </div>
    );
  }
}
