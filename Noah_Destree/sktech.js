function setup(){
   
    createCanvas(windowWidth,windowHeight);
    
    
    
}

function mousePressed(){
    
       textSize(32);
    
 fill(random(32,240),random(0,15),random(116,255));
    
    text("coucou c'est moi ",random(-width * width, width * width),random(-height * height, height * height));
    
     text("coucou c'est moi ",random(-width * width, width * width),random(-height * height, height * height));
        
}