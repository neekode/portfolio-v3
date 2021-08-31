import React, {useContext, useRef} from 'react';
import {HexDescriptionContext} from "../scripts/context";

function HexDescription(props) {
    const isExpanded = {props};
    const wrapper = useRef();
    const {innerText} = useContext(HexDescriptionContext);

    return (
        <div ref={wrapper}
             className={`hexagon-shape center hex-description ${innerText ? 'hex-description-expanded' : ''}`}
             id="HexDescription">
            {innerText ? innerText : "Select a Contribution!"}
        </div>
    );
}

export default HexDescription;