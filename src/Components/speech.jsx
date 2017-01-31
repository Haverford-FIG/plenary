import React, { Component } from 'react';


class Speech extends Component {
  render() {
    return (
      <div className="speech">
        <div className="metadata">
          <h3>{this.props.speaker}</h3>
          <b>{this.props.classYear}</b>
        </div>
        <p className="content">{this.props.content}</p>
      </div>
    );
  }
}

export default Speech;
