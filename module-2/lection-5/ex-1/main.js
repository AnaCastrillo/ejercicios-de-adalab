const btn = document.querySelector(".btn");

function buttonClick() {
  const p = document.querySelector(".parraf");
  p.innerHTML = "mi primer evento CLICK!";
}

btn.addEventListener("click", buttonClick);
