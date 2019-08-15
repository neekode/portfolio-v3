// Different Shape Definitions
// Takes Context and Canvas as arguments

// Think this needs polish and refactoring.
export const shapesModule = (ctx,c) => {
       return {
           Point: (newX,newY) => {
               const x = newX;
               const y = newY;
   
               return {
                   draw() {
                       if (typeof x === "number" && typeof y === "number"){
                           ctx.beginPath();
                           ctx.arc(x,y,2,0, 2 * Math.PI);
                           ctx.fill();
                           ctx.stroke();
                       }
                   }
               }
           },
   
           Line: (newX1,newY1,newX2,newY2) => {
               const x1 = newX1;
               const y1 = newY1;
               const x2 = newX2;
               const y2 = newY2;
   
               return {
                   draw() {
                       if (typeof x1 === "number" && typeof y1 === "number") {
                           ctx.beginPath();
                           ctx.moveTo(x1,y1);
                           ctx.lineTo(x2,y2);
                           ctx.stroke();
                       } else throw console.error("Arguments Not Numbers!");
                   }
               }
           },
   
           Circle: (newX,newY,newR,newMoveX,newMoveY) => {
               // Changes color to white (ish)
               ctx.strokeStyle  = "#e8eaf6";
   
               let x = newX; let y = newY; let r = newR;
   
               // Movement Variables, stores a value of potential displacement on draw()
               let moveX = newMoveX; 
               let moveY = newMoveY;
   
                // Randomizes initial movement direction
               let posOrNeg = Math.random() < 0.5 ? -1 : 1;
   
               if(posOrNeg > 0) {
                   moveX *= -1;
                   moveY *= -1;
               }   
   
               if (posOrNeg < 0) {
                   moveX *= 1;
                   moveY *= 1;
               }
               
               return {
                   draw() {
                       if (typeof x === "number" && typeof y === "number") {
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

// Circle Generator, takes amount, radius and speed as arguments
    // along with shapes modules, and current canvas.
    // Using the Shapes module's definition, function generates circle objects.
export const genCircles = (amt,rad,spd,shapes,canvas) => {
        let circles = [];
        let x; let y; let r; let s;
        
        for (let i = 0; i < amt; i++) {
            r = 1 + (Math.random() * rad);
            x = r + (Math.random() * (canvas.width - (2*r)));
            y = r + (Math.random() * (canvas.height - (2*r)));
            s = spd;
            circles.push(shapes.Circle(x,y,r,s,s));
        }
        return circles;
}

// Circle Draw Loop, loops through argued array and draws each circle using canvas object
export const circleDrawLoop = (circles,canvas) => {
    // Each loop, every single circle uses the same moveX and moveY, 
    // how do i define movement for each individual circle?
    // Define it in it's closure? Yes!
    
    for (let i = 0; i < circles.length; i++) {
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

        // Checks to see if x and y positioning is to the maximum size of the canvas, to determine "bounce" effect
        // in both the positive and negative directions
        if (newX + r > canvas.width || newX - r < 0) {
            current.setMoveX(current.getMoveX() * -1);
        }

        if (newY + r > canvas.height || newY - r < 0) {
            current.setMoveY(current.getMoveY() * -1);
        }
    }
}
