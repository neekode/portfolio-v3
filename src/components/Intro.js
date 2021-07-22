import React from 'react';
import { useContext, useRef } from 'react';
import '../scripts/morphext';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import downChevs from './../assets/chevrons-down.svg';
import {ThemeContext} from './../scripts/context';
import {addBounceOnHover} from './../scripts/library.js';

function Intro() {

    // Context controlling the state of the background
    const {section} = useContext(ThemeContext);

  // Referencing HTML DOM element inside component
  const exploreMore = useRef();

  addBounceOnHover(exploreMore);

  return (
    <div className="section" id="Intro">
        <div className={section === 'Intro' ? 'box-Intro box center' : 'box center'}>
            <h2 id="intro-header" className="header">Welcome! I'm <span id='neeko-blomgren'>Neeko Blomgren</span>,</h2>
            <h3 id="intro-sub-header" className="sub-header">
                A Front-end Web Developer (in Seattle)
            </h3>

            <div className='chevron-box'>
                <AnchorLink href="#About"> <img ref={exploreMore} className='down-chevs' alt='down chevs'
                                                src={downChevs}/> </AnchorLink>
            </div>
        </div>
    </div>
  );
}

export default Intro;