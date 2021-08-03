import React from "react";
import {useContext, useRef, useEffect} from "react";
import "../scripts/morphext";
import AnchorLink from "react-anchor-link-smooth-scroll";
import downChevs from "./../assets/chevrons-down.svg";
import {ThemeContext} from "./../scripts/context";
import {addBounceOnHover, themeChange} from "./../scripts/library.js";

function Intro() {
  // Context controlling the state of the background
  const {scrollY, setSection, section} = useContext(ThemeContext);
  const wrapper = useRef();
  useEffect(() => themeChange(wrapper, scrollY, setSection), [scrollY, setSection]);

  // Referencing HTML DOM element inside component
  const exploreMore = useRef();
  addBounceOnHover(exploreMore);

  return (
      <div className="section" id="Intro" ref={wrapper}>
        <div
            className={section === "Intro" ? "box-Intro box center" : "box center"}
        >
          <h2 id="intro-header" className="header">
            Welcome! I'm <span id="neeko-blomgren">Neeko Blomgrem</span>,
          </h2>
          <h3 id="intro-sub-header" className="sub-header">
            A Seattle-based Front-end Web Developer
          </h3>

          <div className="chevron-box">
            <AnchorLink href="#About">
              <img
                  ref={exploreMore}
                  className="down-chevs"
                  alt="down chevs"
                  src={downChevs}
              />
            </AnchorLink>
          </div>
        </div>
      </div>
  );
}

export default Intro;
