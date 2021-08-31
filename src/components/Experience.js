import React, {useState} from "react";
import {useContext, useEffect, useRef} from "react";
import {HexDescriptionProvider, ThemeContext} from "../scripts/context";
import {themeChange} from "../scripts/library";
import Banner from "./Banner";
import {jobs} from "./../scripts/library"

function Experience() {
    const {scrollY, setSection, isMobile} = useContext(ThemeContext);
    const [jobsState, setJobsState] = useState(jobs);
    const wrapper = useRef();
    useEffect(() => themeChange(wrapper, scrollY, setSection), [scrollY, setSection]);

    return (
        <div className="section" id="Experience" ref={wrapper}>
            <div className={`${isMobile ? 'boxMobile' : ''} box center`}>
                <h2 className='header'>Professional Experience</h2>
                {jobsState.map((job, i) => {
                    return (
                        <HexDescriptionProvider>
                            <Banner jobsState={jobsState} setJobsState={setJobsState} index={i}/>
                        </HexDescriptionProvider>
                    )
                })}
            </div>
        </div>
    );
}

export default Experience;
