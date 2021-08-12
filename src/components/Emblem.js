import React, {useContext} from "react";
import {ThemeContext} from "./../scripts/context";

function Emblem(props) {
    const {emblem} = props;
    const {section} = useContext(ThemeContext);

    return (
        <div className="row content-section emblem-section">
            <div className="emblem hexagon mx-auto">
                <div className="inner-emblem-text">
                    {emblem.title}
                </div>
            </div>
            <div
                className={`hexagon2 mx-auto subEmblem ${
                    section === "About" ? "shown" : ""
                }`}
            >
                <div className="inner-emblem-text">{emblem.list1}</div>
            </div>
            <div
                className={`hexagon2 mx-auto subEmblem ${
                    section === "About" ? "shown" : ""
                }`}
            >
                <div className="inner-emblem-text">{emblem.list2}</div>
            </div>
        </div>
    );
}

export default Emblem;
