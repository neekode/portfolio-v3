import React, {useContext} from "react";
import {ThemeContext} from "./../scripts/context";
import Topic from "./Topic";

function Emblem(props) {
    const {emblem} = props;
    const {section} = useContext(ThemeContext);

    return (
        <div className="row content-section emblem-section">
            <div className="emblem hexagon mx-auto">
                <div className="inner-emblem">
                    {emblem.title}
                </div>
            </div>
            <div
                className={`mx-auto subEmblem ${
                    section === "About" ? "shown" : ""
                }`}
            >
                <div className="inner-emblem inner-emblem-list">
                    {emblem.topicList.map((listItem, i) => {
                        return <Topic topic={listItem}/>
                    })}</div>
            </div>
        </div>
    );
}

export default Emblem;
