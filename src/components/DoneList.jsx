import { Col, Divider, List, Row, Tag } from "antd";
import React, { Component } from "react";
import "../css/TodoItemButton.css";

export default class DoneList extends Component {
  renderDoneTodo = (todo) => {
    return (
      <List.Item align="left">
        {todo.text}
        <div className="button-to-right">{this.renderLabels(todo.labels)}</div>
      </List.Item>
    );
  };

  getColor = (label) => {
    switch (label) {
      case "Everyday":
        return "red";
      case "Weekends":
        return "green";
      case "Weekdays":
        return "blue";
      default:
        return "";
    }
  };

  renderLabels = (labels) => {
    return labels.map((label) => (
      <Tag key={label} color={this.getColor(label)}>
        {label}
      </Tag>
    ));
  };

  render() {
    const doneTodoArray = this.props.doneTodoArray;

    return (
      <Row justify="center">
        <Col span={16}>
          <Divider orientation="center">Done List</Divider>
          <List
            size="large"
            bordered
            dataSource={doneTodoArray}
            renderItem={(todo) => this.renderDoneTodo(todo)}
          ></List>
        </Col>
      </Row>
    );
  }
}
