const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
const Constraint = Matter.Constraint

var myEngine , myWorld,backgroundImage;


var ground1,box1

function setup(){
createCanvas(1000,1000)
myEngine = Engine.create()
myWorld =  myEngine.world



box1 =  new Box(330,235,30,40);
box2 = new Box(360,235,30,40)
box3 = new Box(390,235,30,40)
box4 = new Box(420,235,30,40)
box5 = new Box(450,235,30,40)
box6 = new Box(360,195,30,40)
box7 = new Box(390,195,30,40)
box8 = new Box(420,195,30,40)
box9 = new Box(390,155,30,40)

polygon = Bodies.circle(50,200,50)
World.add(myWorld,polygon)

slingshot = new Slingshot(polygon,{x:100,y:200})

ground1 = new Ground(395,260,200,10)
}

function draw(){
    background('white')
    Engine.update(myEngine)
box1.display()
box2.display()
box3.display()
box4.display()
box5.display()
box6.display()
box7.display()
box8.display()
box9.display()
ground1.display()
slingshot.display()
ellipseMode(RADIUS)
ellipse(polygon.position.x,polygon.position.y,25,25)
}

function mouseDragged(){
   polygon.position.x = mouseX
   polygon.position.y = mouseY
}
function mouseReleased(){
slingshot.fly()


}
function keyPressed(){
    if(keyCode===32){
        slingshot.attach(this.polygon)
    }
}