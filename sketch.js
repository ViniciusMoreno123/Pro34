var latinha;
var chao;
var chaoOpcaos;
var latinha2;
var latinha3;
var latinha4;
var latinha5;
var latinha6;
var corda;
var conexcao;
var bola;
var tesoura;
const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

//mouseDraggedmouseReleased
//




function setup() {
  createCanvas(600,400);

  engine = Engine.create();
  world = engine.world;
  latinha2 = new Latinha(170,300);
  latinha3 = new Latinha(220,300);
  latinha4 = new Latinha(270,300);
  latinha5 = new Latinha(200,200);
  latinha6 = new Latinha(250,200);
  latinha = new Latinha(190,80);

  corda = new Rope(5,{
    x:200,
    y:10
  })

  chaoOpcaos={
    isStatic:true,
  }
  chao = Bodies.rectangle(300,390,600,20,chaoOpcaos);
  World.add(world,chao);
  rectMode(CENTER);
  bola = Bodies.circle(450,50,20)
  World.add(world,bola);
  conexcao = new Cordavsrefri(corda,bola);
  tesoura = Bodies.rectangle(320,)
}


function draw() 
{
  background(51);
  Engine.update(engine);
  latinha.displayLatinhas();
  rect(chao.position.x,chao.position.y,600,20);
  latinha2.displayLatinhas();
  latinha3.displayLatinhas();
  latinha4.displayLatinhas();
  latinha5.displayLatinhas();
  latinha6.displayLatinhas();
  corda.show();
  ellipse(bola.position.x,bola.position.y,20);

}

