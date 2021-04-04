class Slingshot {
    constructor(body1, point2) {
        var options = {
            bodyA: body1,
            pointB: point2,
            stiffness: 0.04,
            length: 10
        }
        this.sling = Constraint.create(options)
     //   this.sling1 = loadImage('Images/sling1.png')
       // this.sling2 = loadImage('Images/sling2.png')
       // this.sling3 = loadImage('Images/sling3.png')

        World.add(myWorld, this.sling)
    }
    display() {
        push()
     //   image(this.sling1, 200, 20);
     //   image(this.sling2, 170, 20);
        if(this.sling.bodyA!=null){
            var pointA = this.sling.bodyA.position
            var pointB = this.sling.pointB
            stroke(48, 22, 0)
            strokeWeight(3)
            line(pointA.x - 20, pointA.y, pointB.x - 10, pointB.y)
            line(pointA.x - 20, pointA.y, pointB.x + 30, pointB.y - 3)
    
     //       image(this.sling3, pointA.x - 30, pointA.y - 10, 15, 30)
        }
        pop()
    }
     fly(){
         this.sling.bodyA=null
     }
     attach(body){
       this.sling.bodyA=body  
     }
}
