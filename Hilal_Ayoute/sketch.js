let counter = 0; 
let Couleur; 

let boids = [];

    
function setup() 

    { 
        createCanvas(windowWidth, windowHeight); 
        
            Couleur = color(random(255), random(255), random(255));
            
                frameRate(30);
        
        
        for (let i = 0; i < 100; i++) {
        boids[i] = new Boid(random(width), random(height));
        }
    }

function draw() 
{
  background(51);
    
    push();
    
    stroke(0,0,0);

    translate(width/ 2, height/ 2)
    
    strokeWeight(4);
    noFill()
    rect(-240, -83, 480, 150);
    stroke(0,0,0);
    
    pop();

    for (let i = 0; i < boids.length; i++) {
    boids[i].run(boids);
  }
    
    
  if (counter > 19) {
    
    Couleur = color(random(255), random(255), random(255));

    
    counter = 0;
  }
counter = counter + 1;
    
}



class Boid {
  constructor(x, y) {
    this.acceleration = createVector(0, 0);
    this.velocity = p5.Vector.random2D();
    this.position = createVector(x, y);
    this.r = 3.0;
    this.maxspeed = 3;   
    this.maxforce = 0.05; 
  }

  run(boids) {
    this.flock(boids);
    this.update();
    this.borders();
    this.render();
  }
  
  applyForce(force) {
    this.acceleration.add(force);
  }
  

    flock(boids) {
    let sep = this.separate(boids); 
    let ali = this.align(boids);    
    let coh = this.cohesion(boids); 
        
    sep.mult(2.5);
    ali.mult(1.0);
    coh.mult(1.0);

    this.applyForce(sep);
    this.applyForce(ali);
    this.applyForce(coh);
  }
  
    
  update() {

    this.velocity.add(this.acceleration);

    this.velocity.limit(this.maxspeed);
    this.position.add(this.velocity);
     
    this.acceleration.mult(0);
  }
  
  
  seek(target) {
    let desired = p5.Vector.sub(target, this.position); 
      
      
    desired.normalize();
    desired.mult(this.maxspeed);

    let steer = p5.Vector.sub(desired, this.velocity);
    steer.limit(this.maxforce); 
    return steer;
  }
  
  render() {
    fill(Couleur);
    stroke(200);
    ellipse(this.position.x, this.position.y, 16, 16);
  }
  
  borders() {
    if (this.position.x < -this.r) this.position.x = width + this.r;
    if (this.position.y < -this.r) this.position.y = height + this.r;
    if (this.position.x > width + this.r) this.position.x = -this.r;
    if (this.position.y > height + this.r) this.position.y = -this.r;
  }
  
  
  separate(boids) {
    let desiredseparation = 25.0;
    let steer = createVector(0, 0);
    let count = 0;

      for (let i = 0; i < boids.length; i++) {
      let d = p5.Vector.dist(this.position, boids[i].position);
      
          
      if ((d > 0) && (d < desiredseparation)) {

          let diff = p5.Vector.sub(this.position, boids[i].position);
        diff.normalize();
        diff.div(d); 
        steer.add(diff);
        count++; 
      }
    }
    
    if (count > 0) {
      steer.div(count);
    }
  

      if (steer.mag() > 0) {

    steer.normalize();
    steer.mult(this.maxspeed);
    steer.sub(this.velocity);
    steer.limit(this.maxforce);
    }
    return steer;
  }
  
  
    
  align(boids) {
    let neighbordist = 50;
    let sum = createVector(0, 0);
    let count = 0;
    for (let i = 0; i < boids.length; i++) {
      let d = p5.Vector.dist(this.position, boids[i].position);
      if ((d > 0) && (d < neighbordist)) {
        sum.add(boids[i].velocity);
        count++;
      }
    }
    if (count > 0) {
      sum.div(count);
      sum.normalize();
      sum.mult(this.maxspeed);
      let steer = p5.Vector.sub(sum, this.velocity);
      steer.limit(this.maxforce);
      return steer;
    } else {
      return createVector(0, 0);
    }
  }
  
  
    
  cohesion(boids) {
    let neighbordist = 50;
    let sum = createVector(0, 0); 
    let count = 0;
    for (let i = 0; i < boids.length; i++) {
      let d = p5.Vector.dist(this.position, boids[i].position);
      if ((d > 0) && (d < neighbordist)) {
        sum.add(boids[i].position); 
        count++;
      }
    }
    if (count > 0) {
      sum.div(count);
      return this.seek(sum); 
    } else {
      return createVector(0, 0);
    }
  }  
}










function windowResized()
{    
resizeCanvas(windowWidth, windowHeight);
}