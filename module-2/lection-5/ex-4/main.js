const Number = oddNumber(6);

function oddNumber(a) {
  let result = a % 2;

  if (result === 1) {
    console.log(a + " es un numero impar");
  } else {
    console.log(a + " es un numero par");
  }
}

oddNumber(7);
