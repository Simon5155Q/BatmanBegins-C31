const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var rainDrops = [], umbrella;
var umbrella1Image, umbrella1;

function preload(){
    umbrella1Image = loadImage("umbrall.png");
}

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;


    for(var i = 0 ; i < 100; i++){
  rainDrops.push(new Rain(random(0, 400), random(0, 400)))
    }

    umbrella = new Box(200, 200);

    umbrella1 = createSprite(200, 200, 30, 30);
    umbrella1.addImage(umbrella1Image);
    umbrella1.scale = 0.1;
    
}

function draw(){
    background("black");
    Engine.update(engine);
    
    for(i = 0 ; i < 100; i++){
        rainDrops[i].display();
        rainDrops[i].reposition();
            } 

    //umbrella.display(); 
    drawSprites();       
            
}







