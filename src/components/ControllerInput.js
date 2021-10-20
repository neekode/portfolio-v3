import React from "react";

function ControllerInput(props) {
    const {input, warning, handleChange, isLimited, ballpitVar} = props;
    return (
        <div>
            <div> {input.title} <span style={{color: `${warning ? 'red' : '#94A1B6'}`}}
                                      className={'limit'}>{isLimited ? input.limitString : ''}</span></div>
            <input
                onChange={(e) => handleChange(e, input.limit)}
                id={input.id}
                value={ballpitVar}
                type="text"
            />
        </div>
    );
}

export default ControllerInput;
