import logo from './logo.svg';
import './App.css';
import React from 'react';
import songModal from "./components/songModal";
import ratingModal from "./components/ratingModal";
import axios from 'axios';

function App() {
  return (
    <div className="App">
      <header className="App-header">
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
          Hello I am Mike
        </a>
      </header>
      <body>
        <h1> Testing css file </h1>
        <h2> Testing css file again</h2>
      </body>
    </div>

  );
}

export default App;
