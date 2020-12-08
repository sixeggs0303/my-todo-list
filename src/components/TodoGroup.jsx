import React, { Component } from "react";
import TodoItem from "./TodoItem";
import { v4 as uuidv4 } from "uuid";

export default class TodoGroup extends Component {
  initArraySize = (size) => {
    return Array.from(Array(size).keys());
  };

  render() {
    const size = this.props.size;
    const initArraySize = this.initArraySize(size);

    return (
      <div>
        {initArraySize.map(() => (
          <TodoItem key={uuidv4()} />
        ))}
      </div>
    );
  }
}
