import { Col, Divider, List, Row } from "antd";
import React, { Component } from "react";

export default class DoneList extends Component {
  render() {
    const doneTodoArray = this.props.doneTodoArray;

    return (
      <Row justify="center">
        <Col span={10}>
          <Divider orientation="center">Done List</Divider>
          <List
            size="large"
            bordered
            dataSource={doneTodoArray}
            renderItem={(todoText) => <List.Item>{todoText}</List.Item>}
          ></List>
        </Col>
      </Row>
    );
  }
}
