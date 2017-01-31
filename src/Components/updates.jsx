import React, { Component } from 'react';
import Speech from './speech';

const dummyUpdates = [
  {
    speaker: "Kevin Liao",
    classYear: 2018,
    email: "kliao@haverford.edu",
    content: "Raised an objection on the grounds of constitutionality. Argues that there should be a clause in the honor code that allows Havercat to be supreme dictator of the school."
  },
  {
    speaker: "Kevin Liao",
    classYear: 2018,
    email: "kliao@haverford.edu",
    content: "Raised an objection on the grounds of constitutionality. Argues that there should be a clause in the honor code that allows Havercat to be supreme dictator of the school."
  }
];

const dummyAmendments = [
  {
    resolutionId: 0,
    action: "Change",
    location: "Clause 1",
    original: "Declares war on Bryn Mawr College",
    changed: "Declares an undying love for good ol' Bryn Mawr College.",
  }
];

class Updates extends Component {
  render() {
    const speeches = dummyUpdates.map((u) => {
      return <Speech
                 speaker={u.speaker}
                 classYear={u.classYear}
                 email={u.email}
                 content={u.content}
             />
    });
    return(
      <section className="updates">
        <h1>Live Updates from Plenary</h1>
        {speeches}
      </section>
    );
  }
}

export default Updates;
