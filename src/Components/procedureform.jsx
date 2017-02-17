import React, { Component } from 'react';
import Firebase from '../Firebase';

const database = Firebase.database();

class ProcedureForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      error: ""
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.resetForm = this.resetForm.bind(this);
  }

  handleChange(event) {
    const name = event.target.name;
    this.setState({[name]: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    const newSpeech = {
      formType: "Procedure",
      text: this.state.text
    }
    console.log("Creating a new speech: ", newSpeech);
    const newSpeechKey = database.ref().child('speeches').push().key;
    const updates = { ['/speeches/' + newSpeechKey]: newSpeech };

    database.ref().update(updates);
    this.setState({
      text: ""
    });
    /* this.resetForm(() => {
     *   console.log("State is now: ", this.state);
     * }).bind(this);*/
  }
  resetForm() {
    this.setState({
      text: ""
    });
  }
  render () {
    return (
      <form onSubmit={this.handleSubmit} >
        <label>
          Procedure:
          <input
              onChange={this.handleChange}
              type="text"
              name="text"
              value={this.state.text}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default ProcedureForm;
