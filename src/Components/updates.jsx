import React, { Component } from 'react';
import Speech from './speech';
import Form from './form';
import Firebase from '../Firebase';

const database = Firebase.database();

class Updates extends Component {
  constructor(props) {
    super(props);
    this.state = {
      speeches: [],
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
      return (
        <section className="speech-container">
          <Speech
              speaker={u.speaker}
              classYear={u.classYear}
              email={u.email}
              content={u.content}
          />
          <hr />
        </section>
      );
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
