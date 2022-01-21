let balloons = [ ];
let capture;
//let fontRegular;
//function preload(){
//   fontRegular = loadFont('Spiritual Mountain.ttf') 
//}
function setup() {
  createCanvas(windowWidth, windowHeight);
  capture = createCapture(VIDEO);
  capture.size(640, 480);
  capture.hide();
}

function draw() {
  background(249,66,158);
    
     translate(-320,-240);
  image(capture, windowWidth/2, windowHeight/2, 640,480);
    
    translate(300,240);
     for( let c = 0 ; c < balloons.length ; c++ ){
        // ++ équivaut à faire +1
        balloons[c].display();
} 
    translate(-420,0);
    //text('La plus belle chose qui existe dans ce monde c´est... ',windowWidth/2, 100);
    //textFont(fontRegular);
    textSize(40);
    fill(255);
    text('La plus belle chose qui existe dans ce monde c´est... ',windowWidth/2, 100);
    //textFont(fontRegular);
    textSize(40);
    fill(255);
    translate(350,0);
    text('... TOI',windowWidth/2, 700);
    textSize(32);
    fill(255);
}


function windowResized(){
    resizeCanvas(windowWidth,windowHeight);
}
    
    
    function mousePressed(){
   balloons.push(new Balloon(mouseX,mouseY));  
}

    class Balloon{
    constructor(x,y){
        this.color = color(random(255), random(30), random(150));
        this.x = x;
        this.y = y;
        this.v = 1;//vitesse
        this.a = -0.2;//acceleration
    }
    display(){
        this.v += this.a;
        this.y += this.v;
        
        if(this.y > height){
            this.v = this.v * -0.9;
            this.y = height;
        }
        
        if(this.y<0){
            this.v = this.v * -0.75;
            this.y = 0;
        }
        noStroke();
        fill(this.color);
        ellipse(this.x-5, this.y + 50, 100); 
        ellipse(this.x , this.y + 60, 90);
        ellipse(this.x +3, this.y + 70, 80);
        ellipse(this.x +5, this.y + 75, 75);
        ellipse(this.x+6, this.y + 80, 70);
        ellipse(this.x+8, this.y + 85, 65);
        ellipse(this.x+9, this.y + 90, 60);
        ellipse(this.x+11, this.y + 95, 55);
        ellipse(this.x+12, this.y + 100, 50);
        ellipse(this.x+14, this.y + 105, 45);
        ellipse(this.x+15, this.y + 110, 40);
        ellipse(this.x+17, this.y + 115, 35);
        ellipse(this.x+18, this.y + 120, 30);
        ellipse(this.x+20, this.y + 125, 25);
        ellipse(this.x+21, this.y + 130, 20);
        ellipse(this.x+23, this.y + 135, 15);
        ellipse(this.x+25, this.y + 135, 10);
        
        ellipse(this.x + 55, this.y + 50, 100);
        ellipse(this.x + 53, this.y + 55, 95);
        ellipse(this.x + 51, this.y + 60, 90);
        ellipse(this.x+ 50, this.y + 65, 85);
        ellipse(this.x+ 48, this.y + 70, 80);
        ellipse(this.x+ 47, this.y + 75, 75);
        ellipse(this.x+ 45, this.y + 80, 70);
        ellipse(this.x+ 44, this.y + 85, 65);
        ellipse(this.x+ 42, this.y + 90, 60);
        ellipse(this.x+ 41, this.y + 95, 55);
        ellipse(this.x+ 39, this.y + 100, 50);
        ellipse(this.x+ 38, this.y + 105, 45);
        ellipse(this.x+ 37, this.y + 110, 40);
        ellipse(this.x+ 36, this.y + 115, 35);
        ellipse(this.x+ 35, this.y + 120, 30);
        ellipse(this.x+ 33, this.y + 125, 25);
        ellipse(this.x+ 32, this.y + 130, 20);
        ellipse(this.x+ 30, this.y + 135, 15);
        ellipse(this.x+ 29, this.y + 135, 10);
        ellipse(this.x+ 24, this.y + 137, 5);
        ellipse(this.x+ 27, this.y + 138, 15);
        ellipse(this.x+ 27, this.y + 139, 12);
        
        
        
        fill(255,255,255,20);
        ellipse(this.x - 20, this.y + 40, 15, 20);
        fill(255,255,255,20);
        ellipse(this.x - 25, this.y + 30, 15,15);
       fill(255,255,255,30);
        ellipse(this.x - 20, this.y + 40,20, 30);
        fill(255,255,255,10)
        ellipse(this.x - 20, this.y + 40,30, 40);
    }
}
