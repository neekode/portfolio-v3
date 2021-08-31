import React, {useContext, useState} from "react";
import {HexDescriptionContext, ThemeContext} from "../scripts/context";

function InnerHexagon(props) {
    const {innerContent} = props;
    const {setInnerText} = useContext(HexDescriptionContext);

    const handleMouseOver = () => {
        setInnerText(innerContent.expanded);
    }

    return (<div onMouseOver={handleMouseOver} className={'innerHex'}>{innerContent.name}</div>)

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
