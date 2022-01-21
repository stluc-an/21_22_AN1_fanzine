

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL );
  
}

function draw() {
    stroke(255, 0, 255);
    fill (138,43,226);
    background(49);
    rotateX(frameCount * 0.01)
    rotateY(frameCount * 0.01)

    box(width/10);
    
    
}
function windowResized(){
resizeCanvas(windowWidth, windowHeight);
}