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

  const handleMouseEnter = (e) => {

  }

  const handleMouseLeave = (e) => {
    
  }
    
  return (
    <div className="section" id="About">
        <div className="box center">
          <div className="row">
            <h3 className="header col-md-4"> Neeko Blomgren! </h3>
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
                    in Seattle working with one of Microsoft's Partner Contractors: <a id='allyis-link' href="http://allyis.com/"> Allyis.  </a>
                     </p>
                    <div className='row content-section emblem-section'>
                        <div className='col-md-3 emblem hexagon mx-auto'> <div className="inner-emblem-text"> Refined, Functional, Refactorable Code </div> </div>
                        <div className='col-md-3 emblem hexagon mx-auto'> <div className="inner-emblem-text"> Evolves w/ Modern Technologies & Patterns </div> </div>
                        <div className='col-md-3 emblem hexagon mx-auto'> <div className="inner-emblem-text"> UX Design Educational Background  </div> </div>
                    </div>

                    <div className='row content-section emblem-section'> 
                        <div className={`col-md-3 hexagon2 mx-auto ${ state.section === 'About' ? 'subEmblem shown' : 'subEmblem' }`}> <div className="inner-emblem-text"> Modular ES6 JavaScript </div> </div>
                        <div className={`col-md-3 hexagon2 mx-auto ${ state.section === 'About' ? 'subEmblem shown' : 'subEmblem' }`}> <div className="inner-emblem-text"> Composable React (Hooks) </div> </div>
                        <div className={`col-md-3 hexagon2 mx-auto ${ state.section === 'About' ? 'subEmblem shown' : 'subEmblem' }`}> <div className="inner-emblem-text"> Human-centered Design </div> </div>
                    </div>

                    <div className='row content-section emblem-section'> 
                        <div className={`col-md-3 hexagon2 mx-auto ${ state.section === 'About' ? 'subEmblem2 shown2' : 'subEmblem2' }`}> <div className="inner-emblem-text"> SASS / HTML5 / CSS3 </div> </div>
                        <div className={`col-md-3 hexagon2 mx-auto ${ state.section === 'About' ? 'subEmblem2 shown2' : 'subEmblem2' }`}> <div className="inner-emblem-text"> jQuery / Webpack / Bootstrap </div> </div>
                        <div className={`col-md-3 hexagon2 mx-auto ${ state.section === 'About' ? 'subEmblem2 shown2' : 'subEmblem2' }`}> <div className="inner-emblem-text"> Eye for Precise Aesthethics </div> </div>
                    </div>

                </div>
              </div>
        </div>
    </div>
  );
}

export default About;