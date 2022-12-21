class Latinha{
    constructor(x,y){
  
  this.lar = 50;
  this.alt = 100;

  this.body = Bodies.rectangle(x,y,this.lar,this.alt);
  
  this.img = loadImage("2442.png");
  
  World.add(world,this.body);
    }
    displayLatinhas(){
    var posicao = this.body.position;
    push();
    imageMode(CENTER);
    image(this.img,posicao.x,posicao.y,this.lar,this.alt);
    pop();

    }
}
