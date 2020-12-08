import React, { Component } from "react";

export default class TodoItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todo: {
        id: "1234",
        text: "this is the first todo",
        done: false,
      },
    };
  }

  render() {
    return (
      <div>
        <label>{this.props.todo.text}</label>
        <button>x</button>
      </div>
    );
  }
}
