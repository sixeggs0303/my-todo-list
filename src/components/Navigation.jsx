import { Menu } from "antd";
import { FileOutlined, FileDoneOutlined } from '@ant-design/icons';
import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Navigation extends Component {
  render() {
    return (
      <Menu theme="dark" mode="horizontal">
        <Menu.Item icon={<FileOutlined />}>
          <NavLink to="/">List Page</NavLink>
        </Menu.Item>
        <Menu.Item icon={<FileDoneOutlined />}>
          <NavLink to="/done">Done Page</NavLink>
        </Menu.Item>
      </Menu>
    );
  }
}
