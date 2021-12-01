var trex, trex_running, trex_collide;
var ground, invisibleGround, groundImage;

  
function preload(){  
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  groundImage=loadImage("ground2.png");
}

function setup(){
  createCanvas(600,200)

  //crear sprite de Trex
 trex=createSprite(50,180,20,50);
 trex.addAnimation("running",trex_running);

 //agregar escala y posicion
 trex.scale=0.5;
 trex.x=50

 //crear sprite suelo
 ground= createSprite(200,180,400,20);
 ground.addImage(groundImage);
 ground.velocityX=-2;

 invisibleGround= createSprite(200,190,400,10);
 invisibleGround.visible=false;

}

function draw(){
  background(220);
  
  if(ground.x<0){
    ground.x=ground.width/2
}
//trex salta chapulin
if(keyDown("space") && trex.y>=100) {
  trex.velocityY= -10;
}
  background("white")

  if(keyDown("space") && trex.y >=100){ 
    trex.velocityY= -10;
  }
trex.velocityY= trex.velocityY +0.8; 
trex.collide(invisibleGround);

drawSprites();
}