import React, { Component } from "react";
import { getTodoList } from "../api/todo";
import TodoItemContainer from "../containers/TodoItemContainer";

export default class TodoGroup extends Component {
  initTodoArray = (todoArray) => {
    return todoArray;
  };

  componentDidMount() {
    getTodoList().then((response) => {
      console.log(response.data);
      this.props.initTodos(response.data);
    });
  }

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
