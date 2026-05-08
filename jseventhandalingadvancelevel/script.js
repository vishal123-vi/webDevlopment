document
  .getElementById("warningbox")
  .addEventListener("mouseover", fillYelloColor);
document
  .getElementById("warningbox")
  .addEventListener("mouseout", fillWhiteColor);

document
  .getElementById("dangerbox")
  .addEventListener("mouseover", fillRedColor);
document.getElementById("dangerbox").addEventListener("mouseout", fillWhiteColor);

function fillYelloColor() {
  document.getElementById("bulb").style.backgroundColor = "Yellow";
}
function fillRedColor() {                                                                                      
  document.getElementById("bulb").style.backgroundColor = "red";
}
function fillWhiteColor() {
  document.getElementById("bulb").style.backgroundColor = "white";
}