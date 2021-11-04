import React, {useRef, useEffect, useContext, useState} from 'react';
import {themeChange} from "../scripts/library";
import {ThemeContext} from "../scripts/context";
import Project from "./Project"

const projects = [{
    title: 'neekode.com',
    isExpanded: false,
    description: 'stuff1'
}, {
    title: 'pokedextcg.com',
    isExpanded: false,
    description: 'stuff2'
}]

function Projects() {
    const {scrollY, setSection} = useContext(ThemeContext);
    const [showList, setShowList] = useState(true);
    const [projectsState, setProjectsState] = useState(projects);
    const wrapper = useRef();
    useEffect(() => {
        themeChange(wrapper, scrollY, setSection)
    }, [scrollY, setSection]);

    const handleProjectVisible = (index, showAsList) => {

        setProjectsState([...projectsState].map((proj, i) => {
            if (index === i) {
                return {
                    ...proj,
                    isExpanded: true
                }
            } else if (showAsList) {
                return {
                    ...proj,
                    isExpanded: false
                }
            } else return proj
        }))
        setShowList(!showList)
    }

    const showAsList = () => projectsState.some(obj => obj.isExpanded)

    return (
        <div ref={wrapper} className="section" id="Projects">
            <div className="box center">
                <h2 className="header">Projects:</h2>

                <div className={'wrapper'}>
                    {showAsList() ? <button onClick={() => handleProjectVisible(-1, true)}>button</button> : ''}

                    {
                        !showAsList() ? projectsState.map((obj, index) => (
                            <div className={'thumbnail'}
                                 onClick={() => handleProjectVisible(index, false)}>
                                <div className={'title'}>{obj.title}</div>
                            </div>
                        )) : projectsState.map((obj) => (<Project project={obj}/>))
                    }
                </div>
            </div>
        </div>
    );
}

export default Projects;