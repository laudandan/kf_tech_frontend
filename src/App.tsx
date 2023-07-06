import React from 'react';
import logo from './logo.svg';
import './App.css';


function App() {
  return (
      <>
        <script src="https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js"></script>

    <script
        src="https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js"></script>

    <script
        src="https://cdn.jsdelivr.net/npm/react-bootstrap@next/dist/react-bootstrap.min.js"></script>

  <script>var Alert = ReactBootstrap.Alert;</script>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
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
    </div>
      </>
  );
}

export default App;
