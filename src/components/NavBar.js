import React from "react";
import {useContext, useRef, useState, useEffect} from "react";
import {ThemeContext} from "../scripts/context";
import AnchorLink from "react-anchor-link-smooth-scroll";
import {addClassOnActive} from "./../scripts/library.js";

const navs = {
    intro: {
        href: "#Intro",
        displayName: "intro",
    },
    about: {
        href: "#About",
        displayName: "about",
    },
    experience: {
        href: "#Experience",
        displayName: "experience",
    },
    projects: {
        href: "#Projects",
        displayName: "projects",
    },
    connect: {
        href: "#Connect",
        displayName: "connect",
    },
};

function NavBarItem(props) {
    const {ref, href,} = props;

    return (
        <AnchorLink href="#Intro" id="about-anchor">
      <span ref={ref} className="nav-item">
        intro
      </span>
        </AnchorLink>
    );
}

function NavBar() {
    const {section, scrollY} = useContext(ThemeContext);

    // Throwing navbar links as refs into an array. TODO: turn into loop + array.map.fill() or something. How?
    const introLink = useRef();
    const aboutLink = useRef();
    const experienceLink = useRef();
    const projectsLink = useRef();
    const connectLink = useRef();
    // const navRefs = [introLink, aboutLink, experienceLink, projectsLink, connectLink];
    // navRefs.forEach((el, section) => {
    //   return addClassOnActive(el, section);
    // });
    // test

    //section !== "Intro" ? "MyNav-fixed box" :
    return (
        <div
            className={
                scrollY < 50
                    ? "NavBar NavBar-hidden"
                    : "NavBar"
            }>
            <div className="box">

                <AnchorLink href="#Intro" id="intro-anchor">
          <span ref={introLink} className="nav-item">
            intro
          </span>
                </AnchorLink>
                <AnchorLink href="#About" id="about-anchor">
          <span ref={aboutLink} className="nav-item">
            about me
          </span>
                </AnchorLink>
                <AnchorLink href="#Experience" id="experience-anchor">
          <span ref={experienceLink} className="nav-item">
            experience
          </span>
                </AnchorLink>
                <AnchorLink href="#Projects" id="projects-anchor">
          <span ref={projectsLink} className="nav-item">
            projects
          </span>
                </AnchorLink>
                <AnchorLink href="#Connect" id="connect-anchor">
          <span ref={connectLink} className="nav-item">
            connect
          </span>
                </AnchorLink>
            </div>
        </div>
    );
}

export default NavBar;
