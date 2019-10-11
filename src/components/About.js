import React from 'react';
import {useRef, useEffect} from 'react';
import $ from 'jquery';
import profilePic from './../assets/me.JPG';

function About() {
  debugger;
  const titleMorph = useRef();

  useEffect(() => initText(), []);
  const initText = () => {
    const func = () => {
      $(titleMorph.current).Morphext({
        animation: "flipInX",
        separator: "/",
        speed: 2500,
        complete: function () {
          if (this.index === 5) {
          }
        }
      });
      //ref={subHeader}
    }
    return func();
  }
    
  return (
    <div className="section" id="About">
        <div className="box center">
        <div className="row">
          <div className="col-md-4"> </div>
          <h2 id="about-header" className="header row col-md-8">Who, Me?</h2>
        </div>
              
              
              <div className="row">
                <div id="profile-picture" className="col-md-4">
                  <img className='down-chevs' alt='down chevs' src={profilePic} />
                  <h6 className="sub-header" ref={titleMorph} > 
                    Front-End Specialist / 
                    with a UX background /
                    who loves to build things /
                    from Seattle, WA
                </h6>
                </div>

                <div id='about-content' className="col-md-8"></div>
              </div>
        </div>
    </div>
  );
}

export default About;