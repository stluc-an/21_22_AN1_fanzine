 

let mesBoites = [...document.querySelectorAll(".boite")];


let toDisactivate = document.querySelectorAll(".boite:not(:first-child)")

for(let maBoite of toDisactivate){
    maBoite.classList.add("disactive");
}


for(let maBoite of mesBoites){
    maBoite.addEventListener("click", activation, false)
}

function activation(event){
    if(event.currentTarget.classList.contains("disactive")){
        return;
    }
    event.currentTarget.removeEventListener("click", activation, false);
    let toActive = document.querySelector(".boite.disactive");
    if(toActive != null){
        toActive.classList.remove("disactive");
    }
    event.currentTarget.style.backgroundColor= "#d19b8e";
    event.currentTarget.querySelector("p").style.opacity = 1;
}
