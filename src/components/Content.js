import React from 'react';
import Intro from './Intro'
import About from './About'
import Works from './Works'
import Connect from './Connect'

import Ballpit from './Ballpit';
import AnimationController from './AnimationController';

import $ from 'jquery';

import { SectionContext } from './../App';

const { createContext, useContext, useState } = React;


function Content() {
  const { section, selectSection } = useContext(
    SectionContext
  );

  const handleScroll = (e) => { 
      let currentPos = window.scrollY;

      let introTop = $('#Intro').offset().top;
      let aboutTop = $('#About').offset().top;
      let worksTop = $('#Works').offset().top;
      let connectTop = $('#Connect').offset().top;

      console.log(currentPos)

      if (currentPos => introTop && currentPos < aboutTop + 300) { selectSection('Intro') };

      if (currentPos > aboutTop - 300 && currentPos  <= worksTop + 300) { selectSection('About') };
      if (currentPos > worksTop - 300 && currentPos <= connectTop + 300) { selectSection('Works') };
      if (currentPos > connectTop - 300) { selectSection('Connect') };

  }
    
  return (
    <div onWheel={handleScroll} id="Content">
        <Ballpit /> 
        
        <Intro />
        <About />
        <Works />

        <Connect />

        {/* rewrite this lol */}

        <div id='test'> {section} </div>

        {/* {section === 'intro-link' ? <Intro /> : null}
        {section === 'about-link' ?  : null}
        {section === 'works-link' ?  : null}
        {section === 'connect-link' ?  : null}  */}
    </div>
  );
}

export default Content;