import { Col, Divider, List, Row } from "antd";
import React, { Component } from "react";
import { getTodoList } from "../api/todo";
import TodoItemContainer from "../containers/TodoItemContainer";

export default class TodoGroup extends Component {
  initTodoArray = (todoArray) => {
    return todoArray;
  };

  componentDidMount() {
    getTodoList().then((response) => {
      this.props.initTodos(response.data);
    });
  }

  render() {
    const todoArray = this.props.todoArray;

    return (
      <Row justify="center">
        <Col span={16}>
          <Divider orientation="center">Todo List</Divider>
          <List
            size="large"
            bordered
            dataSource={todoArray}
            renderItem={(todo) => (
              <List.Item>
                <TodoItemContainer key={todo.id} todo={todo} />
              </List.Item>
            )}
          >
            {/* {todoArray.map((todo) => (
          <TodoItemContainer key={todo.id} todo={todo} />
        ))} */}
          </List>
        </Col>
      </Row>
    );
  }
}
