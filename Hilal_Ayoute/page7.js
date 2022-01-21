

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL );
  
}

function draw() {
        background(49);

    noStroke();
    
    fill(88, 40, 0);
    rect(-10, -80, 50, 250);
    triangle(-50, 175, 50, 175, 0, 0);
    
    
    triangle(-10, -80, 80, -80, -10, 0);
    
    
    triangle(-10, -80, -10, -50, -50, -150);
    
    
    triangle(45, -80, 5, -80, 80, -150);
    fill(0, 0, 0);
}
function windowResized(){
resizeCanvas(windowWidth, windowHeight);
}