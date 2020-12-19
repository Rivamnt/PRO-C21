var bullet1, bullet2, bullet3; 
var speed1, speed2, speed3;
var weight1, weight2, weight3;
var wall1, wall2, wall3;
var thickness1, thickness2, thickness3;
var damage;

function setup() {
  createCanvas(1600,700);
 
  bullet1 = createSprite(70, 90, 80, 10);
  bullet1.shapeColor = "white";

  bullet2 = createSprite(70, 350, 80, 10);
  bullet2.shapeColor = "white";

  bullet3 = createSprite(70, 600, 80, 10);
  bullet3.shapeColor = "white";

  speed1 = Math.round(random(223, 321));
  weight1 = Math.random(30, 52) * (52 - 30) + 30;

  speed2 = Math.round(random(223, 321));
  weight2 = Math.random(30, 52) * (52 - 30) + 30;

  speed3 = Math.round(random(223, 321));
  weight3 = Math.random(30, 52) * (52 - 30) + 30;

  thickness1 = Math.random(22,83) * (83 - 22) + 22;
  thickness2 = Math.random(22,83) * (83 - 22) + 22;
  thickness3 = Math.random(22,83) * (83 - 22) + 22;

  wall1 = createSprite(1200, 100, thickness1, 150);
  wall2 = createSprite(1200, 340, thickness2, 150);
  wall3 = createSprite(1200, 590, thickness3, 150);
}

function draw() {
  background(0,0,0); 
  
  bullet1.velocityX = speed1;
  bullet2.velocityX = speed2;
  bullet3.velocityX = speed3;

  if(collide(bullet1, wall1)){
    bullet1.velocityX = 0;

    var damage = 0.5 * weight1 * speed1 * speed1 / (thickness1 * thickness1 * thickness1);

    if(damage > 10){
      wall1.shapeColor = color(255,0,0);
    };

    if(damage < 10){
      wall1.shapeColor = color(0,255,0);
    };
  } 
  
  if(collide(bullet2, wall2)){
    bullet2.velocityX = 0;

    var damage = 0.5 * weight2 * speed2 * speed2 / (thickness2 * thickness2 * thickness2);

    if(damage > 10){
      wall2.shapeColor = color(255,0,0);
    };

    if(damage < 10){
      wall2.shapeColor = color(0,255,0);
    };
  } 

  if(collide(bullet3, wall3)){
    bullet3.velocityX = 0;

    var damage = 0.5 * weight3 * speed3 * speed3 / (thickness3 * thickness3 * thickness3);

    if(damage > 10){
      wall3.shapeColor = color(255,0,0);
    };

    if(damage < 10){
      wall3.shapeColor = color(0,255,0);
    };
  } 

  drawSprites();
}