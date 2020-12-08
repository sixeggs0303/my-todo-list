import React, { Component } from "react";
import TodoItem from "./TodoItem";
import { v4 as uuidv4 } from "uuid";

export default class TodoGroup extends Component {
  render() {
    const todoArray = this.props.todoArray;

    return (
      <div>
        {todoArray.map((todo) => (
          <TodoItem key={uuidv4()} todo={todo}/>
        ))}
      </div>
    );
  }
}
