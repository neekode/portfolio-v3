import React, {useRef} from 'react';

function HexDescription() {
    const wrapper = useRef();

    return (
        <div ref={wrapper} className="hexagon-shape center hex-description" id="HexDescription">
            stuff
        </div>
    );
}

export default HexDescription;