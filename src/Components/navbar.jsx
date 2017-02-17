import React, { Component } from 'react';
import Firebase from '../Firebase';
import ui from '../FirebaseUI';

const uiConfig = {
  callbacks: {
    signInSuccess: function(currentUser, credential, redirectUrl) {
      console.log("HOLY FUCK I SIGNED IN CORRECTLY.");
      console.log(currentUser);
      return false;
    }
  },
  signInFlow: 'popup',
  signInOptions: [
    // Leave the lines as is for the providers you want to offer your users.
    Firebase.auth.EmailAuthProvider.PROVIDER_ID
  ],
  // Terms of service url.
}

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false
    };

    Firebase.auth().onAuthStateChanged(function(user) {
      console.log("Authentication state changed!!!");
      console.log(user);
      if(user) {
        this.setState({loggedIn: true});
      } else {
        this.setState({loggedIn: false});
      }
    }.bind(this));
  }
  componentWillMount() {

  }
  render() {
    const openAuthBox = ui.start('#firebaseui-auth-container', uiConfig);
    const closeAuthBox = () => {
      ui.reset();
      Firebase.auth().signOut();
    };
    const loginButtonAction = this.state.loggedIn ?
                              closeAuthBox.bind(this) :
                              (() => {console.log("Unimplemented"); });
    return (
      <nav id="navbar">
        <div id="navbar-content">
          <span className="logo">
            <img src="img/SC.svg" />
          </span>
          <ul className="items">
            <li><a>Home</a></li>
            <li><a>About</a></li>
            <li><a>Contact</a></li>
            <li >
              <a>
                {this.state.loggedIn ? "Sign out" : "Sign in"}
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;
