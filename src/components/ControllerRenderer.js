import React from "react";
import {useContext, useState} from "react";
import {ThemeContext} from "../scripts/context";

function ControllerRenderer(props) {
    const {scrollY, isMobile, isSandbox} = useContext(ThemeContext);
    const {setBallpitVars, ballpitVars, handleRandomize, handleRender, warning, setWarning} = props;
    const [isLimited, setIsLimited] = useState(true);

    const handleChange = (e) => {
        let val = e.target.value;
        let isWarning = false;
        // Is there a way to simplify this? use a map or something i think.
        switch (e.target.id) {
            case "amount":
                isWarning = val > 20000 || val < 1;
                break;
            case "radius":
                isWarning = val > 500 || val < 0.05;
                break;
            case "speed":
                isWarning = val > 5 || val < 0;
                break;
            default:
                break;
        }
        setWarning({...warning, [e.target.id]: isWarning});
        setBallpitVars({...ballpitVars, [e.target.id]: val});
    };

    const handleSetLimit = (e) => {
        setIsLimited(!isLimited)
    }

    return (
        <div id="Controller" className={`${isSandbox ? 'unshown' : ''}`}>
            <div
                className={`animation-controller ${scrollY > 100 && !isMobile ? 'animation-controller-hidden' : ''} ${isMobile ? 'animation-controller-mobile' : ''}`}
            >
                <span className="header"> Animation Controller <span className={"sub-header"}><input type="checkbox"
                                                                                                     checked={isLimited}
                                                                                                     onChange={handleSetLimit}/> Limits </span></span>
                <div> Amount <span style={{color: `${warning.amount ? 'red' : '#94A1B6'}`}}
                                   className={'limit'}>{isLimited ? `(1 < x < 20000)` : ''}</span></div>

                <input
                    onChange={handleChange}
                    id="amount"
                    value={ballpitVars.amount}
                    type="text"
                />

                <div> Radius Coefficient <span style={{color: `${warning.radius ? 'red' : '#94A1B6'}`}}
                                               className={'limit'}>{isLimited ? `(.05 < x < 500)` : ''}</span></div>

                <input
                    onChange={handleChange}
                    id="radius"
                    value={ballpitVars.radius}
                    type="text"
                />
                <div> Speed <span style={{color: `${warning.speed ? 'red' : '#94A1B6'}`}}
                                  className={'limit'}>{isLimited ? `(0 < x < 5)` : ''}</span></div>

                <input
                    onChange={handleChange}
                    id="speed"
                    value={ballpitVars.speed}
                    type="text"
                />

                <br/>
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
