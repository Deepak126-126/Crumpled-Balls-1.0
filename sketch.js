
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var world, engine;
var paperBall, ground;


function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400,height,800,20)
	paperBall = new Garbage(100,100)
	dustbin1 = new Dustbin(505, 650, 20, 100)
	dustbin2 = new Dustbin(550, 690, 100, 20)
	dustbin3 = new Dustbin(595, 650, 20, 100)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  paperBall.display();
  ground.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
 dustbin1.isStatic=true;
 dustbin2.isStatic=true;
 dustbin3.isStatic=true;
  drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paperBall.body,paperBall.body.position,{x:53,y:-57})
	}
}