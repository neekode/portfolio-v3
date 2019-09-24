import React from 'react';
//import logo from './logo.svg';
//import './styles/App.css';
import Intro from './components/Intro.js'
import About from './components/About.js'
import Works from './components/Works.js'
import Connect from './components/Connect.js'


function App() {
  return (
    <div id="App">
      <Intro />
      <Works />
      <About /> 
      <Connect />
    </div>
  );
}

export default App;