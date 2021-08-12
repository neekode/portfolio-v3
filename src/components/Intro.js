import React from "react";
import {useContext, useRef, useEffect} from "react";
import "../scripts/morphext";
import AnchorLink from "react-anchor-link-smooth-scroll";
import downChevs from "./../assets/chevrons-down.svg";
import {ThemeContext} from "./../scripts/context";
import {addBounceOnHover, themeChange} from "./../scripts/library.js";
import profilePic from "../assets/me.JPG";

function Intro() {
    // Context controlling the state of the background
    const {scrollY, setSection, isMobile} = useContext(ThemeContext);
    const wrapper = useRef();
    useEffect(() => themeChange(wrapper, scrollY, setSection), [scrollY, setSection]);

    // Referencing HTML DOM element inside component
    const exploreMore = useRef();
    addBounceOnHover(exploreMore);

    return (
        <div className={"section Intro"} id="Intro" ref={wrapper}>
            <div
                className={`box center ${isMobile ? 'introBoxMobile boxMobile' : ''}`}
            >
                <div id="profile-picture" className={`col-md-4 ${isMobile ? '' : 'unshown'}`}>
                    <img className=" hexagon" alt="down chevs" src={profilePic}/>
                </div>
                <h2 className="header">
                    Welcome! I'm <span id="neeko-blomgren">Neeko Blomgren</span>,
                </h2>
                <h2 className="sub-header">
                    A Seattle-based Front-end Web Developer.
                </h2>
                <h2 className="sub-header2">
                    I built this nifty background animation! Play around with it! <a href=""> Or use it in your own
                    project!</a>
                </h2>

                <div className={`chevron-box ${isMobile ? 'chevron-box-mobile' : ''}`}>
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
