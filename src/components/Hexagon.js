import React, {useContext, useState} from "react";
import {ThemeContext} from "../scripts/context";

function InnerHexagon(props) {
    const [expanded, setExpanded] = useState(false);
    const {innerContent} = props;

    const handleClick = () => {
        setExpanded(true);
    }

    return (<div onClick={handleClick} className={'innerHex'}>
        <div>{innerContent.name}</div>
        <div className={`${expanded ? '' : 'unshown'} expandable`}>{innerContent.expanded}</div>
    </div>)

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
