import React, { Component } from 'react';

function Procedure(props){
  return (
    <div className="procedure">
      <h3>Update</h3>
      <b>{props.text}</b>
    </div>
  );
}

export default Procedure;
