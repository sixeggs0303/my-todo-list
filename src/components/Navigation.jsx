import { Menu } from "antd";
import { MailOutlined, AppstoreOutlined } from '@ant-design/icons';
import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Navigation extends Component {
  render() {
    return (
      <Menu theme="dark" mode="horizontal">
        <Menu.Item icon={<MailOutlined />}>
          <NavLink to="/">go to list page</NavLink>
        </Menu.Item>
        <Menu.Item icon={<AppstoreOutlined />}>
          <NavLink to="/done">go to done page</NavLink>
        </Menu.Item>
      </Menu>
    );
  }
}
