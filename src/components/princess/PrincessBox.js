import React from 'react';

function PrincessBox(props) {
    const {princessObject} = props;

    return (
        <div className='princess-box'>
            <img alt="princes box img" src={princessObject.img}/>
            <div className='text-box'>
                <h6>{princessObject.title}</h6>
                <span>{princessObject.description}</span>
            </div>
        </div>
    );
}

export default PrincessBox;
