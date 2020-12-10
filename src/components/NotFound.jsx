import { Result } from "antd";
import React, { Component } from "react";

export default class NotFound extends Component {
  render() {
    return (
      <div>
        <Result
          status="404"
          title="404"
          subTitle="Sorry, the page you visited does not exist."
        />
      </div>
    );
  }
}
