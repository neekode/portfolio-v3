import React from 'react';
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
        speed: 3000,
        complete: function () {
          if (this.index === 5) {
              $(this.element).text(" Thanks for visiting! ");
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
    <div className="section" id="Intro">
        <div className="container center" >
            <h2 id="intro-header" className="header">Neeko Blomgren:</h2>
            <h3 id="intro-sub-header" className="sub-header" ref={subHeader}> 
              Front-End Web Developer /
              with a UX Background /
              who loves to build things /
              using React (Hooks), ES6 Javscript, Sass, Webpack, & more /
              Based out of Seattle, WA
            </h3>
            
            <Navbar />

            <div className='chevron-container' ref={exploreMore} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <AnchorLink href="#About"> <img className='down-chevs' alt='down chevs' src={downChevs} /> </AnchorLink>
            </div>
        </div>
    </div>
  );
}

export default Intro;