let gaumes;
let orvalVerre;
let pate;
let rulles;
let touffaye;
let jambon;
let maitrank;

var balsamiq;
var link1;
var link2;


function preload() {
    gaumes = loadImage("visus/gaumes.jpg");
    orvalVerre = loadImage("visus/orvalverre.jpg");
    jambon = loadImage("visus/noixJambon.jpg");
    touffaye = loadImage("visus/touffaye.jpg");
    rulles = loadImage("visus/larulles.jpg");
    maitrank = loadImage("visus/maitrank.jpg");
    pate = loadImage("visus/pate.jpg");

    balsamiq = loadFont('fonts/BalsamiqSans-Regular.ttf');
    
}

function setup() {
    // put setup code here
    createCanvas(windowWidth, windowHeight);

    
    }
  function draw() {
    // put drawing code here
    background(0);

    push();
    imageMode(CENTER);
    image(gaumes, windowWidth/2, windowHeight/2);
    pop();
    
    push();
    tint(255, map(mouseX, width, 0, 0, 255));
    image(orvalVerre, 0, windowHeight/40, 300,300);
    image(rulles, 0, windowHeight/3,150, 250);
    image(maitrank, 0, windowHeight/1.69,300,250);
    pop();

    push();
    tint(255, map(mouseX, 0, width, 0, 255));
    image(jambon, width-300, windowHeight/12,300 ,200);
    image(touffaye, width-300, windowHeight/3, 300, 200);
    image(pate,width-300, windowHeight/1.5);
    pop();
  }