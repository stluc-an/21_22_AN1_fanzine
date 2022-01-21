var link0;
var link1;

function setup() {
  // put setup code here
  createCanvas(windowWidth, windowHeight);

  link0 = createA('chanson3.html', "LE PAYSAGE CHANGE");
   link0.position(880, 255);

let col = color(104, 66, 139);
link1 = createButton(' ');
  link1.style('background-color', col);
  link1.position(945, 315);
  link1.size(40,15);
  link1.mousePressed(gotolink);
}

function gotolink() {
  link1 = window.open("radio4.html","_self");
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  // put drawing code here
background(104, 66, 139);

push()

push()
rotate(250);
noStroke();
 fill(30, 30, 30);
 rect(75,700,10,350);
 noStroke();
 fill(234, 234, 234);
 rect(82,700,3,350);
 pop()
 //antenne ^

  noStroke();
  fill(55, 55, 55);
 rect(430, 170, 680, 400);
 //rect general ^

 noStroke();
 fill(30,30,30);
 rect(445, 185, 370, 370);
 //rect noir a gauche ^

 noStroke();
 fill(15, 15, 15);
 rect(830, 210, 265, 120);
 //rect musique (ecran) ^

 noStroke();
 fill(130,130,130);
 circle(965,450,160);
 //cercle clair "volume" ^

  noStroke();
 fill(30,30,30);
 circle(965,450,135);
 //cercle foncé "volume" ^

 noStroke();
  fill(170, 150, 188);
  rect(830, 315, 265, 15);
 //barre bouton ^


 pop()

 textSize(300);
 text("3", 550, 470);
}