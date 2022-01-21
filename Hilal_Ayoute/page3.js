

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL );
  
}

function draw() {
    stroke(7, 133, 255);
    fill (6, 81, 255);
    background(49);
    rotateY(millis() /9000)
    sphere(width/10);
    
    
}
function windowResized(){
resizeCanvas(windowWidth, windowHeight);
}