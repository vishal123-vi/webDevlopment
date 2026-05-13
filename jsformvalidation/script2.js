function submit() {
  const na = document.getElementById("fullname").value;
  const ph = document.getElementById("phone").value;
  const em = document.getElementById("email").value;

  document.querySelectorAll(".error").forEach((element) => {
    element.innerText = "";
  });
  if (!/^[A-Za-z\s]+$/.test(na)) {
    document.getElementById("nameErrar").innerText = "invalid name";
  }
  if (!/^[A-Za-z\.\_\d]+@gmail.com$/.test(ph)) {
    document.getElementById("phoneError").innerText = "Invalid Email";
  }

  if (!/^[6-9]\d{9}$/.test(em)) {
    document.getElementById("emailError").innerText = "Invalid Phone";
  }

  
}
