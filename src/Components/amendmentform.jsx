import React, { Component } from 'react';
import Firebase from '../Firebase';

const database = Firebase.database();

class AmendmentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      speaker: "",
      classYear: "",
      email: "",
      original: "",
      newText: "",
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
      formType: "Amendment",
      speaker: this.state.speaker,
      classYear: this.state.classYear,
      email: this.state.email,
      original: this.state.original,
      newText: this.state.newText
    }
    console.log("Creating a new speech: ", newSpeech);
    const newSpeechKey = database.ref().child('speeches').push().key;
    const updates = { ['/speeches/' + newSpeechKey]: newSpeech };

    database.ref().update(updates);
    this.setState({
      speaker: "",
      classYear: "",
      email: "",
      original: "",
      newText: ""
    });
    /* this.resetForm(() => {
     *   console.log("State is now: ", this.state);
     * }).bind(this);*/
  }
  resetForm() {
    this.setState({
      speaker: "",
      classYear: "",
      email: "",
      content: "",
      original: "",
      newText: ""
    });
  }
  render () {
    return (
      <form onSubmit={this.handleSubmit} >
        <label>
          Name:
          <input
              onChange={this.handleChange}
              type="text"
              name="speaker"
              value={this.state.speaker}
          />
        </label>
        <label>
          Class Year:
          <input
              onChange={this.handleChange}
              type="text"
              name="classYear"
              value={this.state.classYear}
          />
        </label>
        <label>
          Email:
          <input
              onChange={this.handleChange}
              type="text"
              name="email"
              value={this.state.email}
          />
        </label>
        <label>
          Original:
          <textarea
              onChange={this.handleChange}
              type="text"
              name="original"
              value={this.state.original}
          />
        </label>
        <label>
          New:
          <textarea
              onChange={this.handleChange}
              type="text"
              name="newText"
              value={this.state.newText}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default AmendmentForm;
