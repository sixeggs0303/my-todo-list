import { Col, Row } from "antd";
import Search from "antd/lib/input/Search";
import React, { Component } from "react";
import { addTodo } from "../api/todo";

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
    addTodo(this.state.todoText).then((response) => {
      this.props.submitTodo(response.data);
    });
  };

  render() {
    return (
      <Row justify="center" style={{ paddingTop: "15px" }}>
        <Col span={16}>
          <Search
            value={this.state.todoText}
            placeholder="type the text"
            enterButton="Add"
            size="large"
            onChange={this.onChangeText}
            onSearch={this.submitTodo}
          />
          {/* <input
          value={this.state.todoText}
          placeholder="type the text"
          type="text"
          onChange={this.onChangeText}
        />
        <Button type="primary" onClick={this.submitTodo}>
          add
        </Button> */}
        </Col>
      </Row>
    );
  }
}
