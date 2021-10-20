import React from "react";
import {shapesModule, genCircles, circleDrawLoop} from "./../scripts/shapes";
import {ThemeContext} from "./../scripts/context";
import {useContext, useEffect, useState} from "react";
import ControllerRenderer from "./ControllerRenderer";
import SandboxButton from "./SandboxButton";
import {
    Link,
    BrowserRouter as Router
} from "react-router-dom";

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
    const {section, isSandbox} = useContext(ThemeContext);
    const [warning, setWarning] = useState({amount: false, radius: false, speed: false});
    const [ballpitVars, setBallpitVars] = useState({
        amount: 250,
        radius: 2,
        speed: 0.1,
    });

    const handleResize = () => {
        clearInterval(intervalObj);
        init(ballpitVars.amount, ballpitVars.radius, ballpitVars.speed);
    }

    let theme = `Background-${section}`;

    // State which tracks the interval of consecutive draws. Necessary to unify single interval,
    // not creating others.
    const [intervalObj, setIntObj] = useState();

    // Initial side effect change which fires after component mounts and DOM/virtualDOM is ready.
    useEffect(
        () => {
            init(ballpitVars.amount, ballpitVars.radius, ballpitVars.speed, true);
        },
        []
    );

    // init() function fires on pageload from useEffect, and when user re-renders and randomizes.
    // Default (on pageload) argument values as initial state of amount, radius, and speed.
    const init = (amt, rad, spd, onPageLoad = false) => {
        // Canvas, Context
        const theCanvas = document.getElementById("myCanvas");
        const theContext = theCanvas.getContext("2d");

        // Resize to Window Viewport on pageload
        resizeCanvas(theCanvas);

        // Placing Context and Canvas into shapes modules to encapsulate it for usage
        // with shapes instance and draw functions
        let shapes = shapesModule(theContext, theCanvas);

        // Generates Circle Objects
        let circles = genCircles(amt, rad, spd, shapes, theCanvas);

        // Animate function sets recursive draw() calls using setInterval, which also returns an interval object
        // which is then stored in the 'intervalObj' state. This also determines the fps of the animation. (default = 5ms)
        const animate = () => {
            setIntObj(setInterval(draw, 5));
        };

        // After clearing previous draw of 'circles'
        // calls CircleDrawLoop where implementation of bouncing circles is defined
        const draw = () => {
            clear(theContext, theCanvas);
            circleDrawLoop(circles, theCanvas);
        };

        // Begins animation
        // Fires animate if user on initial pageload
        if (onPageLoad) {
            animate();
        }
        return animate;
    };

    const handleRandomize = () => {
        // Clears previous interval
        clearInterval(intervalObj);
        // Randomizes amount and radius coefficient
        // Default values chosen to to accomodate for slower computers and browsers
        const newAmt = (Math.random() * 500).toFixed(3);
        const newRad = (Math.random() * 15).toFixed(3);
        const newSpd = (Math.random() * 0.5).toFixed(3);
        setBallpitVars({
            amount: newAmt,
            speed: newSpd,
            radius: newRad,
        });
        setWarning({
            amount: false,
            speed: false,
            radius: false,
        })

        setIntObj(init(newAmt, newRad, newSpd));

    };

    const handleRender = () => {
        // Clears previous interval (native function)
        clearInterval(intervalObj);
        // Passes new values using current variable states into initialization script
        setIntObj(init(ballpitVars.amount, ballpitVars.radius, ballpitVars.speed));
    };


    // Resizes canvas to current window viewport
    const resizeCanvas = (c) => {
        c.width = window.innerWidth;
        c.height = window.innerHeight;
    };

    // Clear Canvas
    const clear = (ctx, c) => {
        ctx.clearRect(0, 0, c.width, c.height);
    };

    return (
        <div className={theme} id="Background">
            <canvas id="myCanvas" width="0px" height="0px"></canvas>
            <Link to={!isSandbox ? "/sandbox" : "/"}><SandboxButton/></Link>
            <ControllerRenderer
                setBallpitVars={setBallpitVars}
                ballpitVars={ballpitVars}
                handleRender={handleRender}
                handleRandomize={handleRandomize}
                warning={warning}
                setWarning={setWarning}
            />
        </div>
    );
}

export default Background;
