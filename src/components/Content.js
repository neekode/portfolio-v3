import React from "react";
import Intro from "./Intro";
import About from "./About";
import Experience from "./Experience";
import Connect from "./Connect";
import NavBar from "./NavBar";
import Background from "./Background";
import Projects from "./Projects";
import {ThemeContext} from "./../scripts/context";
import {useContext, useEffect} from "react";

// Big Wrapper
function Content() {
    const {setScrollY} = useContext(ThemeContext);
    const handleScroll = (e) => setScrollY(window.scrollY);

    // Attach scroll handler on Init
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        if (window.addEventListener) {
            window.addEventListener("load", handleScroll, false); //W3C
        }
    }, []);

    return (
        <div id="Content">
            <Background/>
            <NavBar/>
            <Intro/>
            <About/>
            <Experience/>
            <Projects/>
            <Connect/>
        </div>
    );
}

export default Content;
