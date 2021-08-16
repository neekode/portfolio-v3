import React, {useContext} from "react";
import {ThemeContext} from "../scripts/context";

function Topic(props) {
    const {topic, className} = props;
    const {section} = useContext(ThemeContext);

    return (
        <span className={`${section === 'About' ? className + '-shown' : ''} topic hexagon`}>
            {topic}
        </span>
    );
}

export default Topic;
