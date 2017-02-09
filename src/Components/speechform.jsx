import React, { Component } from 'react';
import Firebase from '../Firebase';

const database = Firebase.database();

class SpeechForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      speaker: "",
      classYear: "",
      email: "",
      content: "",
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
      formType: "Speech",
      speaker: this.state.speaker,
      classYear: this.state.classYear,
      email: this.state.email,
      content: this.state.content
    }
    console.log("Creating a new speech: ", newSpeech);
    const newSpeechKey = database.ref().child('speeches').push().key;
    const updates = { ['/speeches/' + newSpeechKey]: newSpeech };

    database.ref().update(updates);
    this.setState({
      speaker: "",
      classYear: "",
      email: "",
      content: ""
    }, this.resetForm());
    /* this.resetForm(() => {
     *   console.log("State is now: ", this.state);
     * }).bind(this);*/
  }
  resetForm() {
    this.setState({
      speaker: "",
      classYear: "",
      email: "",
      content: ""
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
          Content:
          <textarea
              onChange={this.handleChange}
              type="text"
              name="content"
              value={this.state.content}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default SpeechForm;
