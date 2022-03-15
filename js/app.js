let btn = document.getElementById("btn");
let clear = document.getElementById("clear");

btn.addEventListener("click", () => {
  let r = document.getElementById("red").value;
  let g = document.getElementById("green").value;
  let b = document.getElementById("blue").value;

  document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
});
clear.addEventListener("click", () => {
  document.getElementById("red").value = "";
  document.getElementById("green").value = "";
  document.getElementById("blue").value = "";
});
