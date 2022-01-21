

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL );
  
}

function draw() {
    stroke(255, 0, 255);
    fill (128, 0, 128);
    background(49);
    rotateX(frameCount * 0.01)
    rotateY(frameCount * 0.01)

    torus(150,100);
    
    
}
function windowResized(){
resizeCanvas(windowWidth, windowHeight);
}