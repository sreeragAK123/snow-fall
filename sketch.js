const Engine = Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies;

var snowflake,snowflakeImg
var bgImg
var engine,world;
var snow=[];

function preload() {
  
  bgImg = loadImage("snow3.jpg");
}
function setup() {
  createCanvas(800,400);
 engine = Engine.create();
 world = engine.world;
}

function draw() {
  background(bgImg);  
  Engine.update(engine);
  if(frameCount%50===0){
    snow.push(new Snow(random(10,750),0,30,30))

  }
  for (var i = 0 ; i<snow.length ; i++) {
    snow[i].display();
  }
  
}


