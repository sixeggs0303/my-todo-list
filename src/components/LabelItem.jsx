import { Tag } from "antd";
import React, { Component } from "react";
import { updateTodoLabels } from "../api/todo";

export default class LabelItem extends Component {
  deleteTodoLabel = () => {
    const label = this.props.label;
    const todo = this.props.todo;
    const updatedLabels = todo.labels.filter(
      (currentLabel) => currentLabel !== label
    );
    updateTodoLabels(todo.id, updatedLabels).then((response) => {
      this.props.updateStoreTodoLabels(response.data);
    });
  };

  getColor = () => {
    switch (this.props.label) {
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

  render() {
    return (
      <Tag closable onClose={this.deleteTodoLabel} color={this.getColor()}>
        {this.props.label}
      </Tag>
    );
  }
}
