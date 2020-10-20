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
