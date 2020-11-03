const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var stand1, engine, world;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14,block15,block16
var polygon
var score = 0;

function setup() {

  createCanvas(800,400);

  //create the sprite for the first stand
  stand1 = new Ground (200, 200, 50, 50);

  engine = Engine.create(); 
  world = engine.world; 
  Engine.run(engine); 

  //create the blocks for the stand
  //first level
  block1 = new Box(210,195,30,40);
  block2 = new Box(240,195,30,40);
  block3 = new Box(270,195,30,40);
  block4 = new Box(300,195,30,40);
  block5 = new Box(330,195,30,40);
  block6 = new Box(360,195,30,40);
  block7 = new Box(390,195,30,40);
  //second level
  block8 = new Box(240,235,30,40);
  block9 = new Box(270,235,30,40);
  block10 = new Box(300,235,30,40);
  block11 = new Box(330,235,30,40);
  block12 = new Box(360,235,30,40);
  //third level
  block13 = new Box(270,275,30,40);
  block14 = new Box(300,275,30,40);
  block15 = new Box(330,275,30,40);
  //fourth level
  block16 = new Box(300,315,30,40);

  polygon = createSprite(100,100,20,20);
  polygon = loadImage("hexagon.png");
  polygon.addImage("hexagon.png");

  slingshot = new SlingShot(polygon,{x:100, y:10});

}

function draw() {
  background(255,255,255);
  //display the stand
  stand1.display();
  //display the blocks
  block1.diplay();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();  

  //display the score
  text("Score: " + score, 750,40);

  //call the score function for each of the blocks
  block1.score();
  block2.score();
  block3.score();
  block4.score();
  block5.score();
  block6.score();
  block7.score();
  block8.score();
  block9.score();
  block10.score();
  block11.score();
  block12.score();
  block13.score();
  block14.score();
  block15.score();
  block16.score();

  drawSprites();
}

function mouseDragged(){
      Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){
  if(keyCode === 32 ){
    slingshot.attach(this.polygon);
  }
}

async function fetch(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  
  if(hour>=0600 && hour<=1800){
      bg = "light bg.webp";
  }
  else{
      bg = "dark bg.jpg";
  }

  backgroundImg = loadImage(bg);
  console.log(backgroundImg);
}