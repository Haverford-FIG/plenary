import React, { Component } from 'react';
import Firebase from '../Firebase';

const database = Firebase.database();

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: "",
      error: ""
    };
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
    const updates = { ['/speeches/' + newSpeechKey]: newSpeech };

    database.ref().update(updates);
    this.setState({
      speaker: "",
      classYear: "",
      email: "",
      content: ""
    });
    /* this.resetForm(() => {
     *   console.log("State is now: ", this.state);
     * }).bind(this);*/
  }

  resetForm(callback) {
    this.setState({
      speaker: "",
      classYear: "",
      email: "",
      content: ""
    }, callback());
  }

  render() {
    return (
      <section className="formContainer">
        <div className="selector">
          <div className="selectorContent">
            <ul className="items">
              <li><button>Speech</button></li>
              <li>Amendment</li>
              <li>Procedure</li>
            </ul>
          </div>
        </div>
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
      </section>

    );
  }
}

export default Form;
