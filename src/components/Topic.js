import React from "react";

function Topic(props) {
    const {topic} = props;

    return (
        <span className='topic hexagon'>
            {topic}
        </span>
    );
}

export default Topic;
