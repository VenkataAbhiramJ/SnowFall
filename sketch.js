const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
var backgroundimg
var engine
var world
var snows=[]
var maxsnow=1000

function preload(){
  backgroundimg=loadImage("snow2.jpg")
}

function setup() {
  createCanvas(800,600);
  engine=Engine.create()
  world=engine.world
  for(var i=0;i<maxsnow;i++){
    snows.push(new snow(random(0,600),random(0,800),20))
  }
}

function draw() {
  background(backgroundimg);
  Engine.update(engine)
  for(var i=0;i<maxsnow;i++){
    snows[i].display()

  }
}