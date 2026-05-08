let modebt = document.querySelector("#mode");
let body = document.querySelector("body");
let currmode = "light";
modebt.addEventListener("click", () => {
  // console.log("yowu are trying to change mode");
  if (currmode === "light") {
    currmode = "dark";
    // document.querySelector("body").style.backgroundColor = "black";
    body.classList.add("black");
  } else {
    currmode = "light";
    // document.querySelector("body").style.backgroundColor = "white";
    body.classList.add("light");
  }
  console.log(currmode);
});
