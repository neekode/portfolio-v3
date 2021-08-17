import React from "react";
import {useContext, useEffect, useRef} from "react";
import {ThemeContext} from "../scripts/context";
import {themeChange} from "../scripts/library";
import Banner from "./Banner";

const jobs = [
    {
        title: "Microsoft (Allyis Contract)",
        description: "Worked on Microsoft Teams Rooms, MS's smart conference room solution. Developed UI for the meeting room console and was a major contributor in its migration from AngularJS to React. Occasionally Floated to the Desktop client",
        contributions: [{
            name: "Layout Switcher UI",
            expanded: "Added GraphQL Config, Connected two repos thru CDL,"
        }, {
            name: "PTZ Camera Control UI",
            expanded: ""
        }, {
            name: "",
            expanded: ""
        }]
    },
    {
        title: "People Tech Group",
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
    const {scrollY, setSection, section} = useContext(ThemeContext);
    const wrapper = useRef();
    useEffect(() => themeChange(wrapper, scrollY, setSection), [scrollY, setSection]);

    return (
        <div className="section" id="Experience" ref={wrapper}>
            <div className="box center">
                {jobs.map((job, i) => {
                    return <Banner job={job}/>
                })}
            </div>
        </div>
    );
}

export default Experience;
