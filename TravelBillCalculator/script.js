document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();

  const km = Number(document.getElementById("Kilometer").value);

  let totalBill = 0;

  if (km <= 10) {
    totalBill = km * 11;
  } else if (km <= 50) {
    totalBill = 10 * 11 + (km - 10) * 10;
  } else {
    totalBill = 10 * 11 + 40 * 10 + (km - 50) * 8;
  }

  // console.log("Total Bill = Rs." + totalBill);

  document.getElementById("total").innerText = totalBill;

  document.getElementById("Kilometer").value = "";
});



// document.querySelector("form").addEventListener("submit", (event) => {
//   event.preventDefault();
//   const Kilometer = document.getElementById("Kilometer").value;
//   const rate = 11;

//   const totalbill = Kilometer * rate;
//   // console.log(totalbill);
//   document.getElementById("Kilometer").value = "";
//   document.getElementById("total").innerText = totalbill;
// });
