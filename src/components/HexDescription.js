import React, {useContext, useRef} from 'react';
import {HexDescriptionContext} from "../scripts/context";

function HexDescription() {
    const wrapper = useRef();
    const {innerText} = useContext(HexDescriptionContext);

    return (
        <div ref={wrapper} className="hexagon-shape center hex-description" id="HexDescription">
            {innerText}
        </div>
    );
}

export default HexDescription;