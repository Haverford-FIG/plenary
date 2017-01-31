import React, { Component } from 'react';
import NavBar from './Components/navbar';
import Updates from './Components/updates';
import logo from './logo.svg';
import './public/css/haverford.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Updates />
      </div>
    );
  }
}

export default App;
