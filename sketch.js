// Alias or renaming the modules -- Namespacing
//Matter.js is a 2d physics engine library
// It has modules Engine,Body,World,Bodies etc
//Matter.js Documentation :https://brm.io/matter-js/

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var ground,box1,box2;

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;

  // JSON -- Java script object notation 
  //JSON is in key value pairs seperated by comma and enclosed in flower braces
  // JSON is use to change any default attibutes of the bodies.
  // var ground_options ={
  //   isStatic: true
  // }

  // ground = Bodies.rectangle(400,380,800,20,ground_options);
  // World.add(world, ground);
 // console.log(ground);

  ground = new Ground(400,380,800,20); 

  box1=new Box(420,200,50,50);
  box2=new Box(400,100,50,100);

 
}

function draw() {
  background("lightblue");  

  Engine.update(engine);

  ground.display();
  box1.display();
  box2.display();
 
     
}