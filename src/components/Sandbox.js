import React, {useContext, useEffect, useState} from 'react';
import ezair from "./../assets/ezair.png";
import incentive from "./../assets/incentive.png";
import reservations from "./../assets/reservations.png";
import PrincessBox from "./princess/PrincessBox";
import {useLocation} from "react-router-dom";
import {ThemeContext} from "../scripts/context";
import {themeChange} from "../scripts/library";
/* global BigInt */

const princessObjects = [
        {
            title: "Pre-pay Crew Incentive",
            description: "For your convenience, crew incentive may be pre-paid up to two days prior to your departure",
            img: incentive,
        },
        {
            title: "Princess EZAir",
            description: "Search hassle-free, low price flights, to your embarkation port with included benefits like Late Arrival Protection",
            img: ezair,
        },
        {
            title: "On-Board Reservations",
            description: "Reserve your preferred spa treatments, save on internet packages and book celebrations packages.",
            img: reservations,
        }
    ]
;

function Sandbox() {
    const location = useLocation();
    const {setIsSandbox} = useContext(ThemeContext);
    const [solution, setSolution] = useState("Solution Here!")
    useEffect(() => {
        if (location.pathname === "/sandbox") {
            setIsSandbox(true);
        }
    }, [location])

    /** Current Problem:
     *
     *
     */
    const test1 = 0;
    const someFunction = function () {
        setSolution();
    };
    useEffect(() => someFunction(), []);

    return (
        <div className="section" id="Sandbox">
            <div className="box center">
                <h2 className="header">Sandbox:</h2>
                <span className=''>Here's a little sandbox where I experiment, do coding exercises, etc. </span>

                {/*Currently I'm showcasing a little assignment from Princess Cruiselines:<div className='princess-wrapper'>*/}
                {/*    {princessObjects.map(obj => (<PrincessBox princessObject={obj}/>))}*/}
                {/*</div>*/}

                <div className={'center tests'}>
                    <span>Solution: </span>
                    {solution}
                </div>
            </div>
        </div>
    );
}

export default Sandbox;