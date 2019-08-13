import React from 'react';

//import '../styles/Header.css';

function Header() {

  return (
    <div className="Header">
        <canvas id="myCanvas" width="0px" height="0px"></canvas>

        <div className="container center">
            <span>Neeko Blomgren:</span>
            <br />
            <span>Web Developer</span>
            <br /> 

            <p className="description center"> Hello! I specialize in the Front-end, specifically with React.
                                            I'm based out of Seattle, WA. Thanks for stopping by. </p>
        </div>
    </div>
  );
}

export default Header;