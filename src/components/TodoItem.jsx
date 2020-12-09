import { Button } from "antd";
import { DeleteOutlined, CheckOutlined } from "@ant-design/icons";
import React, { Component } from "react";
import { deleteTodo, updateTodo } from "../api/todo";
import "../css/TodoItemButton.css";

export default class TodoItem extends Component {
  deleteTodo = (todoId) => {
    deleteTodo(todoId).then(() => this.props.deleteTodo(todoId));
  };

  toggleTodo = (todo) => {
    console.log("toggled");
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
      <div style={{ width: "100%" }}>
        <label style={{ float: "left" }}>{this.renderTodoText(todo)}</label>

        <Button
          className="button-to-right"
          shape="circle"
          danger
          onClick={() => this.deleteTodo(todo.id)}
        >
          <DeleteOutlined />
        </Button>

        <Button
          className="button-to-right"
          shape="circle"
          type={todo.done ? "primary" : "dashed"}
          onClick={() => this.toggleTodo(todo)}
        >
          <CheckOutlined />
        </Button>
      </div>
    );
  }
}
