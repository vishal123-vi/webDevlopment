let body = document.querySelector("body")
document.getElementById("bgColor").addEventListener("input", ChangeColor);
function ChangeColor() {
  const color = document.getElementById("bgColor").value;
  document.getElementById("changeColor").style.backgroundColor = color;
}

document.getElementById("headingColor").addEventListener("input", ChangeColor1);
function ChangeColor1() {
  const color = document.getElementById("headingColor").value;
  document.getElementById("heading").style.color = color;
}

document.getElementById("paraColor").addEventListener("input", ChangeColor2);
function ChangeColor2() {
  const color = document.getElementById("paraColor").value;
  document.getElementById("para").style.color = color;
}

function reset(){
    window.location.reload();
}