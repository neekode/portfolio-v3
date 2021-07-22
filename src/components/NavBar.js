import React from 'react';
import {useContext, useRef, useState, useEffect} from 'react';
import {ThemeContext} from '../scripts/context'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { addBounceOnHover } from './../scripts/library.js';

function MyNav() {
  const {scrollY, section, setSection} = useContext(ThemeContext);

  // Throwing navbar links as refs into an array
  const aboutLink = useRef();
  const worksLink = useRef();
  const connectLink = useRef();
  const wrapper = useRef();
  const navRefs = [aboutLink, worksLink, connectLink];

  navRefs.forEach((el) => {
    return addBounceOnHover(el);
  })

  useEffect(() => {
    const elTop = wrapper.current.getBoundingClientRect().top
    // TODO: why 1000?
    if (scrollY > (elTop + 1000)) {
      setSection("About")
    }
  }, [scrollY])

  return (
      <div id="MyNav" ref={wrapper}>
        <div className={section !== 'Intro' ? "MyNav-fixed box" : "box"}>
          <AnchorLink id="about-anchor" href="#About"><span id='about-link' ref={aboutLink} className="nav-item"> about me </span></AnchorLink>
          <AnchorLink id="works-anchor" href="#Works"> <span id='works-link' ref={worksLink}
                                                             className="nav-item"> works </span></AnchorLink>
          <AnchorLink id="connect-anchor" href="#Connect"><span id='connect-link' ref={connectLink}
                                                                className="nav-item"> connect </span></AnchorLink>
        </div>
      </div>
  );
}

export default MyNav;