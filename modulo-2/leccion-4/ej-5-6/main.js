const titleEl = getEl(".title");
const textEl = getEl(".text");
const btnEl = getEl(".btn");
const imgEl = getEl("img");

function getEl(a) {
  const element = a;

  if (element === null) {
    return console.error(
      "No existe ningún elemento con clase, id o tag llamado " + getEl(a)
    );
  } else {
    return document.querySelector(element).innerHTML;
  }
}
