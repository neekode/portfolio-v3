import React, {useEffect, useState} from 'react';
import ezair from "./../assets/ezair.png";
import incentive from "./../assets/incentive.png";
import reservations from "./../assets/reservations.png";
import PrincessBox from "./princess/PrincessBox";

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
    const [solution, setSolution] = useState("Solution Here!")
    /** Current Problem:
     * Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once.
     * The relative order of the elements should be kept the same.
     Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums.
     More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result.
     It does not matter what you leave beyond the first k elements.
     */
    const removeDupes = () => {
        // setSolution("Solution Here")
    }
    useEffect(removeDupes, []);

    return (
        <div className="section" id="Sandbox">
            <div className="box center">
                <h2 className="header">Sandbox:</h2>
                <span className=''>Here's a little sandbox where I experiment, do coding exercises, etc. Currently I'm showcasing a little assignment from Princess Cruiselines:</span>

                <div className='princess-wrapper'>
                    {princessObjects.map(obj => (<PrincessBox princessObject={obj}/>))}
                </div>

                <div className={'center tests'}>
                    {solution}
                </div>
            </div>
        </div>
    );
}

export default Sandbox;