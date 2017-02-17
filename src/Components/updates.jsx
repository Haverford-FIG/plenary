import React, { Component } from 'react';
import Speech from './speech';
import Form from './form';
import Amendment from './amendment';
import Procedure from './procedure';
import Firebase from '../Firebase';

const database = Firebase.database();

class Updates extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      speeches: []
    };

    Firebase.auth().onAuthStateChanged(function(user) {
      console.log("Auth state changed!!");
      if(user) {
        console.log(user);
        this.setState({loggedIn: true});
      } else {
        this.setState({loggedIn: false});
      }
    }.bind(this));
  }

  componentWillMount() {
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
      const update = (() => {
        switch(u.formType) {
          case "Speech":
            return <Speech
                       speaker={u.speaker}
                       classYear={u.classYear}
                       content={u.content}
                   />;
          case "Amendment":
            return <Amendment
                       speaker={u.speaker}
                       classYear={u.classYear}
                       original={u.original}
                       newText={u.newText}
                   />;
          case "Procedure":
            return <Procedure
                       text={u.text}
                   />;
          default:
            return <Speech />;
        }
      })();
      return (
        <section className="speech-container">
          {update}
          <hr />
        </section>
      );
    });
    return(
      <section className="updates">
        <h1>Live Updates from Plenary</h1>
        { this.state.loggedIn ? <Form /> : <div></div>}
        {speeches}
      </section>
    );
  }
}

export default Updates;
