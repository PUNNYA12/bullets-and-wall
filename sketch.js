var bullet
var speed
var wall 
var weight
var thickness


function setup() {
  createCanvas(1600,400);
  speed = random(223,321);
  weight = random(30,52);
  thickness=random(22,83);
  bullet = createSprite(60,200,50,50);
  bullet.velocityX = speed;
  bullet.shapeColor= "white";
  wall = createSprite(1500,200,60,height);
  wall.shapeColor= "grey";

}

function draw() {
  background("black");  
  drawSprites();
  if(hascollided(bullet,wall)){
    bullet.velocityX=0;
    var deform = 0.5*weight*speed*speed/(thickness*thickness*thickness);
    if(deform>10){
      bullet.shapeColor="red";
    }
    
    if(deform<10){
      bullet.shapeColor="green";
    }
  }
}
function hascollided(bullet1 , wall1){
  bulletrightedge=bullet1.x+bullet1.width
  wallleftedge=wall1.x
  if(bulletrightedge>wallleftedge){
    return true
  }
  return false
}