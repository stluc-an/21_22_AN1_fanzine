function setup(){
	let monLien = document.querySelector("#popupLink")
	monLien.addEventListener("click", clickOnLink);
}
function draw(){

	let mX = mouseX / windowWidth * 100;

	document.body.style.backgroundPositionX = mX + "%";

}

function clickOnLink(){
	let hiddenPart = document.querySelector(".hide");
	hiddenPart.classList.remove("hide");
}