import React, { Component } from 'react';

class NavBar extends Component {
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
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;
