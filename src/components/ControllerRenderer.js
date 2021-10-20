import React from "react";
import {useContext, useState} from "react";
import {ThemeContext} from "../scripts/context";
import {controllerInputs} from "./../scripts/library";
import ControllerInput from "./ControllerInput";

function ControllerRenderer(props) {
    const {scrollY, isMobile, isSandbox} = useContext(ThemeContext);
    const {setBallpitVars, ballpitVars, handleRandomize, handleRender, warning, setWarning} = props;
    const [isLimited, setIsLimited] = useState(true);

    const handleChange = (e, limit) => {
        let val = e.target.value;
        let isWarning = limit(val);
        setWarning({...warning, [e.target.id]: isWarning});
        setBallpitVars({...ballpitVars, [e.target.id]: val});
    };

    const handleSetLimit = (e) => {
        setIsLimited(!isLimited)
    }

    return (
        <div id="Controller" className={`${isSandbox ? 'unshown' : ''}`}>
            <div
                className={`animation-controller ${scrollY > 100 && !isMobile ? 'animation-controller-hidden' : ''} ${isMobile ? 'animation-controller-mobile' : ''}`}>
                <span className="header"> Animation Controller <span className={"sub-header"}><input type="checkbox"
                                                                                                     checked={isLimited}
                                                                                                     onChange={handleSetLimit}/> Limits </span></span>

                {controllerInputs.map((input) => <ControllerInput input={input} warning={warning[input.id]}
                                                                  handleChange={handleChange} isLimited={isLimited}
                                                                  ballpitVar={ballpitVars[input.id]}/>)}
                <div>
                    <button onClick={handleRandomize} id="randomer" name="random">
                        Randomize
                    </button>
                    <button disabled={warning.amount || warning.radius || warning.speed} onClick={handleRender}
                            id="renderer" name="render">
                        Re-Render
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ControllerRenderer;
