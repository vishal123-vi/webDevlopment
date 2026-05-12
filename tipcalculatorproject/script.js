document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();// 
  const bill = document.getElementById("billAmount").value;
  const ser = document.getElementById("serviceLevel").value;
  const pc = document.getElementById("peoplecount").value;

  const tipPerPerson = (bill * ser) / pc;

  //   console.log(tipPerPerson);
  document.getElementById("billAmount").value = "";
  document.getElementById("serviceLevel").value = "";
  document.getElementById("peoplecount").value = "";
  document.getElementById("tipInfo").innerText = tipPerPerson;
});
