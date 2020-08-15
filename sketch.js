var fixedRect, movingRect;
var gameobj1, gameobj2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  gameobj1 = createSprite(600,400,50,50);
  gameobj1.shapeColor = "yellow";
  gameobj2 = createSprite(200,0,50,50);
  gameobj2.shapeColor = "blue";

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
  gameobj1.velocityX = -4;
  gameobj1.velocityY = -4;
  gameobj2.velocityX = 3;
  gameobj2.velocityY = 3;
}

function draw() {
  background(0,0,0);  
 
  if(isTouching(fixedRect,movingRect)){
    fixedRect.shapeColor = "red";
    movingRect.shapeColor = "red";
  }
  else{
    fixedRect.shapeColor = "green";
    movingRect.shapeColor = "green";
  }
  bounceOff(gameobj1,gameobj2);

  drawSprites();
}

