

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL );
  
}

function draw() {
    stroke(0, 128, 0);
    fill (0, 255, 0);
    background(49);
    //rotateX(frameCount * 0.01)
    rotateZ(frameCount * 0.01)

    torus(width/10, height/10);
    
    
}
function windowResized(){
resizeCanvas(windowWidth, windowHeight);
}