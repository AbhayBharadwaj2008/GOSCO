var car1, car2, car3;
var speed1, speed2, speed3, weight;
var wall1,  wall2, wall3;



function setup() {
  createCanvas(1200,400);

 speed1 = random(55,90)
 speed2 = random(55,90)
 speed3 = random(55,90)

  car1 = createSprite(50, 350, 30, 20);
  car2 = createSprite(50, 200, 30, 20);
  car3 = createSprite(50, 50, 30, 20);

  car1.velocityX= speed1;
  car2.velocityX= speed2;
  car3.velocityX= speed3;

  wall1=createSprite(1150,350,20,35)
  wall2=createSprite(1150,200,20,35)
  wall3=createSprite(1150,50,20,35)
 
  
}

function draw() {
  background(220);  

  if (car1.x - wall1.x < car1.width/2 + wall1.width/2
    && wall1.x - car1.x < car1.width/2 + wall1.width/2){
car1.velocityX = 0;
}
if (car2.x - wall2.x < car2.width/2 + wall2.width/2
  && wall2.x - car2.x < car2.width/2 + wall2.width/2){
car2.velocityX = 0;
if (car3.x - wall3.x < car3.width/2 + wall3.width/2
  && wall3.x - car3.x < car3.width/2 + wall3.width/2){
car3.velocityX = 0;
}
}
duribilaty(car1,wall1);
duribilaty(car2,wall2);
duribilaty(car3,wall3);

  drawSprites();
}