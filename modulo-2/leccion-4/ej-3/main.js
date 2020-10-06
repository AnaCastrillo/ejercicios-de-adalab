function priceTag(a) {
  let price = a;
  const tax = price * (21 / 100);
  let total = price + tax;

  return "Precio sin IVA: " + price + ", IVA: " + tax + " y el total: " + total;
}

console.log(priceTag(6));
