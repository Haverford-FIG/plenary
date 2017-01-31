import React, { Component } from 'react';
import Firebase from '../Firebase';

const database = Firebase.database();

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {content: ""};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const name = event.target.name;
    this.setState({[name]: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    const newSpeech = {
      speaker: this.state.speaker,
      classYear: this.state.classYear,
      email: this.state.email,
      content: this.state.content
    }
    console.log("Creating a new speech: ", newSpeech);
    const newSpeechKey = database.ref().child('speeches').push().key;
    const updates = {
      ['/speeches/' + newSpeechKey]: newSpeech
    };

    database.ref().update(updates);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} >
        <label>
          Name:
          <input onChange={this.handleChange} type="text" name="speaker" />
        </label>
        <label>
          Class Year:
          <input onChange={this.handleChange} type="text" name="classYear" />
        </label>
        <label>
          Email:
          <input onChange={this.handleChange} type="text" name="email" />
        </label>
        <label>
          Content:
          <textarea
              onChange={this.handleChange}
              type="text"
              name="content"
              value={this.state.value}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>

    );
  }
}

export default Form;
