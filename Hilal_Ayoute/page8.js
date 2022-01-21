

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL );
  
}

function draw() {
    stroke(244, 102, 27);
    fill (255, 127, 0);
    background(49);
    

    sphere(150);
    
    
}
function windowResized(){
resizeCanvas(windowWidth, windowHeight);
}