import React from "react";
import {useRef, useEffect, useContext} from "react";
import $ from "jquery";
import profilePic from "./../assets/me.JPG";
import Emblem from "./Emblem"
import {ThemeContext} from "./../scripts/context";
import {themeChange} from "./../scripts/library.js";

const emblems = [
    {
        title: "Technologies",
        list1: "React Hooks, ES6, TypeScript, AngularJS",
        list2: "GraphQL, SASS, Git, Jasmine, Jest"
    },
    {
        title: "Methodology",
        list1: "Modular, Refined, Well-Composed, Functional Code",
        list2: "Independent, great, and stuff"
    },
    {
        title: "Practices",
        list1: "Always Refactoring, something, something",
        list2: "Filler while i think of something else"
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
                    <h3 className={`${isMobile ? 'unshown' : ''} header col-md-4`}> Neeko Blomgren </h3>
                    <h3 id="about-header" className="header col-md-8">
                        Bio
                    </h3>
                </div>

                <div className="row">
                    <div id="profile-picture" className={`col-md-4 ${isMobile ? 'unshown' : ''}`}>
                        <img className=" hexagon" alt="down chevs" src={profilePic}/>
                        <div className="sub-header" ref={titleMorph}>
                            Front-End Specialist / with a UX background / who loves to build
                            things / from Seattle, WA
                        </div>
                    </div>

                    <div id="about-content" className="col-md-8">
                        <p>
                            I'm an enthusiastic guy who loves code, bouldering at SBP, and gyros. Currently I'm in
                            between
                            positions and working on personal projects. Most recently I was in a contract with
                            Microsoft thru:
                            <a id="allyis-link" href="http://allyis.com/">
                                Allyis.{" "}
                            </a>
                            Here's some of my skillset:
                        </p>

                        <div className="row">
                            <div className="col-md-4 emblem-box">
                                <Emblem emblem={emblems[0]}/>
                            </div>
                            <div className="col-md-4 emblem-box">
                                <Emblem emblem={emblems[1]}/>
                            </div>
                            <div className="col-md-4 emblem-box">
                                <Emblem emblem={emblems[2]}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
