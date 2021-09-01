import React from "react";
import Intro from "./Intro";
import About from "./About";
import NavBar from "./NavBar";
import Experience from "./Experience";
import Projects from "./Projects";
import {ThemeContext} from "./../scripts/context";
import {useContext} from "react";

// Big Wrapper
function Content() {
    const {isSandbox} = useContext(ThemeContext);

    return (
        <div id="InnerContent">
            <NavBar/>
            <Intro/>
            <About/>
            <Experience/>
            <Projects/>
        </div>
    );
}

export default Content;
