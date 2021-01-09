var engine,world;
var holder,ball,ground;
var stand,stand2;
var ball;
var slingshot;
var polygon_img;

var E = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


function setup(){
    createCanvas(900,400);
    console.log(Matter.Engine);
  
  
    engine = E.create();
    world = engine.world;
    Engine.run(engine);
   
    ground = new Ground();
   
    stand1 = new Stand(390,300,250,10);
    stand2 = new Stand(700,200,200,10);
   
    block1 = new Block(300,275,30,40);
    block2 = new Block(330,275,30,40);
    block3 = new Block(360,275,30,40);
    block4 = new Block(390,275,30,40);
    block5 = new Block(420,275,30,40);
    block6 = new Block(450,275,30,40);
    block7 = new Block(480,275,30,40);
  
    block8 = new Block(330,235,30,40);
    block9 = new Block(360,235,30,40);
    block10 = new Block(390,235,30,40);
    block11 = new Block(420,235,30,40);
    block12 = new Block(450,235,30,40);
   
    block13 = new Block(360,195,30,40);
    block14 = new Block(390,195,30,40);
    block15 = new Block(420,195,30,40);
   
    block16 = new Block(390,155,30,40);
   
    block17 = new Block(640,175,30,40);
    block18 = new Block(670,175,30,40);
    block19 = new Block(700,175,30,40);
    block20 = new Block(730,175,30,40);
    block21 = new Block(760,175,30,40);
  
    block22 = new Block(670,135,30,40);
    block23 = new Block(700,135,30,40);
    block24 = new Block(730,135,30,40);
   
    block25 = new Block(700,95,30,40);
   
    ball = Bodies.circle(50,200,20);
    World.add(world,ball);
   
    slingshot = new SlingShot(this.ball,{x:100,y:200});
  
  }