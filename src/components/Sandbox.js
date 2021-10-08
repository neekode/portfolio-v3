import React, {useContext, useEffect, useState} from 'react';
import ezair from "./../assets/ezair.png";
import incentive from "./../assets/incentive.png";
import reservations from "./../assets/reservations.png";
import PrincessBox from "./princess/PrincessBox";
import {useLocation} from "react-router-dom";
import {ThemeContext} from "../scripts/context";
import {themeChange} from "../scripts/library";

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
     * You are given a large integer represented as an integer array digits,
     * where each digits[i] is the ith digit of the integer.
     * The digits are ordered from most significant to least significant
     * in left-to-right order. The large integer does not contain any leading 0's.
     */
        // What's wrong with this test? why do the last digits become zeroes?
        // I'm pretty sure it becomes a bigint and parseInt cant handle that? Keep working.
    const test1 = [6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]
    const plusOne = function (digits) {
        let asString = digits.join('');

        // if (asString.length > 16) {
        //     let big = BigInt(asString)
        //     parseInt(big);
        // } else {
        //     parseInt(asString);
        // }
        let asInt = parseInt(asString);
        asInt++;
        let asString2 = asInt.toString();
        let asArray = asString2.split('');
        setSolution(asArray);
    };
    useEffect(() => plusOne(test1), []);

    return (
        <div className="section" id="Sandbox">
            <div className="box center">
                <h2 className="header">Sandbox:</h2>
                <span className=''>Here's a little sandbox where I experiment, do coding exercises, etc. Currently I'm showcasing a little assignment from Princess Cruiselines:</span>

                <div className='princess-wrapper'>
                    {princessObjects.map(obj => (<PrincessBox princessObject={obj}/>))}
                </div>

                <div className={'center tests'}>
                    <span>Leetcode practice: </span>
                    {solution}
                </div>
            </div>
        </div>
    );
}

export default Sandbox;