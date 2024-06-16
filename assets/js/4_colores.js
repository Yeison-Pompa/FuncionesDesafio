
// Seleccionar todos los elementos div en la página
let elementos = document.querySelectorAll("div");

// Función para cambiar el color de fondo de un div dado
const cambiarColor = (elemento) => {
  elemento.style.backgroundColor = "black";
}

// Iterar sobre todos los elementos div y agregar un event listener a cada uno
elementos.forEach((div) => {
  div.addEventListener("click", () => {
    cambiarColor(div); // Llamar a la función cambiarColor para cambiar el color de fondo
  });
});
