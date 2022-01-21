/**/
class Flower{
  constructor(urlImage){
    
    this.elem =document.createElement("img");
    this.elem.src = urlImage;
    this.elem.classList.add("drop");
    document.querySelector(".flowerLayer").append(this.elem);
    this.h = random(10, 600);
    this.x = random(0, windowWidth);
    this.y = (-1000, 0) - this.h;
/**/
    this.elem.style.height = this.h + "px";
    this.elem.style.top = this.y + "px";
    this.elem.style.left = this.x + "px";
  }
  /**/
  update(){
    //this.x = random(0, windowWidth);
    this.y += map(this.h , 10, 600, 0.1, 10);
    if(this.y> document.querySelector(".flowerLayer").clientHeight){
      this.h = random(10, 600);
      this.x = random(0, windowWidth);
      this.y = (-1000, 0) - this.h;
      this.elem.style.height = this.h + "px";
      this.elem.style.top = this.y + "px";
      this.elem.style.left = this.x + "px";
    }
    this.elem.style.top = this.y + "px";
    this.elem.style.left = this.x + "px";
  }
}

/**/
let allDrops = [];
function setup() {
  noCanvas();
  allDrops.push(new Flower("images/fleurs/portugal.png"));
  allDrops.push(new Flower("images/fleurs/spain.png"));
  allDrops.push(new Flower("images/fleurs/congo.png"));
  allDrops.push(new Flower("images/fleurs/viet.png"));
  allDrops.push(new Flower("images/fleurs/france.png"));
  allDrops.push(new Flower("images/fleurs/turquie.png"));
  allDrops.push(new Flower("images/fleurs/pologne.png"));
  allDrops.push(new Flower("images/fleurs/algerie.png"));
  allDrops.push(new Flower("images/fleurs/phil.png"));
  allDrops.push(new Flower("images/fleurs/maroc.png"));
  allDrops.push(new Flower("images/fleurs/bresil.png"));
  allDrops.push(new Flower("images/fleurs/tunisie.png"));
  allDrops.push(new Flower("images/fleurs/angleterre.png"));
  allDrops.push(new Flower("images/fleurs/russie.png"));
  allDrops.push(new Flower("images/fleurs/roumanie.png"));
  allDrops.push(new Flower("images/fleurs/italie.png"));
}
/**/
function draw() {

  for(let drop of allDrops){
    drop.update();
  }
}
/**/
function windowResized(){

}