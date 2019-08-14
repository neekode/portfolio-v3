import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

function Ballpit() {
    const [amount, setAmount] = useState(100);
    const [radius, setRadius] = useState(5);
    const [speed, setSpeed] = useState(0.25);

    const [intervalObj,setIntObj] = useState();

    //const [interval, setInt] = useState;

    // useEffect(
    //     () => {
    //         init()
    //       console.log('init() has been run!')
    //     },
    //     []
    //   )

    useEffect(() => init(), []);

    const init = (amt = amount, rad = radius, spd = speed) => {
        // Declaration of interval object

        console.log('stuff!');
        // Init of Canvas
        const theCanvas = document.getElementById('myCanvas');
        const theContext = theCanvas.getContext('2d');
        theContext.strokeStyle  = "#e8eaf6";

        // Resize to Window Viewport on pageload
        resizeCanvas(theCanvas);

        // Placing Context and Canvas into my shapes modules to encapsulate it for usage with theShapes object instance
        let shapes = shapesModule(theContext,theCanvas);


            // Animation Time!!!
        // Generates Our Circles
        let circles = genCircles(amt,rad,spd,shapes,theCanvas);

        // Animate function sets recursive draw() calls
        const animate = () =>
        {
            setIntObj(setInterval(draw, 10));
        }
        
        // Draws scene once, calls CircleDrawLoop where implementation of bouncing circles is defined
        const draw = () =>
        {
            clear(theContext,theCanvas);
            circleDrawLoop(circles, theCanvas);
        }
        // Returns interval object to scope which called it.
        return animate();
    }

    // Render function which takes the interval object as an argument. This allows for the same interval being passed around,
    // being able to be set and cleared whenever a new initialization is set.
    const renderer = (int) => 
    {
        // Clears previous 
        clearInterval(int);
        
        // Gathers values from elements
        let newAmt = amount;
        let newRad = radius;            // Note: how is this render function able to access variables from onPageLoad? does it have something to do with the event handler?
                                            // im confused. does the input html element automatically make itself available
                                            // in my script scope just by being instantiated?
        let newSpd = speed;


        // Passes new values into initialization script
        int = init(newAmt,newRad,newSpd);
        return int;
    }
    

    // Same as above, but with randomization
    const randomer = (int) =>
    {
        // Clears previous 
        clearInterval(int);

        // Randomizes amount and radius coefficient
        let newAmt = Math.random() * 500;
        let newRad = Math.random() * 100;
        let newSpd = Math.random() * 3;

        int = init(newAmt,newRad,newSpd);
        return int;
    }

    // Resizes canvas to current window viewport
    const resizeCanvas = (c) => 
    {
        c.width = window.innerWidth;
        c.height = window.innerHeight;
    }

    // Clear Canvas
    const clear = (ctx,c) =>
    {
        ctx.clearRect(0,0,c.width,c.height);
    }

    // Circle Generator, takes number of Circle objects to return, shapes modules, and current canvas as arguments
    const genCircles = (num,rad,spd,shapes,c) =>
    {
        let circles = [];
        let x; let y; let r; let s;
        
        for (let i = 0; i < num; i++)
        {
            r = 1 + (Math.random() * rad);
            x = r + (Math.random() * (c.width - (2*r)));
            y = r + (Math.random() * (c.height - (2*r)));
            s = spd;

            circles.push(shapes.Circle(x,y,r,s,s));
        }

        
        return circles;

    }

    // Different Shape Classes
const shapesModule = (ctx,c) =>
{
    return {
        Point: (newX,newY) =>
        {
            const x = newX;
            const y = newY;

            return {
                draw()
                {
                    if (typeof x === "number" && typeof y === "number")
                    {
                        ctx.beginPath();
                        ctx.arc(x,y,2,0, 2 * Math.PI);
                        ctx.fill();
                        ctx.stroke();
                    }
                }
            }
        },

        Line: (newX1,newY1,newX2,newY2) =>
        {
            const x1 = newX1;
            const y1 = newY1;
            const x2 = newX2;
            const y2 = newY2;

            return {
                draw()
                {
                    if (typeof x1 === "number" && typeof y1 === "number")
                    {
                        ctx.beginPath();
                        ctx.moveTo(x1,y1);
                        ctx.lineTo(x2,y2);
                        ctx.stroke();
                    } else throw console.error("Arguments Not Numbers!");
                }
            }
        },

        Circle: (newX,newY,newR,newMoveX,newMoveY) => 
        {
            // Changes color to white (ish)
            ctx.strokeStyle  = "#e8eaf6";

            let x = newX;
            let y = newY;
            let r = newR;

            // Movement Variables, stores a value of potential displacement on draw()
            let moveX = newMoveX; 
            let moveY = newMoveY;

                // Randomizes initial movement direction
            let posOrNeg = Math.random() < 0.5 ? -1 : 1;

            if(posOrNeg > 0)
            {
                moveX *= -1;
                moveY *= -1;
            }   

            if (posOrNeg < 0)
            {
                moveX *= 1;
                moveY *= 1;
            }
            
            return {
                draw()
                {
                    if (typeof x === "number" && typeof y === "number")
                    {
                        ctx.beginPath();
                        ctx.arc(x,y,r, 0, 2 * Math.PI);
                        ctx.stroke();
                    } 

                },

                getX() {return x},
                getY() {return y},
                getR() {return r},

                getMoveX() {return moveX},
                getMoveY() {return moveY},

                setX(newX) {x = newX},
                setY(newY) {y = newY},
                setR(newR) {r = newR},

                setMoveX(newMoveX) {moveX = newMoveX},
                setMoveY(newMoveY) {moveY = newMoveY},
                
            }
        }
    }
}

    // Circle Draw Loop, loops through argued array and draws each 
    const circleDrawLoop = (circles,c) =>
    {
        // Each loop, every single circle uses the same moveX and moveY, 
        // how do i define movement for each individual circle?
        // Define it in it's closure? Yes!
        
        for (let i = 0; i < circles.length; i++)
        {
            let current = circles[i];

            current.draw();

            // Finding and defining current poisitioning
            let x = current.getX();
            let y = current.getY();
            let r = current.getR();

            // Creating newX and newY, which are coordinate values based on the last draw() iteration, plus some sort of movement value, which keeps changing.
            let newX = x + current.getMoveX();
            let newY = y + current.getMoveY();

            // Setting new poisioning for current circle
            current.setX(newX);
            current.setY(newY);

            // Checks to see if the x positioning is to the maximum size of the canvas, in both the positive and negative directions
            if (newX + r > c.width || newX - r < 0)
            {
                current.setMoveX(current.getMoveX() * -1);
            }
            // Checks Y
            if (newY + r > c.height || newY - r < 0)
            {
                current.setMoveY(current.getMoveY() * -1);
            }
        }
    }


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

    const handleClick = (e) => {
        if (e.target.id === "renderer") {
            renderer(intervalObj);
        }

        if (e.target.id === "randomer") {
            randomer(intervalObj)
        }
    }

  return (
    <div className="Ballpit">
        <canvas id="myCanvas" width="0px" height="0px"></canvas>

        <div className="animation-controller">
                Amount
                <br />
                <input onChange={handleChange} id="amtInput" value={amount} type="text" /> <br /> 
				<br/> Radius Coefficient <br />
				<input onChange={handleChange} id="radInput" value={radius} type="text" /> <br />
				<br/> Movement Speed <br />
				<input onChange={handleChange} id="spdInput" value={speed} type="text" /> <br />

				<br />
				<button onClick={handleClick} name="render" id="renderer">
					Re-Render
				</button>	

				<button onClick={handleClick} name="random" id="randomer">
					Randomize
				</button>	

        </div>
    </div>
  );
}

export default Ballpit;