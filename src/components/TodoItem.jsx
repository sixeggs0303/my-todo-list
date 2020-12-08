import React, { Component } from "react";

export default class TodoItem extends Component {
  deleteTodo = (todoId) => {
    this.props.deleteTodo(todoId);
  };

  render() {
    const todo = this.props.todo;

    return (
      <div>
        <label>{todo.text}</label>
        <button onClick={() => this.deleteTodo(todo.id)}>x</button>
      </div>
    );
  }
}
