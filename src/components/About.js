import React from 'react';
import {useRef, useEffect, useContext, useState} from 'react';
import $ from 'jquery';
import profilePic from './../assets/me.JPG';

import Context from './../scripts/context';


function About() {
  const titleMorph = useRef();

  const { state } = useContext( Context );

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
            <h3 className="header col-md-4"> Neeko Blomgren </h3>
            <h3 id="about-header" className="header col-md-8">Who, Me?</h3>
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
                     I'm an enthusiastic guy who loves to build things with code, boulder at the local climbing gym, and eat gyros. Currently I'm 
                    in Seattle looking for work, shoot me a message if you'd like to talk UI.
                     </p>
                    <div className='row content-section emblem-section'>
                        <div className='col-md-3 emblem hexagon'> <h5> Composable, Functional, Refactorable Code </h5> </div>
                        <div className='col-md-3 emblem hexagon'> <h5> Evolves w/ Modern Technologies & Patterns </h5> </div>
                        <div className='col-md-3 emblem hexagon'> <h5> UX Design Educational Background  </h5> </div>
                    </div>

                    <div className='row content-section emblem-section'> 
                        <div className={`col-md-3 hexagon2 ${ state.section === 'About' ? 'subEmblem shown' : 'subEmblem' }`}> <h5> Modular ES6 JavaScript </h5> </div>
                        <div className={`col-md-3 hexagon2 ${ state.section === 'About' ? 'subEmblem shown' : 'subEmblem' }`}> <h5> Well-Composed React (using Hooks) </h5> </div>
                        <div className={`col-md-3 hexagon2 ${ state.section === 'About' ? 'subEmblem shown' : 'subEmblem' }`}> <h5> Human-centered Design </h5> </div>
                    </div>

                    <div className='row content-section emblem-section'> 
                        <div className={`col-md-3 hexagon2 ${ state.section === 'About' ? 'subEmblem2 shown2' : 'subEmblem2' }`}> <h5> SASS / HTML5 / CSS3 </h5> </div>
                        <div className={`col-md-3 hexagon2 ${ state.section === 'About' ? 'subEmblem2 shown2' : 'subEmblem2' }`}> <h5> jQuery & KendoUI </h5> </div>
                        <div className={`col-md-3 hexagon2 ${ state.section === 'About' ? 'subEmblem2 shown2' : 'subEmblem2' }`}> <h5> Eye for Precise Aesthethics </h5> </div>
                    </div>

                </div>
              </div>
        </div>
    </div>
  );
}

export default About;