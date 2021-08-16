import React from "react";
import {useRef, useEffect, useContext} from "react";
import $ from "jquery";
import profilePic from "./../assets/me.JPG";
import facebook from "./../assets/fb.jpg";
import insta from "./../assets/insta.jpg";
import resume from "./../assets/resume.png";
import linked from "./../assets/linked.png";
import Emblem from "./Emblem"
import {ThemeContext} from "./../scripts/context";
import {themeChange} from "./../scripts/library.js";

const emblems = [
    {
        title: "Technologies",
        topicList: ["React Hooks", "ES6 JavaScript", "TypeScript", "AngularJS", "GraphQL", "SASS", "Git", "Jest"],
    },
    {
        title: "Code Contribution",
        topicList: ["Well-Composed", "Pure, Functional", "Modular", "Efficient", "Refined, Refactored", "Adheres to Architecture"]
    },
    {
        title: "Methodology",
        topicList: ["Researches Codebase", "Cooperative Workflow", "Studies Tooling", "Empathetic Solutions", "UX-Educated", "Takes Notes"]
    }
]

function About() {
    const titleMorph = useRef();

    const {scrollY, setSection, section, isMobile} = useContext(ThemeContext);
    const wrapper = useRef();

    useEffect(() => themeChange(wrapper, scrollY, setSection), [scrollY, setSection]);
    useEffect(() => initText(), []);
    const initText = () => {
        const func = () => {
            $(titleMorph.current).Morphext({
                animation: "flipInX",
                separator: "/",
                speed: 2500,
                complete: function () {
                    if (this.index === 5) {
                    }
                },
            });
        };
        return func();
    };

    return (
        <div className={`section ${isMobile ? 'boxMobile' : ''}`} id="About" ref={wrapper}>
            <div className="box center">
                <div className="row">
                    <h3 className={`${isMobile ? 'unshown' : ''} header col-md-4`}> Neeko </h3>
                    <h3 id="about-header" className="header col-md-8">
                        Bio
                    </h3>
                </div>

                <div className="row">
                    <div id="profile-picture" className={`col-md-4 ${isMobile ? 'unshown' : ''}`}>
                        <img className="hexagon" alt="profile" src={profilePic}/>
                        <div className="icon-list">
                            <a href='resume.pdf' download><img className="" alt="profile"
                                                               src={resume}/></a>
                            <a href='https://www.linkedin.com/in/neeko-blomgren-4192aa111/'><img className=""
                                                                                                 alt="profile"
                                                                                                 src={linked}/></a>
                            <a href='https://www.facebook.com/profile.php?id=1014078976'><img className="" alt="profile"
                                                                                              src={facebook}/></a>
                            <a href='https://www.instagram.com/missingneek/?hl=en'><img className="" alt="profile"
                                                                                        src={insta}/></a>
                        </div>
                    </div>

                    <div id="about-content" className="col-md-8">
                        <p>
                            I'm an enthusiastic guy who loves code, bouldering at SBP, and gyros. Currently I'm in
                            between
                            positions and working on personal projects, like this portfolio. Most recently I was in a
                            contract with Microsoft (working on Teams) thru {" "}
                            <a className='link' href="http://allyis.com/">
                                Allyis Inc.{" "}
                            </a>
                            <h3 id="about-header" className="header col-md-8">
                                Skillset
                            </h3>
                        </p>

                        <div className="row">
                            {emblems.map((emblem, i) => <div className="col-md-4 emblem-box"><Emblem
                                emblem={emblems[i]}/></div>)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
