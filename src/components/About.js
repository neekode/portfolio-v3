import React from 'react';
import { profPic } from './../assets/me.jpg'

import useImage from 'use-image';

function About() {
  //const profPic = useImage('./../assets/rome forum.jpg');
    
  return (
    <div className="section" id="About">
        <div className="container center">
              <h2 id="about-header" className="header">About:</h2>
              <h3 id="about-sub-header" className="sub-header"> 
                about </h3>
              
              <div id="profile-picture">
                <img className='down-chevs' alt='down chevs' src={profPic} />
                <span> This is me! </span>
              </div>
        </div>
    </div>
  );
}

export default About;