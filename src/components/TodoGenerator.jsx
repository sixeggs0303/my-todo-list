import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";

export default class TodoGenerator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todoText: "",
    };
  }

  onChangeText = (event) => {
    this.setState({ todoText: event.target.value });
  };

  submitTodo = () => {
    const todo = {
      id: uuidv4(),
      text: this.state.todoText,
      done: false,
    };
    this.props.submitTodo(todo);
  };

  render() {
    return (
      <div>
        <input
          value={this.state.text}
          placeholder="type the text"
          type="text"
          onChange={this.onChangeText}
        />
        <button onClick={this.submitTodo}>add</button>
      </div>
    );
  }
}
