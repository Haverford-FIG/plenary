import React, { Component } from 'react';

function Speech(props){
  return (
    <div className="speech">
      <div className="metadata">
        <h3>{props.speaker}</h3>
        <b>{props.classYear}</b>
      </div>
      <p className="content">{props.content}</p>
    </div>
  );
}

export default Speech;
