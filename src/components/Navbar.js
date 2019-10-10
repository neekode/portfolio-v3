import React from 'react';
import { useContext, useRef, useState, useEffect } from 'react';
import Context from './../scripts/context'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import $ from 'jquery';

function Navbar() {
  const { state } = useContext( Context );

  // First, declaring state of the currently hovered over element. Initializing it to an empty jquery object to set the object type
  const [hoverEl, setHoverEl] = useState($());

  // declaring individual refs for each element in question. (Must be an easier way to do this.)
  const aboutLink = useRef(); const worksLink = useRef(); const connectLink = useRef();

  // use effect, once subscribed to the [hoverEl] as a second argument, fires the callback function whenever
  // at any point if hoverEl mutates.
  useEffect(() => {
    hoverEl.addClass('animated bounce')
  }, [hoverEl])

  const handleMouseEnter = (e) => {
    switch (e.target.id) {
      case "about-link" : {
        setHoverEl($(aboutLink.current));
        break;
      }

      case "works-link" : {
        setHoverEl($(worksLink.current));
        break;
      }

      case "connect-link" : {
        setHoverEl($(connectLink.current));
        break;
      }
      default: {
        break;
      }
    }
      
  }

  const handleMouseLeave = (e) => {
    hoverEl.removeClass('animated pulse')
  }

  //href="#Works"  ref={item} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
    
  return (
    <div id="Navbar">
        <div className={state.section !== 'Intro' ? "Navbar-fixed container" : "container"}>
          <AnchorLink href="#About"><span id='about-link' ref={aboutLink} className="nav-item" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}> about me </span></AnchorLink>
          <AnchorLink href="#Works"> <span id='works-link' ref={worksLink} className="nav-item" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}> works </span></AnchorLink>
          <AnchorLink href="#Connect"><span id='connect-link' ref={connectLink} className="nav-item" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}> connect </span></AnchorLink>
        </div>
    </div>
  );
}

export default Navbar;