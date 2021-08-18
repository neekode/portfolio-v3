import React, {useRef, useEffect, useContext} from 'react';
import {themeChange} from "../scripts/library";
import {ThemeContext} from "../scripts/context";

function Projects() {
    const {scrollY, setSection} = useContext(ThemeContext);
    const wrapper = useRef();
    useEffect(() => {
        themeChange(wrapper, scrollY, setSection)
    }, [scrollY, setSection]);

    return (
        <div ref={wrapper} className="section" id="Projects">
            <div className="box center">
                <h2 className="header">Projects:</h2>
            </div>
        </div>
    );
}

export default Projects;