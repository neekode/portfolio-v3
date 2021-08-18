import React, {useContext, useEffect, useState, useRef} from "react";
import {ThemeContext} from "../scripts/context";
import Hexagon from "./Hexagon";
import HexDescription from "./HexDescription";

function Banner(props) {
    const {setJobsState, jobsState, index} = props;
    const {section} = useContext(ThemeContext);

    const setExpanded = (e, isDefault) => {
        // Basically this monster evaluates which banner we are currently in, and then mutates the state
        // in the parent (jobsState), as well as mutates the state of all the other jobs. This is
        // just looking ahead for when i eventually add another job into that big ole object in the parent.
        // I imagine the syntax can be simplified. And that I can combine useEffect into this. Aside: need to useCallback more. Definitely useCallback in PokedexTCG
        setJobsState(jobsState.map((job, i) => {
            if (isDefault && i === 0) {
                return {
                    ...job,
                    isElExpanded: true
                }
            } else if (i === index) {
                return {
                    ...job,
                    isElExpanded: !job.isElExpanded
                }
            } else {
                return {
                    ...job,
                    isElExpanded: false
                };
            }
        }));
    }

    useEffect(() => {
        if (section === "Experience" && index === 0) {
            setExpanded(null, true)
        }
    }, [section]);

    return (
        <div onClick={!jobsState[index].isElExpanded ? setExpanded : null}
             className={`${jobsState[index].isElExpanded ? 'banner-expanded' : ''} banner`}>
            <div className='sub-header'>
                {jobsState[index].title}
            </div>
            <div className='row'>
                <div className='col-md-4'>{jobsState[index].description}</div>
                <div className='col-md-4'>{
                    jobsState[index].contributions.map((contribution, i) => {
                        return <Hexagon content={contribution} className={"stuff"} isFromBanner={true}/>
                    })
                }</div>
                <div className='col-md-4'>
                    <HexDescription/>
                </div>
            </div>
        </div>
    );
}

export default Banner;
