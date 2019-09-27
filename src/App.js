import React from 'react';
import Content from './components/Content';

// FOR LATER
// import { useState } from 'react';
// import { useEffect } from 'react';
// import { useRef } from 'react';
// import  $  from 'jquery';
// import AnchorLink from 'react-anchor-link-smooth-scroll';

// Creating initial context
const { createContext, useState } = React;
// Setting context to variable, then exporting it to be available across the application
export const SectionContext = createContext(null);

function App() {
  // Declaring section state and then initializing with intro as default state
  const [section, setSection] = useState('intro-link')

  // Function which uses a switch case to determine 
  function selectSection(e) {
    setSection(() => { return e.target.id; })
  }

  return (
    <div id="App">
      <SectionContext.Provider value={{ section, selectSection }} >
        <Content />
      </SectionContext.Provider>
    </div>
  );
}

export default App;