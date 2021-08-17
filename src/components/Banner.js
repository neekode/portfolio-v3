import React, {useState} from "react";
import Hexagon from "./Hexagon";

function Banner(props) {
    const {job} = props;
    const [expanded, setExpanded] = useState(false);
    // const handleMouseEnter = () => setExpanded(true);
    const handleMouseLeave = () => setExpanded(false);

    return (
        <div onClick={() => setExpanded(!expanded)} onMouseLeave={handleMouseLeave}
             className={`${expanded ? 'banner-expanded' : ''} banner`}>
            <div className='sub-header'>
                {job.title}
            </div>
            <div className='row'>
                <div className='col-md-4'>{job.description}</div>
                <div className='col-md-4'>{
                    job.contributions.map((contribution, i) => {
                        return <Hexagon content={contribution} className={"stuff"} isFromBanner={true}/>
                    })
                }</div>
                <div className='col-md-4'> stuff</div>
            </div>
        </div>
    );
}

export default Banner;
