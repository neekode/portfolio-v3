import React from "react";
import Intro from "./Intro";
import About from "./About";
import NavBar from "./NavBar";
import Experience from "./Experience";
import Projects from "./Projects";

// Big Wrapper
function Content() {
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
