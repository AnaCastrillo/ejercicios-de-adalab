const adalaber1 = {};
adalaber1.name = "Susana";
adalaber1.age = 34;
adalaber1.job = "periodista";

const adalaber2 = {};
adalaber2.name = "Rocío";
adalaber2.age = 25;
adalaber2.job = "actriz";

const bod = document.querySelector("body");
const name = document.querySelector(".name");
const age = document.querySelector(".age");
const job = document.querySelector(".job");

bod.innerHTML = `<ul class="adalaber"><li class="name">${adalaber1.name}</li><li class="age">${adalaber1.age}</li><li class="job">${adalaber1.job}</li></ul>`;

bod.innerHTML += `<p class="phrase">Mi nombre es ${adalaber1.name}, tengo ${adalaber1.age} años y soy ${adalaber1.job}.`;

bod.innerHTML += `<p class="phrase">Mi nombre es ${adalaber2.name}, tengo ${adalaber2.age} años y soy ${adalaber2.job}.`;
