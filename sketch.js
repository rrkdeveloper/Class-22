//Three primary objects - Engine, World, Bodies
const Engine = Matter.Engine //Namespace 
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var object;

function setup() {
  var canvas = createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;

  var object_options = {
    isStatic: true
  }

  object = Bodies.rectangle(200,100,50,50, object_options);
  World.add(world, object);

  console.log(object);
  console.log(object.type);
  console.log(object.position.x);
  console.log(object.position.y);

  //createSprite(400, 200, 50, 50);
}

function draw() {
  background(0);  
  Engine.update(engine);
  rectMode(CENTER);
  rect(object.position.x,object.position.y,50,50);
  drawSprites();
}