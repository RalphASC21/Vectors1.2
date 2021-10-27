

//CREATES A BASIC ELLIPSE THAT MOVES ACROSS THE SCREEN  
let walker;

function setup(){
    createCanvas(400, 400);
    walker = new Walker(200, 200); //defines the walker constructor and calls it
}

function draw(){
    background(0);

    walker.update(); //updates the display
    walker.show(); //shows updated display
}