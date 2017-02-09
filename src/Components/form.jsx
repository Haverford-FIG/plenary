import React, { Component } from 'react';
import SpeechForm from '../Components/speechform';
import AmendmentForm from '../Components/amendmentform.jsx';

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

  setFormType(f) {
    this.setState({ formType: f });
  }

  render() {
    const selectorElements = formTypes.map((f) => {
      if (f == this.state.formType) {
        return (<li><button>{f}</button></li>);
      } else {
        return (<li onClick={() => this.setFormType(f)} >{f}</li>);
      }
    });

    const formToRender = (() => {
      switch(this.state.formType) {
        case "Speech":
          return <SpeechForm />;
        case "Amendment":
          return <AmendmentForm />;
        // case "Procedure":
          //  return <ProcedureForm />;
        default:
          return <SpeechForm />;
      };
    })();

    console.log("Rendering! form is: ", formToRender);
    return (
      <section className="formContainer">
        <div className="selector">
          <div className="selectorContent">
            <ul className="items">
              {selectorElements}
            </ul>
          </div>
        </div>
        { formToRender }
      </section>

    );
  }
}

export default Form;
