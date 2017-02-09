import React, { Component } from 'react';
import Firebase from '../Firebase';
import SpeechForm from '../Components/speechform';

const database = Firebase.database();

const formTypes = ["Speech", "Amendment", "Procedure"];

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formType: "Amendment",
      content: "",
      error: ""
    };
  }

  handleChange(event) {
    const name = event.target.name;
    this.setState({[name]: event.target.value});
  }

  resetForm(callback) {
    this.setState({
      speaker: "",
      classYear: "",
      email: "",
      content: ""
    }, callback());
  }

  setFormType(f) {
    this.setState({ formType: f });
  }

  render() {
    const selectorElements = formTypes.map((f) => {
      if (f == this.state.formType) {
        return (<li><button>{f}</button></li>);
      } else {
        return (<li onClick={() => this.setFormType(f).bind(this)} >{f}</li>);
      }
    });
    return (
      <section className="formContainer">
        <div className="selector">
          <div className="selectorContent">
            <ul className="items">
              {selectorElements}
            </ul>
          </div>
        </div>
        <SpeechForm />
      </section>

    );
  }
}

export default Form;
