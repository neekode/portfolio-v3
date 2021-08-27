import React, {useState} from "react";
import {useContext, useEffect, useRef} from "react";
import {HexDescriptionProvider, ThemeContext} from "../scripts/context";
import {themeChange} from "../scripts/library";
import Banner from "./Banner";

const jobs = [
    {
        title: "Microsoft (Allyis Contract)",
        isElExpanded: false,
        description: "Worked on Microsoft Teams Rooms, MS's smart conference room solution. Developed UI for the meeting room console and front-of-room screens, and was a major contributor in the application's migration from AngularJS to React Hooks. Occasionally floated to work on the desktop client. Reference: Naved Rangwala (naved.rangwala@something.com)",
        contributions: [{
            name: "Meeting Info, Clock",
            expanded: "Migration Work--Helped build a meeting info module which used context and queries to pull info such as meeting name and duration. Also solo-developed the clock display piece."
        }, {
            name: "Meeting More Menu",
            expanded: "Migration Work--Helped build a meeting info module which used context and queries to pull info such as meeting name and duration. Also solo-developed the clock display piece."
        }, {
            name: "Layout Switcher UI",
            expanded: "Built in AngularJS. Utilized modal framework to render a dialog which prompts user to change front-of-room screen's layout."
        }, {
            name: "PTZ Camera Control",
            expanded: "Work in both AngularJS and React Repos. Added GraphQL Config (Mutation, Connected two repos thru CDL,"
        }, {
            name: "Background Image Effect",
            expanded: "Desktop client work; bug-fixed added telemetry"
        }, {
            name: "",
            expanded: ""
        }]
    },
    {
        title: "People Tech Group",
        isElExpanded: false,
        description: "Worked on CPRS, a claim management app contracted from Costco and other designed for ",
        contributions: [{
            name: "",
            expanded: ""
        }, {
            name: "",
            expanded: ""
        },
            {
                name: "",
                expanded: ""
            }]
    },
    {
        title: "Freelance",
        isElExpanded: false,
        description: "",
        contributions: [{
            name: "",
            expanded: ""
        }, {
            name: "",
            expanded: ""
        },
            {
                name: "",
                expanded: ""
            }]
    }
]

function Experience() {
    const {scrollY, setSection} = useContext(ThemeContext);
    const [jobsState, setJobsState] = useState(jobs);
    const wrapper = useRef();
    useEffect(() => themeChange(wrapper, scrollY, setSection), [scrollY, setSection]);

    return (
        <div className="section" id="Experience" ref={wrapper}>
            <div className="box center">
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
