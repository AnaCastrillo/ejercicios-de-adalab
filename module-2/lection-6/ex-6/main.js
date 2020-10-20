const pearBasket = {};
pearBasket.maxValue = 20;
pearBasket.minValue = 0;
pearBasket.currentValue = 0;
pearBasket.initialValue = 1;

pearBasket.startPear = (pear) => {
  pear = pearBasket.currentValue;
  startBtn.removeEventListener("click", pearBasket.startPear);
  startBtn.classList.add("inactive");
  basket.innerHTML = pearBasket.currentValue;
};

pearBasket.addPear = (pear) => {
  pear = pearBasket.currentValue++;
  basket.innerHTML = pearBasket.currentValue;
};
pearBasket.removePear = (pear) => {
  pear = pearBasket.currentValue--;
  basket.innerHTML = pearBasket.currentValue;
};
pearBasket.backInitial = (pear) => {
  pearBasket.currentValue = pearBasket.initialValue;
  pear = pearBasket.currentValue;
  basket.innerHTML = pearBasket.currentValue;
};

const startBtn = document.querySelector(".start");
const add = document.querySelector(".add");
const remove = document.querySelector(".remove");
const init = document.querySelector(".init");
const basket = document.querySelector(".pearBasket");

startBtn.addEventListener("click", pearBasket.startPear);
add.addEventListener("click", pearBasket.addPear);
remove.addEventListener("click", pearBasket.removePear);
init.addEventListener("click", pearBasket.backInitial);
