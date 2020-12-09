import { Button, Dropdown, Menu } from "antd";
import React, { Component } from "react";
import { updateTodoLabels } from "../api/todo";

export default class TodoLabelDropDown extends Component {
  addTodoLabel = (label) => {
    const todo = this.props.todo;
    updateTodoLabels(todo.id, [...todo.labels, label]).then((response) => {
      this.props.updateStoreTodoLabels(response.data);
    });
  };

  hasLabel = (label) => {
    return this.props.todo.labels.includes(label);
  };

  render() {
    const labels = ["Everyday", "Weekends", "Weekdays"];
    const menu = (
      <Menu>
        {labels.map((label) => (
          <Menu.Item
            key={label}
            disabled={this.hasLabel(label)}
            onClick={() => this.addTodoLabel(label)}
          >
            {label}
          </Menu.Item>
        ))}
      </Menu>
    );

    return (
      <Dropdown overlay={menu}>
        <Button>Label</Button>
      </Dropdown>
    );
  }
}
