let btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  let r = document.getElementById("red").value;
  let g = document.getElementById("green").value;
  let b = document.getElementById("blue").value;

  document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
});
