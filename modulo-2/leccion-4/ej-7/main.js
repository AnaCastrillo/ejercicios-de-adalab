// get element
function getEl(a) {
  const element = document.querySelector(a);

  if (element == null) {
    return console.error(
      "No existe ningún elemento con clase, id o tag llamado " + a
    );
  } else {
    return element.innerHTML;
  }
}

const titleEl = getEl(".title");
const textEl = getEl(".text");
const btnEl = getEl(".btn");

const imgEl = getEl(".img");

// odd number
function oddNumber(a) {
  let result = a % 2;

  if (result === 1) {
    console.log(a + " es un numero impar");
  } else {
    console.log(a + " es un numero par");
  }
}

// 7

const numberEl = getEl(".number");
const numbValue = parseInt(numberEl);
const oddNumbValue = oddNumber(numbValue);
