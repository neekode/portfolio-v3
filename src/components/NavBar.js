import React from 'react';
import { useContext, useRef, useState, useEffect } from 'react';
import Context from '../scripts/context'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { addBounceOnHover } from './../scripts/library.js';

function MyNav() {
  const { state } = useContext( Context );

  // Throwing navbar links as refs into an array
  const aboutLink = useRef(); const worksLink = useRef(); const connectLink = useRef();
  const navRefs = [aboutLink,worksLink,connectLink];

  navRefs.forEach((el) => {
    return addBounceOnHover(el);
  })
    
  return (
    <div id="MyNav">
        <div className={state.section !== 'Intro' ? "MyNav-fixed box" : "box"}>
          <AnchorLink id="about-anchor" href="#About"><span id='about-link' ref={aboutLink} className="nav-item"> about me </span></AnchorLink>
          <AnchorLink id="works-anchor" href="#Works"> <span id='works-link' ref={worksLink} className="nav-item"> works </span></AnchorLink>
          <AnchorLink id="connect-anchor" href="#Connect"><span id='connect-link' ref={connectLink} className="nav-item"> connect </span></AnchorLink>
        </div>
    </div>
  );
}

export default MyNav;