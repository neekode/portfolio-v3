import React from 'react';

import { useContext, useEffect, useRef } from 'react';

import $ from 'jquery';
import '../scripts/morphext';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import downChevs from './../assets/chevrons-down.svg';

import Context from './../scripts/context'

function Intro() {
  // Side Effect which initializes on page load
  //useEffect(() => initText(), []);

  const { state } = useContext( Context );

  // Referencing HTML DOM element inside component 
  let subHeader = useRef();
  let exploreMore = useRef();

  const initText = () => {
    const func = () => {
      $(subHeader.current).Morphext({
        animation: "bounceIn",
        separator: "/",
        speed: 3000,
        complete: function () {
          if (this.index === 5) {
          }
        }
      });
      //ref={subHeader}
    }
    return func();
  }

  const handleMouseEnter = () => {
    $(exploreMore.current).addClass('animated bounce')
  }

  const handleMouseLeave = () => {
    $(exploreMore.current).removeClass('animated bounce')
  }

  return (
    <div className="section" id="Intro">
        <div className={state.section === 'Intro' ?  'container-Intro container center' : 'container center'}>
            <h2 id="intro-header" className="header">Welcome! I'm <span id='neeko-blomgren'>Neeko Blomgren</span>,</h2>
            <h3 id="intro-sub-header" className="sub-header" > 
              I'm a Front-End Web Dev from Seattle.
            </h3>

            <div className='chevron-container' ref={exploreMore} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <AnchorLink href="#About"> <img className='down-chevs' alt='down chevs' src={downChevs} /> </AnchorLink>
            </div>
        </div>
    </div>
  );
}

export default Intro;