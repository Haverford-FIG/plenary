import React, { Component } from 'react';
import NavBar from './Components/navbar';
import Updates from './Components/updates';
import Quorum from './Components/quorum';
import logo from './logo.svg';
import './public/css/haverford.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <main>
          <Quorum />
          <Updates />
        </main>
      </div>
    );
  }
}

export default App;
