import React, { Component } from "react";
import LabelItemContainer from "../containers/LabelItemContainer";

export default class LabelGroup extends Component {
  render() {
    return (
      <div>
        {this.props.labels.map((label) => (
          <LabelItemContainer
            key={label}
            label={label}
            todo={this.props.todo}
          />
        ))}
      </div>
    );
  }
}
