import React, { Component } from "react";

export default class TodoItem extends Component {
  deleteTodo = (todoId) => {
    this.props.deleteTodo(todoId);
  };

  toggleTodo = (todoId) => {
    this.props.toggleTodo(todoId);
  };

  rednerTodoText = (todo) => {
    if (todo.done) {
      return <s>{todo.text}</s>;
    }
    return todo.text;
  };

  render() {
    const todo = this.props.todo;

    return (
      <div>
        <label onClick={() => this.toggleTodo(todo.id)}>
          {this.rednerTodoText(todo)}
        </label>
        <button onClick={() => this.deleteTodo(todo.id)}>x</button>
      </div>
    );
  }
}
