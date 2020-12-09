import React, { Component } from "react";
import { deleteTodo, updateTodo } from "../api/todo";

export default class TodoItem extends Component {
  deleteTodo = (todoId) => {
    deleteTodo(todoId).then(() => this.props.deleteTodo(todoId));
  };

  toggleTodo = (todo) => {
    updateTodo(todo).then(() => this.props.toggleTodo(todo.id));
  };

  renderTodoText = (todo) => {
    if (todo.done) {
      return <s>{todo.text}</s>;
    }
    return todo.text;
  };

  render() {
    const todo = this.props.todo;

    return (
      <div>
        <label onClick={() => this.toggleTodo(todo)}>
          {this.renderTodoText(todo)}
        </label>
        <button onClick={() => this.deleteTodo(todo.id)}>x</button>
      </div>
    );
  }
}
