let mask;

function setup() {
  // put setup code here

  mask = document.querySelector("#mask");
  document.body.addEventListener("mousemove", moveMask)
}


function moveMask(event) {
  console.log(event.x, event.y);

  
  mask.style.backgroundPositionX = (event.x - windowWidth / 2) + "px";
  mask.style.backgroundPositionY = (event.y - windowHeight / 2) + "px";
}