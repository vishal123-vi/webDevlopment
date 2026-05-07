document.getElementById("bgColor").addEventListener("change", ChangeColor);
function ChangeColor() {
  const color = document.getElementById("bgColor").value;
  document.getElementById("changeColor").style.backgroundColor = color;
}

//
document.getElementById("headingColor").addEventListener("change", ChangeColor1);
function changecolor1() {
  const color = document.getElementById("headingColor").value;
  document.getElementById("heading").style.color = color;
}
