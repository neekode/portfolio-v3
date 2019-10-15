import React from 'react';
import {useRef, useEffect} from 'react';
import $ from 'jquery';
import profilePic from './../assets/me.JPG';

function About() {
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
                  <img className=' hexagon' alt='down chevs' src={profilePic} />
                  <div className="sub-header" ref={titleMorph} > 
                    Front-End Specialist / 
                    with a UX background /
                    who loves to build things /
                    from Seattle, WA
                  </div>
                </div>

                <div id='about-content' className="col-md-8">
                    <p>
                     I'm an enthusiastic guy who loves building things with code, bouldering, and gyros. Currently I'm 
                    in Seattle looking for work, shoot me a message if you'd like to talk UI.
                     </p>
                    <div className='row content-section emblem-section'>
                        <span className='col-md-3 emblem hexagon'> Writes Composable and Functional Code </span>
                        <span className='col-md-3 emblem hexagon'> Evolves w/ Modern Technologies & Patterns </span>
                        <span className='col-md-3 emblem hexagon'> Consistently refactors and rethinks solutions </span>
                        
                    </div>

                    {/* <div id='technologies' className='row content-section' >
                        <div className='col-md-9'> Front-end Specialist </div>
                        <div className='col-md-3'> UX Designs </div>
                    </div>

                    <div id='other' className='row content-section'>
                        <div className='col-md-3'> Front-end Specialist </div>
                        <div className='col-md-9'> Using React Hooks, ES6 </div>
                    </div> */}

                </div>
              </div>
        </div>
    </div>
  );
}

export default About;