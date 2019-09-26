import React from 'react';
import Ballpit from './Ballpit.js';
import Navbar from './Navbar.js';

import { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';

import $ from 'jquery';
import '../scripts/morphext';
import AnchorLink from 'react-anchor-link-smooth-scroll'

import downChevs from './../assets/chevrons-down.svg';

function Intro() {

  // Side Effect which initializes on page load
  useEffect(() => initText(), []);

  // Referencing HTML DOM element inside component 
  let subHeader = useRef();
  let exploreMore = useRef();

  // 
  const initText = () => {

    const func = () => {
      $(subHeader.current).Morphext({
        animation: "bounceIn",
        separator: "/",
        speed: 2250,
        complete: function () {
          if (this.index === 5) {
              $(this.element).text("(and I'm looking for work :D )");
          }
        }
      });

      
    }

    return func();
  }

  const handleMouseEnter = () => {
    $(exploreMore.current).addClass('animated infinite bounce')
  }

  const handleMouseLeave = () => {
    $(exploreMore.current).removeClass('animated infinite bounce')
  }

  return (
    <div id="Intro">
        <Ballpit /> 

        <div className="container center" >
            <h2 id="intro-header" className="header">Neeko Blomgren:</h2>
            <h3 id="intro-sub-header" className="sub-header" ref={subHeader}> 
              Front-End Web Specialist /
              with a Design Background /
              who loves to build things /
              using React (Hooks), ES6 Javscript, Sass, Webpack, & more /
              Based out of Seattle, WA /
            </h3>

            {/* <p className="description center"> Hello! I specialize in the Front-end, specifically with React.
                                            I'm based out of Seattle, WA. Thanks for stopping by. </p> */}
            
            <Navbar />

            <div className='chevron-container' ref={exploreMore} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <AnchorLink href="#Works"> <img className='down-chevs' alt='down chevs' src={downChevs} /> </AnchorLink>
            </div>
        </div>
    </div>
  );
}

export default Intro;