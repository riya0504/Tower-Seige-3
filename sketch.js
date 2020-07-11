const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var engine, world;

var score = 0;

function preload() {
   polygon_img = loadImage("polygon_img.png");
}

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  stand = new Ground(600,370,200,10);
  ground = new Ground(400,390,800,10);
  //bottom tier
  box1 = new Box(529,369,20,20);
  box2 = new Box(550,369,20,20);
  box3 = new Box(570,369,20,20);
  box4 = new Box(590,369,20,20);
  box5 = new Box(610,369,20,20);
  box6 = new Box(630,369,20,20);
  box7 = new Box(650,369,20,20);
  box8 = new Box(670,369,20,20);
  //2nd tier
  box9 = new Box(550,350,20,20);
  box10 = new Box(570,350,20,20);
  box11 = new Box(590,350,20,20);
  box12 = new Box(610,350,20,20);
  box13 = new Box(630,350,20,20);
  box14 = new Box(650,350,20,20);
  //3rd tier
  box15 = new Box(570,330,20,20);
  box16 = new Box(590,330,20,20);
  box17 = new Box(610,330,20,20);
  box18 = new Box(630,330,20,20);
  //4rth tier
  box19 = new Box(590,310,20,20);
  box20 = new Box(610,310,20,20);
  //top tier
  box21 = new Box(600,280,20,20);
  
  polygon= new Polygon(200,100);
  
  slingshot = new SlingShot(polygon.body,{x:100,y:200});
}


function draw() {
  background(0,200,255);  
Engine.update(engine);
imageMode(CENTER);

stand.display();
box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();
box7.display();
box8.display();
box9.display();
box10.display();
box11.display();
box12.display();
box13.display();
box14.display();
box15.display();
box16.display();
box17.display();
box18.display();
box19.display();
box20.display();
box21.display();
slingshot.display();
polygon.display();
ground.display();

drawSprites();
text("SCORE: "+ score, 700,40);
}

function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){
  if(keyCode===32){
    slingshot.attach(polygon.body);
  }
}