// modificamos una variable de ámbito global
let secretLetter = "y";
function mySecretLetter() {
  secretLetter = "x";
  return secretLetter;
}

console.log(secretLetter); // devuelve "y" porque aun no se ha leido la función
console.log(mySecretLetter()); // devuelve "x"
console.log(secretLetter); // devuelve "x" porque la función a cambiado el valor de la variable
