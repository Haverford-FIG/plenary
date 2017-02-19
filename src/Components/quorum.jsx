import React, { Component } from 'react';

class Quorum extends Component {
  render() {
    return (
      <section className="quorumCounter" >
        <h3>We are currently NOT at Quorum.</h3>
        <p>It is currently NOT constitutional for plenary to be in session.</p>
        <p>Today, the number of students required to reach and maintain quorum is:</p>
        <h3>616</h3>
      </section>
    );
  }
}

export default Quorum;
