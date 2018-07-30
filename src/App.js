import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {Avengers: ['Black Widow', 'Falcon', 'Iron Man', 'The Incredible Hulk']};
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Avengers: by Charles Cortinas</h1>
        </header>
        {this.state.Avengers.map(avenger => {return <div>{avenger}</div>})}
      </div>
    );
  }
}

export default App;
