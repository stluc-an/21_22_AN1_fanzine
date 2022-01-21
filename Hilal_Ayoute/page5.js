

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL );
  
}

function draw() {
    background(49);
    
    let dirX = (rotateY)
    stroke(0, 0, 255);
    fill (255, 255, 0);
    
    //rotateX(frameCount * 0.01)
    rotateY(frameCount * 0.01)

    cone(width/5, -height/2.5, 5);
    
    
}
function windowResized(){
resizeCanvas(windowWidth, windowHeight);
}