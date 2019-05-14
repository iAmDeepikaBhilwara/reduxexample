import React, { Component } from 'react';
import logo from './logo.svg';
import Button from '../src/containers/Button';

import './App.css';
import Button from './containers/Button';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Button></Button>
    
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
      </div>
    );
  }
}

export default App;
