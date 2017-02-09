import React, { Component } from 'react';

function Amendment(props){
  return (
    <div className="amendment">
      <h3>Amendment</h3>
      <div className="metadata">
        <b>{props.speaker}</b><br />
        <b>{props.classYear}</b>
      </div>
      <p className="amendment-original">{props.original}</p>
      <p className="amendment-new">{props.newText}</p>
    </div>
  );
}

export default Amendment;
