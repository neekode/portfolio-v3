import React from "react";
import {useContext, useRef, useState, useEffect} from "react";
import {ThemeContext} from "../scripts/context";
import AnchorLink from "react-anchor-link-smooth-scroll";
import {addClassOnActive} from "./../scripts/library.js";

const navs = [
    {
        href: "#Intro",
        displayName: "Intro",
    },
    {
        href: "#About",
        displayName: "About",
    },
    {
        href: "#Experience",
        displayName: "Experience",
    },
    {
        href: "#Projects",
        displayName: "Projects",
    },
    {
        href: "#Connect",
        displayName: "Connect",
    },
];

function NavBarItem(props) {
    const {navObj} = props;
    const {section} = useContext(ThemeContext);

    return (
        // TODO: Need id?
        <AnchorLink href={navObj.href} id="">
      <span ref={navObj.ref} className={section === navObj.displayName ? "nav-item nav-item-active" : "nav-item"}>
        {navObj.displayName}
      </span>
        </AnchorLink>
    );
}

function NavBar() {
    const {scrollY} = useContext(ThemeContext);

    // TODO: How to simplify this?
    navs[0].ref = useRef();
    navs[1].ref = useRef();
    navs[2].ref = useRef();
    navs[3].ref = useRef();
    navs[4].ref = useRef();

    return (
        <div
            className={
                scrollY < 50
                    ? "NavBar NavBar-hidden"
                    : "NavBar"
            }>
            <div className="box">
                {navs.map((navObj, i) => {
                    return (<NavBarItem navObj={navObj}/>)
                })}
            </div>
        </div>
    );
}

export default NavBar;
