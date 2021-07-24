import React from 'react';


export class Button extends React.Component {
  render() {
    return (
      <button className="button" id={this.props.id} type="button" onClick={this.props.function}> {this.props.text} </button>
    );
  }
}
