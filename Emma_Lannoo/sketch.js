 console.log("btn")

let btns = [...document.querySelectorAll(".openPopup")];

for(   let btn of btns){
    btn.addEventListener("mouseenter", mouseOverBuy);
}

function mouseOverBuy( event){
    let btn = event.originalTarget;
    
    let y =  btn.offsetTop;
    let x =  btn.offsetLeft;
    let w =  btn.clientWidth;
    let h =  btn.clientHeight;
    
    window.open( 
        "MagicWord/index.html",
        "popup",
        "left="+x+",top="+y+",width=600px,height=600px,popup=1"
    );
    
}