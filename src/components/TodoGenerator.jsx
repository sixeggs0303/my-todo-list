import React, { Component } from "react";

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
    this.setState({ todoText: "" });
    this.props.submitTodo(this.state.todoText);
  };

  render() {
    return (
      <div>
        <input
          value={this.state.todoText}
          placeholder="type the text"
          type="text"
          onChange={this.onChangeText}
        />
        <button onClick={this.submitTodo}>add</button>
      </div>
    );
  }
}
