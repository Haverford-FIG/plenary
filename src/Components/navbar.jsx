import React, { Component } from 'react';
import Firebase from '../Firebase';
import ui from '../FirebaseUI';

const provider = new Firebase.auth.GoogleAuthProvider();


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

  handleSignIn(event) {
    event.preventDefault();
    if(!this.state.loggedIn) {
      
      Firebase.auth().signInWithPopup(provider);
    } else {
      Firebase.auth().signOut();
    }
  }
  render() {

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
              <button onClick={this.handleSignIn.bind(this)}>
                {this.state.loggedIn ? "Sign out" : "Sign in"}
              </button>
            </li>
          </ul>

        </div>

      </nav>
    );
  }
}

export default NavBar;
