import React, {useContext} from "react";
import {ThemeContext} from "./../scripts/context";
import Topic from "./Topic";

function Emblem(props) {
    const {emblem} = props;
    const {section, isMobile} = useContext(ThemeContext);

    return (
        <div className={`${!isMobile ? 'row' : ''} content-section emblem-section`}>
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
                    {/* TODO: add classes programmatically for each topic row.*/}
                    {emblem.topicList.map((listItem, i) => {
                        let className;
                        switch (true) {
                            case i < 2:
                                className = 'topic-row1'
                                break;
                            case i >= 2 && i < 4:
                                className = 'topic-row2'
                                break;
                            case i >= 4 && i < 6:
                                className = 'topic-row3'
                                break;
                            case i >= 6:
                                className = 'topic-row4'
                                break;
                        }
                        return <Topic topic={listItem} className={className}/>
                    })}</div>
            </div>
        </div>
    );
}

export default Emblem;
