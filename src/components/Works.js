import React from "react";

import $ from 'jquery';
import { useContext, useEffect, useState } from 'react';
import xIcon from './../assets/x-icon.svg';

function Works() {

  const [expanded, setExpanded ] = useState(false);

  const handleClick = (e) => {
    let elId = e.target.id;

    setExpanded(true);

    // THIS IS SHITTY. refactor it!!!
    switch(elId) {
      case 'personal-proj': {
        $('#personal-proj').removeClass('col-md-4');
        $('#personal-proj').addClass('col-md-12');

        $('#work-exp').addClass('unshown');
        $('#widgets-features').addClass('unshown');
        break;
      }

      case 'work-exp': {
        $('#work-exp').removeClass('col-md-4');
        $('#work-exp').addClass('col-md-12');

        $('#personal-proj').addClass('unshown');
        $('#widgets-features').addClass('unshown');
        break;
      }

      case 'widgets-features': {
        $('#widgets-features').removeClass('col-md-4');
        $('#widgets-features').addClass('col-md-12');

        $('#personal-proj').addClass('unshown');
        $('#work-exp').addClass('unshown');
        break;
      }

      case 'x-icon': {
        setExpanded(false);
        $('.works-section').removeClass('col-md-12 unshown');
        $('.works-section').addClass('col-md-4');

        break;
      }

      default: break;
    }
  }
    
  return (
    <div className="section" id="Works">
        <div className="box center">
          <h2 id="works-header" className="header center">My Work:</h2>

          

            <div id="works-content" className="row"> 
            <img id='x-icon' onClick={handleClick} className={`x-icon ${expanded ? '' : 'unshown'}`} alt='x-icon' src={xIcon} />
              <div id="personal-proj" className="works-section col-md-4" onClick={handleClick}> 
                  <h3 id="works-sub-header" className="sub-header"> 
                    Personal Projects
                  </h3>

                  <div className="content-section"> 
                      <div className="row">
                          <div className="col-md-5 mx-auto emblem hexagon"> <div className="inner-emblem-text"> Portfolio </div> </div>
                          <div className="col-md-5 mx-auto emblem hexagon"> <div className="inner-emblem-text"> Ballpit Animation </div> </div>
                      </div> 
                  </div>
                </div>

                <div id="work-exp" className="works-section col-md-4" onClick={handleClick}> 
                  <h3 id="works-sub-header" className="sub-header"> 
                    Work Experience  
                  </h3>

                  <div className="content-section "> 

                  <div className="row">
                      <div className="col-md-5 mx-auto emblem hexagon"> <div className="inner-emblem-text"> Costco </div> </div>
                      <div className="col-md-5 mx-auto emblem hexagon"> <div className="inner-emblem-text"> WSIB </div> </div>
                  </div> 
                  <div className="col-md-5 mx-auto emblem hexagon"> <div className="inner-emblem-text"> Beautiful Hedges </div> </div>

                  </div>
                </div>
                
                

                <div id="widgets-features" className="works-section col-md-4" onClick={handleClick}> 
                  <h3 id="works-sub-header" className="sub-header"> 
                    Widgets & Features
                  </h3>

                  <div className="content-section"> 
                      <div className="col-md-5 mx-auto emblem hexagon"> <div className="inner-emblem-text"> Notifications </div> </div>
                  </div>
                </div>
            </div>


              
        </div>
    </div>
  );
}

export default Works;