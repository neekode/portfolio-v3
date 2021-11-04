import React, {useState} from "react";

function Project(props) {
    const {project} = props
    const [showList, setShowList] = useState(true);

    return project.isExpanded ? (
        <div className={'project'}>
            {project.description}
        </div>
    ) : '';
}

export default Project;
