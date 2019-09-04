import React from 'react';
import Ballpit from './Ballpit.js';
import Navbar from './Navbar.js';

import { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';

import $ from 'jquery';

// Next: how to get jquery working without including the cdn? purely from imports

function Intro() {

  useEffect(() => initText(), []);

  let subHeader = useRef();

  const initText = () => {
    // console.log('stuff')
    // debugger;

    const init = () => {
      $(subHeader.current).animate()
    }
  
    return init();
  }

  return (
    <div className="Intro">
        <Ballpit /> 

        <div className="container center">
            <span id="intro-header" className="header">Neeko Blomgren:</span>
            <br />
            
            <span id="intro-sub-header" className="sub-header" ref={subHeader}> Web Developer</span>
            <br /> 

            {/* <p className="description center"> Hello! I specialize in the Front-end, specifically with React.
                                            I'm based out of Seattle, WA. Thanks for stopping by. </p> */}
            
            <Navbar />
        </div>
    </div>
  );
}

export default Intro;