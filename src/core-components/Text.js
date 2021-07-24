import React from "react";

export class Text extends React.Component {
  render() {
    return (
      <p id={this.props.id} className="text">
        {" "}
        {this.props.text}{" "}
      </p>
    );
  }
}
