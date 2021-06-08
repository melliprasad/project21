var bullet,wall;
var speed, weight,thickness;

function setup() {
  createCanvas(1600,400);

  speed = random(223, 321);
  weight = random(30, 52);
  thickness = random(22, 83);

  bullet = createSprite(50, 200, 100, 30);
  wall = createSprite(1200, 200, thickness, height/2);
  bullet.shapeColor = color(255,255,255);
  wall.shapeColor = color(80,80,80);

  bullet.velocityX = speed;
}

function draw() {
  background(255,255,255);

  console.log(speed);
  console.log(weight);

  if(wall.x-bullet.x < (wall.width+bullet.width)/2){
    bullet.velocityX = 0;

    var deformation = 0.5*weight*speed*speed/22500;
    var damage =  0.5*weight*speed*speed/thickness*thickness*thickness;

    if(deformation<100){
      bullet.shapeColor = color(0,255,0);
    }
    if(deformation>100 && deformation<180){
      bullet.shapeColor = color(230,230,0);
    }
    if(deformation>180){
      bullet.shapeColor = color(255,0,0);
    }
    if(damage<10){
      wall.shapeColor = color(0,255,0);
    }
    if(damage>10){
      wall.shapeColor = color(255,0,0);
    }
  
  }

  wall.display();
  bullet.display();
}