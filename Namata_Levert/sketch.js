let mask = document.querySelector("#mask");

function setup() {
    // put setup code here
    document.body.addEventListener("mousemove", moveMask);
    console.log(windowWidth);

}

function moveMask(event) {
    // console.log(event.x, event.y);
    let range = windowWidth / 5,
        xLimit1 = -range,
        xLimit2 = range;

    let cursX = (event.x - windowWidth / 2),
        cursY = (event.y - windowHeight / 2);

    mask.style.backgroundPositionX = cursX + "px";
    mask.style.backgroundPositionY = cursY + 50 + "px";


    if (cursX > xLimit1 && cursX < xLimit2) {
        mask.style.transform = `scale(1.5)`
    } else {
        mask.style.transform = `scale(1)`;
    }

}