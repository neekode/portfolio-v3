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

		<div className="animation-controller">
                Amount
                <br />
                <input id="amtInput" value="100" type="text" /> <br /> 
				<br/> Radius Coefficient <br />
				<input id="radInput" value="50" type="text" /> <br />
				<br/> Movement Speed <br />
				<input id="spdInput" value="1" type="text" /> <br />


				<br />
				<button name="render" id="renderer">
					Re-Render
				</button>	

				<button name="random" id="randomer">
					Randomize
				</button>	

        </div>
    </div>
  );
}

export default Header;