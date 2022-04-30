
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


let engine;
let world;

var ball;
var groundObj;
var leftSide;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

var options ={
	isStatic:false,
	restitution:0,
	density:1.2
}
ball = Bodies.circle(200,100,20,options);
World.add(world,ball);

groundObj = new ground(width/2670,width,20);
  leftSide = new ground(1100,600,20,120);
  rightSide = new ground(1350,600,20,120);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);


  
groundObj.display();
leftSide.display();
rightSide.display();

 ellipse(ball.position.x,ball.position.y,40,40); 

  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode=== UP_ARROW){
		Matter.Body.applyForce(ball,ball.position,{x:85,y:-85});
	}
}

