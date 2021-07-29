import React from "react";

import $ from "jquery";
import {useContext, useEffect, useState, useRef} from "react";
import xIcon from "./../assets/x-icon.svg";
import {ThemeContext} from "../scripts/context";
import {themeChange} from "../scripts/library";

function Experience() {
    const [expanded, setExpanded] = useState(false);
    const {scrollY, setSection, section} = useContext(ThemeContext);
    const wrapper = useRef();
    useEffect(() => themeChange(wrapper, scrollY, setSection), [scrollY]);

    const handleClick = (e) => {
        let elId = e.target.id;

        setExpanded(true);

        // THIS IS SHITTY. refactor it!!!
        switch (elId) {
            case "personal-proj": {
                $("#personal-proj").removeClass("col-md-4");
                $("#personal-proj").addClass("col-md-12");

                $("#work-exp").addClass("unshown");
                $("#widgets-features").addClass("unshown");
                break;
            }

            case "work-exp": {
                $("#work-exp").removeClass("col-md-4");
                $("#work-exp").addClass("col-md-12");

                $("#personal-proj").addClass("unshown");
                $("#widgets-features").addClass("unshown");
                break;
            }

            case "widgets-features": {
                $("#widgets-features").removeClass("col-md-4");
                $("#widgets-features").addClass("col-md-12");

                $("#personal-proj").addClass("unshown");
                $("#work-exp").addClass("unshown");
                break;
            }

            case "x-icon": {
                setExpanded(false);
                $(".experience-section").removeClass("col-md-12 unshown");
                $(".experience-section").addClass("col-md-4");

                break;
            }

            default:
                break;
        }
    };

    return (
        <div className="section" id="Experience" ref={wrapper}>
            <div className="box center">
                <h2 id="experience-header" className="header center">
                    Professional Experience:
                </h2>
                <div id="experience-content" className="row">
                    <img
                        id="x-icon"
                        onClick={handleClick}
                        className={`x-icon ${expanded ? "" : "unshown"}`}
                        alt="x-icon"
                        src={xIcon}
                    />
                    <div
                        id="personal-proj"
                        className="experience-section col-md-6"
                        onClick={handleClick}
                    >
                        <h3 id="experience-sub-header" className="sub-header">
                            Microsoft (1yr 8mon)
                        </h3>

                        <div className="content-section">
                            <div className="row">
                                <div className="col-md-5 mx-auto emblem hexagon">
                                    <div className="inner-emblem-text">
                                        {" "}
                                        CPRS (Costco Contract)
                                    </div>
                                </div>
                                <div className="col-md-5 mx-auto emblem hexagon">
                                    <div className="inner-emblem-text"> Ballpit Animation</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        id="work-exp"
                        className="experience-section col-md-6"
                        onClick={handleClick}
                    >
                        <h3 id="experience-sub-header" className="sub-header">
                            People Tech Group (8mon)
                        </h3>

                        <div className="content-section ">
                            <div className="row">
                                <div className="col-md-5 mx-auto emblem hexagon">
                                    <div className="inner-emblem-text"> Costco</div>
                                </div>
                                <div className="col-md-5 mx-auto emblem hexagon">
                                    <div className="inner-emblem-text"> WSIB</div>
                                </div>
                            </div>
                            <div className="col-md-5 mx-auto emblem hexagon">
                                <div className="inner-emblem-text"> Beautiful Hedges</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Experience;
