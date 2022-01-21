let bubbles = [];
let food = [];

function preload() {
  for (let i = 0; i < 5; i++) {
    food[i] = loadImage(`../visus/bouffe/bouffe${i}.jpg`);
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < 200; i++) {
    let x = random(width);
    let y = random(height);
    let r = random(50, 150);
    let b = new Bubble(x, y, r);
    bubbles.push(b);
  }
}

function mousePressed() {
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].clicked(mouseX, mouseY);
  }
}

function draw() {
  background(0);
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].move();
    bubbles[i].show();
  }
}

class Bubble {
  constructor(x, y, r, img) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.bouffe = random(food);
  }
  move() {
    this.x = this.x + random(-2, 2);
    this.y = this.y + random(-2, 2);
  }

  show() {
    image(this.bouffe, this.x, this.y, this.r, this.r);
  }
}