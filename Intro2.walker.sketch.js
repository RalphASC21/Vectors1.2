class Walker{ //CREATES THE OBJECT THAT IS CALLED AND THEN DISPLAYED ON SCREEN
    constructor(x, y){
        this.pos = createVector(x, y);
        // this.vel = createVector(1, -1);
        this.vel = p5.Vector.random2D(); //random vector on the x, y plane
        this.vel.mult(random(3)); // sets a random velocity 
    }

    update(){
        this.pos.add(this.vel); // updates the position of with the velocity

    }

    show(){
        stroke(255, 100);
        strokeWeight(2);
        ellipse(this.pos.x, this.pos.y, 32); // ellipse drawn

    }
}