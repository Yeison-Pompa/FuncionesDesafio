
// Funcion anterior

/* function pintar(){
ele.style.backgroundColor = "yellow"
} */

const ele = document.querySelector("#ele1");
const parrafo= document.querySelector("p");

/* ele.addEventListener("click", pintar) */


// Funcion modificada

ele.addEventListener("click", function() {
    ele.style.backgroundColor = "green" 
    parrafo.style.color="yellow"
})