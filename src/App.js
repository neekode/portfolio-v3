import React from 'react';
//import logo from './logo.svg';
//import './styles/App.css';
import Intro from './components/Intro.js'
import About from './components/About.js'
import Works from './components/Works.js'
import Connect from './components/Connect.js'


function App() {
  return (
    <div className="App">
      <Intro />
      <About /> 
      <Works />
      <Connect />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload!!!!
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

export default App;