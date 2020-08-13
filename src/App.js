import React from 'react';
import logo from './logo.svg';
import '../styles/App.css';

function App() {

  function testAction () {
    console.log("test action clicked");
  }

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
          Learn React
        </a>
      </header>
      <button onClick={testAction}>Perform test action</button>
    </div>
  );
}

export default App;