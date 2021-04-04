//Code to create a box class

class Box {
    constructor(x, y, width, height) {
        var options = {
            restitution: 0.8,
            friction: 1.0,
            denisity: 1.0
        }
        this.physicsBody = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        //   this.image = loadImage('images/wood1.png')
        World.add(myWorld, this.physicsBody);
        this.visbility = 280
    }
    display() {
        var pos = this.physicsBody.position;
        var angle = this.physicsBody.angle;
        rectMode(CENTER);
        // imageMode(CENTER)
push()
        fill('white')
        stroke('green')
        strokeWeight(4)
        //by default when any body rotates, it rotates at origin, that mean x=0, y =0
        translate(pos.x, pos.y) //this command will change the point of rotation to its own center
        angleMode(RADIANS);
        rotate(angle);
        rect(0, 0, this.width, this.height) //swapping
        // image(this.image,0,0,this.width,this.height)
     
        pop()
       
    }
}


//All classes start with a Capital letter
//Constructor is special function, which constructs the objects of the class
//Every class has properties and functions
//Constructor holds all the properties of a class
//we never call the constructor it automatically gets called when i create an object of the class

//this -> it is like a placeholder, which refers to the current object until that object is created
//this.width, becomes objectname.width once an object is created.