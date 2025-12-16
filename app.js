import { crearCard } from "./js/card.js";


function startAnimation(){
    const $fondo = document.querySelector(".fondo");
        
    const icon = document.createElement('img');    
    icon.src = "./assets/heart.svg";
    icon.style.width = "32px";
    icon.classList.add("icon")
    
    // posición aleatoria dentro del viewport
    const x = Math.round(Math.random() * window.innerWidth,2);
    icon.style.left = x + "px";
    icon.style.bottom = "-20px";

    $fondo.appendChild(icon)

    // eliminar cuando termine la animación
    icon.addEventListener("animationend", () => {
        icon.remove();
    });

}

// generar un corazón cada cierto tiempo
setInterval(startAnimation, 400);

document,addEventListener('DOMContentLoaded', ()=>{
    crearCard();
})
