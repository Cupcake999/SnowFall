const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

// making variables
var engine, world;
var backgroundImg
var snowFlake,snowFlake1,snowFlake2,snowFlake3,snowFlake4,snowFlake5,snowFlake6,snowFlake7,snowFlake8,snowFlake9,snowFlake10
function preload(){
  // adding image in sprites
backgroundImg =loadImage("snow3.jpg")
//snowFlake = loadImage("snow4.webp")

}

function setup() {
  engine = Engine.create();
  world = engine.world
  Engine.run(engine); 
  createCanvas(1200,780);
  //createSprite(400, 200, 50, 50);
 ground = new Ground(600,760,1200,20);
  snowFlake = new Snow(50,200,50)
  snowFlake1 = new Snow(200,200,50)
  snowFlake2 = new Snow(350,200,50)
  snowFlake3 = new Snow(500,200,50)
  snowFlake4 = new Snow(750,250,50)
  snowFlake5 = new Snow(100,250,50)
  snowFlake6 = new Snow(250,250,50)
  snowFlake7 = new Snow(550,250,50)
  snowFlake8 = new Snow(1000,200,50)
  snowFlake9 = new Snow(800,250,50)
  snowFlake10 = new Snow(1100,250,50)
}

function draw() {
Engine.update(engine);
  //  adding image to the background
  background(backgroundImg,255);
snowFlake.display();
snowFlake1.display();
snowFlake2.display();
snowFlake3.display();
snowFlake4.display();
snowFlake5.display();
snowFlake6.display();
snowFlake7.display();
snowFlake8.display();
snowFlake9.display();

//if (isTouching())
  // function to draw Sprites
  drawSprites();
}
function isTouching(object1,object2)
{
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2) {
    return true;
}
else {
   return false;
  
}
}