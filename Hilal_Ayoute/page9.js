

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL );
  
}

function draw() {
    noStroke();
    fill(255,105,180);
    background(49);
    circle(0, 0, 100);
    triangle(-100, 75, -100, -75, 0, 0);
    
    
    
    triangle(100, 75, 100, -75, 0, 0);

}
function windowResized(){
resizeCanvas(windowWidth, windowHeight);
}

