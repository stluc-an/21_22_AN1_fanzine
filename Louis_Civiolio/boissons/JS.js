let rulles;
let orval;
let maitrank;

//font
var balsamiq;

//variables de couleur boissons
let R;
let V;
let B;
 //mousse ou pas mousse
 let M1;
 let M2;
 let M3;

 //couleurs bouton remplir
 let buttonR;
 let buttonV;
 let buttonB;

 let recX;
 let recY;
 let recYY;

function setup() {
    // put setup code here
    createCanvas(windowWidth,windowHeight);
    background(0,0,0);
    balsamiq = loadFont('../fonts/BalsamiqSans-Regular.ttf');
   
   //bouttons pour choix de boissons
    rulles = createButton("Verre de Rulles");
    rulles.position(width/13*2,height/10);
    rulles.mousePressed(rullesRVB);

    orval = createButton("Verre d'Orval");
    orval.position(width/13*4,height/10);
    orval.mousePressed(orvalRVB);

    maitrank = createButton("Verre de Maitrank")
    maitrank.position(width/13*6,height/10);
    maitrank.mousePressed(maitrankRVB);

    // variables pour la gestion du liquide
    recX = width/13*3;
    recY = height/5*4;
    recYY = height/5*3.8;

  }
  function draw() {
    // put drawing code here

    //rectangle qui sert de boutton pour remplir
    push();
    buttonR = 140;
    buttonV = 0;
    buttonB = 140;
    fill(buttonR,buttonV,buttonB);
    stroke(255);
    strokeWeight(8);
    rect(width/13*11,height/3,150,150);
    pop();

    //rectangle liquide
    // x = var qui 
    push();
    fill(M1, M2, M3);
    noStroke();
    rect(recX,recYY, width/13*6, height);
    pop();
    push();
    fill(R,V,B);
    noStroke();
    rect(recX,recY, width/13*6, height);
    pop();
    
    //formes pour masquer le rect de liquide
    push();
    fill(0);
    noStroke();
    triangle(width/13*3,height/5,width/13*4,height/5*4,0,height);
    triangle(width/13*9,height/5,width/13*8,height/5*4,width,height);
    rect(0,height/5*4,width,height/5);
    rect(0,0,width,height/5);
    pop();
    
    //verre
    push();
    stroke(255,255,255);
    strokeWeight(5);
    line(width/13*3,height/5,width/13*4,height/5*4);
    line(width/13*9,height/5,width/13*8,height/5*4);
    line(width/13*4,height/5*4,width/13*8,height/5*4);
    pop();
    
    push();
    textSize(30);
    textFont(balsamiq);
    textAlign(CENTER);
    fill(255,255,255);
    text("Choisis ta boisson et sers toi un verre!", width/2, height/14);
    pop();    

    //remplir verre en déplaçant le rectangle vers le haut quand on appuie sur le bouton rose
    if (mouseX > width/13*11 && mouseX < width/13*11+150 && mouseY > height/3 && mouseY < height/3+150){
        console.log("on a bien cliqué dans la zone");
        if (mouseIsPressed === true) {
            recY = recY - 3;
            recYY = recYY -3 ;
        }
        buttonR = 0;
        buttonV = 200;
        buttonB = 100;
    }
  }

  function rullesRVB() {
      R = 71;
      V = 31;
      B = 40;
      M1 = 200;
      M2 = 200;
      M3 = 200;
  }
  function orvalRVB() {
      R = 232;
      V = 100;
      B = 0;
      M1 = 200;
      M2 = 200;
      M3 = 200;
  }
  function maitrankRVB() {
      R = 208;
      V = 147;
      B = 1;
      M1 = 208;
      M2 = 147;
      M3 = 1;

  }
  