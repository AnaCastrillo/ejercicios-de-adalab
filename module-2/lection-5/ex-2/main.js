const name = document.querySelector(".name");

const btn = document.querySelector(".btn");

function helloYourName(ev) {
  const yourName = name.value; // la constante que se usa en la función se declara en la funcion
  console.log("Hola, " + yourName);
}

btn.addEventListener("click", helloYourName);

// Limpia las lineas que no sirvan
