import React, { Component } from 'react';
import Speech from './speech';
import Form from './form';
import Firebase from '../Firebase';

const database = Firebase.database();

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
  constructor(props) {
    super(props);
    this.state = {
      speeches: [],
      amendments: dummyAmendments
    };
  }

  componentDidMount() {
    const speechRef = database.ref('/speeches');
    console.log("SpeechRef is: ", speechRef);
    speechRef.on('child_added', (snapshot) => {
      let currSpeeches = this.state.speeches;
      currSpeeches.unshift(snapshot.val());
      this.setState({speeches: currSpeeches}, ()=> {console.log(this.state)});
    });
  }

  render() {
    const speeches = this.state.speeches.map((u) => {
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
        <Form />
        {speeches}
      </section>
    );
  }
}

export default Updates;
