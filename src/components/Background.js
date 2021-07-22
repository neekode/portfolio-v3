import React from 'react';
import { shapesModule, genCircles, circleDrawLoop } from './../scripts/shapes';

import {ThemeContext} from './../scripts/context';
import {useContext, useEffect, useState} from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import $ from 'jquery';

import downChev from './../assets/chevron-down.svg';


/* Hook Component Implementation of interactive canvas animation on Intro Screen - 8/15/2019

    Provides Intro Component with particle/circle animations which bounce around the screen
    using the window viewport as the constraints. 
    - Main Variables (of each Circle): Amount, Radius, Speed
    - Default Values (In that order): 500, 2.5, 0.15 
    - Interactivity: Using the animation-controller element, user can set new values for each
    and re-render the animation using the provided inputs and buttons. There is also a randomize option.

    Uses ES6-built animation I wrote last year (found on neekode's github), polishes the logic, 
    and refactors it to properly suit React and newer build patterns.

    Potential Changes and Upgrades:
    - Implement Color and Color Options
    - Different Shapes
    - More Polish/Refactoring
    - New Name lol
    - Base default values from device type/viewport (polish responsive design)
    - Make canvas resizable by user

    To Others: If you would like to re-implement this component you must make sure to have the shapes.js file,
    create an HTML element which is then referenced right down below (ctrl+f: *HERE*), 
    and add styles to the animation-controller element(s). 
*/

function Background() {
    const {section} = useContext(ThemeContext);
    const [amount, setAmount] = useState(250);
    const [radius, setRadius] = useState(2);
    const [speed, setSpeed] = useState(0.10);

    const [controllerToggled, setControllerToggle] = useState(false);

    let theme = `Background-${section}`;

    // State which tracks the interval of consecutive draws. Necessary to unify single interval,
    // not creating others.
    const [intervalObj, setIntObj] = useState();

    // Initial side effect change which fires after component mounts and DOM/virtualDOM is ready.
    useEffect(() => init(amount, radius, speed, true), []);

    // init() function fires on pageload from useEffect, and when user re-renders and randomizes.
    // Default (on pageload) argument values as initial state of amount, radius, and speed. 
    const init = (amt, rad, spd, onPageLoad = false) => {
        // Canvas, Context
        const theCanvas = document.getElementById('myCanvas'); // *SET HTML ELEMENTS HERE*
        const theContext = theCanvas.getContext('2d');

        // Resize to Window Viewport on pageload
        resizeCanvas(theCanvas);

        // Placing Context and Canvas into shapes modules to encapsulate it for usage 
        // with shapes instance and draw functions
        let shapes = shapesModule(theContext,theCanvas);

        // Generates Circle Objects
        let circles = genCircles(amt,rad,spd,shapes,theCanvas);

        // Animate function sets recursive draw() calls using setInterval, which also returns an interval object
        // which is then stored in the 'intervalObj' state. This also determines the fps of the animation. (default = 5ms)
        const animate = () => {
            setIntObj(setInterval(draw, 5));
        }
        
        // After clearing previous draw of 'circles'
        // calls CircleDrawLoop where implementation of bouncing circles is defined
        const draw = () => {
            clear(theContext,theCanvas);
            circleDrawLoop(circles, theCanvas);
        }

        // Begins animation
        // Fires animate if user on initial pageload
        if (onPageLoad) { animate() };
        return animate;
    }

    // Event handler which re-sets state values based on user inputs to animation-controller 
    const handleChange = (e) => {
        switch (e.target.id) {
            case "amtInput": {
                setAmount(e.target.value);
                break;
            }
            case "radInput": {
                setRadius(e.target.value);
                break;
            } 
            case "spdInput": {
                setSpeed(e.target.value);
                break;
            } 
            default : {
                console.log("Default!")
                break;
            }
        }
    }

    // Event handler which re-renders animation based on which button is clicked
    const handleClick = (e) => {
        

        if (e.target.id === "renderer") {
            // Clears previous interval (native function)
            clearInterval(intervalObj);
            // Passes new values using current variable states into initialization script
            setIntObj(init(amount,radius,speed));
        }

        if (e.target.id === "randomer") {
            // Clears previous interval (native function)
            clearInterval(intervalObj);
            // Randomizes amount and radius coefficient
            // Default values chosen to to accomodate for slower computers and browsers
            let newAmt, newRad, newSpd;

            newAmt = (Math.random() * 500).toFixed(3);
            newRad = (Math.random() * 15).toFixed(3);
            newSpd = (Math.random() * 0.15).toFixed(3);

            setIntObj(init(newAmt,newRad,newSpd));

            // Setting new state of Input boxes
            setAmount(newAmt); setRadius(newRad); setSpeed(newSpd);    
        }

        if (e.target.id === "controller-toggle") {
            setControllerToggle(!controllerToggled);
        }

        if (e.target.id === "to-top") {
            scrollToTop();
        }

        if (e.target.id === "lower") {
            scrollLower();
        }
    }

    const scrollToTop = () => {
        $('#to-top').addClass('animated bounce');
        setTimeout(() => {
            $('#to-top').removeClass('animated bounce');
        }, 1000);
        
    }

    const scrollLower = () => {
        $('#lower').addClass('animated bounce');
        setTimeout(() => {
            $('#lower').removeClass('animated bounce');
        }, 1000);

        switch (section) {

            case ('Intro') : {
                $('#about-anchor').get(0).click();
                break;
            }

            case ('About') : {
                $('#works-anchor').get(0).click();
                break;
            }

            case ('Works') : {
                $('#connect-anchor').get(0).click();
                break;
            }

            default: {
                break;
            }
        }
    }

    // Resizes canvas to current window viewport
    const resizeCanvas = (c) => {
        c.width = window.innerWidth;
        c.height = window.innerHeight;
    }

    // Clear Canvas
    const clear = (ctx,c) => {
        ctx.clearRect(0,0,c.width,c.height);
    }

  return (
        <div className={theme} id="Background">
            <canvas id="myCanvas" width="0px" height="0px"></canvas>

            <AnchorLink href="#Intro"><span id='to-top' className='chev-box'> <img id='to-top' onClick={handleClick} className='up-chev' alt='chev' src={downChev} /> </span> </AnchorLink>

            <span id='lower' className='chev-box'> <img id='lower' onClick={handleClick} className='down-chev' alt='chev' src={downChev} /> </span>

            <span className='chev-box'> <img id='controller-toggle'  onClick={handleClick} className={controllerToggled ? 'left-chev' : 'right-chev'} alt='chev' src={downChev} /> </span>

            <div className={controllerToggled ? "animation-controller" : "animation-controller animation-controller-hidden"}>            
            <span className="header"> Animation Controller </span> 
                    
                    <div> Amount </div>
                    
                    <input onChange={handleChange} id="amtInput" value={amount} type="text" /> 
                    
                    <div> Radius Coefficient  </div>
                    
                    <input onChange={handleChange} id="radInput" value={radius} type="text" />
                    <div> Speed </div>
                    
                    <input onChange={handleChange} id="spdInput" value={speed} type="text" /> 

                    <br /> 
                    <div>
                        <button onClick={handleClick} id="randomer" name="random"> Randomize </button>	
                        <button onClick={handleClick} id="renderer" name="render"> Re-Render </button>	
                    </div>
                    
            </div>
        </div>

  );
}

export default Background;