import React from "react";
import {useContext, useState} from "react";
import {ThemeContext} from "../scripts/context";

function ControllerRenderer(props) {
    const {scrollY, isMobile, isSandbox} = useContext(ThemeContext);
    const {setBallpitVars, ballpitVars, handleRandomize, handleRender} = props;
    const [isLimited, setIsLimited] = useState(true);
    const [warning, setWarning] = useState({amount: false, radius: false, speed: false});

    /**
     * TODO: Needs to be refactored! i failed to consider the scenario of the randomizer.
     * randomizer doesn't take this into consideration so when the warnings are on,
     * then user hits randomize, the warnings dont turn off.
     * The state should probably be in the higher component anyway, maybe it could help with the scenario i'm
     * struggling with of turning off individual warnings after the limits been satisfied for only one.
     */
    const handleLimitedRender = () => {
        let render = true;
        if (ballpitVars.amount > 20000 || ballpitVars.amount < 1) {
            setWarning({...warning, amount: true});
            render = false;
        }
        if (ballpitVars.radius > 500 || ballpitVars.radius < 0.05) {
            setWarning({...warning, radius: true});
            render = false;
        }
        if (ballpitVars.speed > 5 || ballpitVars.speed < 0) {
            setWarning({...warning, speed: true});
            render = false;
        }
        if (render) {
            handleRender();
            setWarning({amount: false, radius: false, speed: false});
        }
    }

    const handleAmtChange = (e) => {
        setBallpitVars({...ballpitVars, amount: e.target.value});
    };

    const handleRadChange = (e) => {
        setBallpitVars({...ballpitVars, radius: e.target.value});
    };

    const handleSpdChange = (e) => {
        setBallpitVars({...ballpitVars, speed: e.target.value});
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
                    onChange={handleAmtChange}
                    id="amtInput"
                    value={ballpitVars.amount}
                    type="text"
                />

                <div> Radius Coefficient <span style={{color: `${warning.radius ? 'red' : '#94A1B6'}`}}
                                               className={'limit'}>{isLimited ? `(.05 < x < 500)` : ''}</span></div>

                <input
                    onChange={handleRadChange}
                    id="radInput"
                    value={ballpitVars.radius}
                    type="text"
                />
                <div> Speed <span style={{color: `${warning.speed ? 'red' : '#94A1B6'}`}}
                                  className={'limit'}>{isLimited ? `(0 < x < 5)` : ''}</span></div>

                <input
                    onChange={handleSpdChange}
                    id="spdInput"
                    value={ballpitVars.speed}
                    type="text"
                />

                <br/>
                <div>
                    <button onClick={handleRandomize} id="randomer" name="random">
                        Randomize
                    </button>
                    <button onClick={handleLimitedRender} id="renderer" name="render">
                        Re-Render
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ControllerRenderer;
