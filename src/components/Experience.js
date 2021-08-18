import React, {useState} from "react";
import {useContext, useEffect, useRef} from "react";
import {ThemeContext} from "../scripts/context";
import {themeChange} from "../scripts/library";
import Banner from "./Banner";

const jobs = [
    {
        title: "Microsoft (Allyis Contract)",
        isElExpanded: false,
        description: "Worked on Microsoft Teams Rooms, MS's smart conference room solution. Developed UI for the meeting room console and was a major contributor in its migration from AngularJS to React. Occasionally Floated to the Desktop client",
        contributions: [{
            name: "Layout Switcher UI",
            expanded: "Built in AngularJS, "
        }, {
            name: "PTZ Camera Control UI",
            expanded: "Work in both AngularJS and React Repos. Added GraphQL Config (Mutation, Connected two repos thru CDL,"
        }, {
            name: "Background Image Effect",
            expanded: ""
        }, {
            name: "",
            expanded: ""
        }]
    },
    {
        title: "People Tech Group",
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
                    return <Banner jobsState={jobsState} setJobsState={setJobsState} index={i}/>
                })}
            </div>
        </div>
    );
}

export default Experience;
