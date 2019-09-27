import React from 'react';
import Intro from './Intro'
import About from './About'
import Works from './Works'
import Connect from './Connect'

import Background from './Background';

import { SectionContext } from './../App';

const { createContext, useContext, useState } = React;

function Content() {

  const { section, selectSection } = useContext(
    SectionContext
  );
    
  return (
    <div id="Content">
      <Background /> 

        {/* rewrite this lol */}
        {section === 'intro-link' ? <Intro /> : null}
        {section === 'about-link' ? <About /> : null}
        {section === 'works-link' ? <Works /> : null}
        {section === 'connect-link' ? <Connect /> : null}

        <span id='intro-link' onClick={selectSection}>back!</span>
    </div>
  );
}

export default Content;