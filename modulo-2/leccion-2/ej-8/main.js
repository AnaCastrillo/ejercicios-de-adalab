const firstDogImage =
  "https://images.dog.ceo/breeds/schipperke/n02104365_8156.jpg";
const firstDogName = "Dina";

const secondDogImage =
  "https://images.dog.ceo/breeds/collie-border/n02106166_355.jpg";
const secondDogName = "Luna";

const thirdDogImage =
  "https://images.dog.ceo/breeds/affenpinscher/n02110627_7065.jpg";
const thirdDogName = "Lana";

const body = document.querySelector("body");

console.log(body);

body.innerHTML = `<div class="card"> <div class="card__image"> <img src="${firstDogImage}"/></div> <h2 class="card__name"> ${firstDogName} </h2> </div>`;
body.innerHTML =
  body.innerHTML +
  `<div class="card"> <div class="card__image"> <img src="${secondDogImage}"/></div> <h2 class="card__name"> ${secondDogName} </h2> </div>`;
body.innerHTML =
  body.innerHTML +
  `<div class="card"> <div class="card__image"> <img src="${thirdDogImage}"/></div> <h2 class="card__name"> ${thirdDogName} </h2> </div>`;

