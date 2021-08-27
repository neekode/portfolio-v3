import React, {useContext, useState} from "react";
import {HexDescriptionContext, ThemeContext} from "../scripts/context";

function InnerHexagon(props) {
    const {innerContent} = props;
    const {setInnerText} = useContext(HexDescriptionContext);

    const handleClick = () => {
        setInnerText(innerContent.expanded);
    }

    return (<div onClick={handleClick} className={'innerHex'}>{innerContent.name}</div>)

}

function Hexagon(props) {
    const {content, className, isFromBanner} = props;
    const {section} = useContext(ThemeContext);

    let hexContent;

    if (isFromBanner) {
        hexContent = (<InnerHexagon innerContent={content}/>)
    } else {
        hexContent = content;
    }

    return (
        <span className={`${section === 'About' ? className + '-shown' : {className}} hexagon`}>
            {hexContent}
        </span>
    );
}

export default Hexagon;
