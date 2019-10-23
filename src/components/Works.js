import React from "react";

function Works() {
    
  return (
    <div className="section" id="Works">
        <div className="box center">
          <h2 id="works-header" className="header center">My Work:</h2>

            <div id="works-content" className="row"> 
              <div className="works-section col-md-4"> 
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

                <div className="works-section col-md-4"> 
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
                
                

                <div className="works-section col-md-4"> 
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