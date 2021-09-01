import React, {useContext} from 'react';
import {ThemeContext} from "../scripts/context";
import code from "../assets/code.png";
import person from "../assets/person.png";

function SandboxButton() {
    const {scrollY, isMobile, setIsSandbox, isSandbox} = useContext(ThemeContext);
    const handleClick = () => {
        setIsSandbox(!isSandbox)
    }

    return (
        <div onClick={handleClick}
             className={`${scrollY > 100 && !isMobile ? 'sandbox-button-hidden' : ''} sandbox-button chev-box`}><img
            className="" alt="profile"
            src={isSandbox ? person : code}/></div>
    );
}

export default SandboxButton;