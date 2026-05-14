// SubmitButton
document
  .getElementById("RegistrationForm")
  .addEventListener("submit", (event) => {
    event.preventDefault();

    const fn = document.getElementById("fullName").value;
    const em = document.getElementById("email").value;
    const ph = document.getElementById("phone").value;
    const dob = document.getElementById("dob").value;
    const gndr = document.querySelector("input[name='gender']:checked")?.value;
    const qualification = document.getElementById("qualification").value;
    const marks = document.getElementById("marks").value;
    const course = document.getElementById("course").value;
    const address = document.getElementById("address").value;
    const city = document.getElementById("city").value;
    const pin = document.getElementById("pin").value;

    if (!/^[A-Za-z\s]+$/.test(fn)) {
      document.getElementById("NameError").innerText = "Invalid Full Name";
    }
    if (!/^[A-Za-z\.\_\d]+@gmail.com$/.test(em)) {
      document.getElementById("emailError").innerText = "Invalid Email";
    }
    if (!/^[6-9]\d{9}$/.test(ph)) {
      document.getElementById("phoneError").innerText = "Invalid phone number";
    }
    // Percentage/Grade
    // if (!/^\d+(\.\d+)?$/.test(marks)) {
    //   document.getElementById("marksError").innerText =
    //     "Invalid Percentage/Grade";
    // }
    // address
    //   if (!/^[A-Za-z0-9\s,.\-/#]+$/.test(address)) {
    // document.getElementById("addressError").innerText =
    //   "Enter Valid Address";
    // }


    // city
    if (!/^[A-Za-z\s]+$/.test(city)) {
      document.getElementById("cityError").innerText = " inValid City Name";
    }
    if (!/^[0-9]{6}$/.test(pin)) {
  document.getElementById("pinError").innerText =
    "Enter Valid 6 Digit Pin Code";
}
    const timings = [];
    document
      .querySelectorAll("input[name='timings']:checked")
      .forEach((item) => {
        timings.push(item.value);
      });
    console.log(fn);
    console.log(em);
    console.log(ph);
    console.log(dob);
    console.log(gndr);
    console.log(qualification);
    console.log(marks);
    console.log(course);
    console.log(address);
    console.log(pin);
    console.log(timings);
  });

// ResetButton
document
  .getElementById("RegistrationForm")
  .addEventListener("reset", (event) => {
    event.preventDefault();

    window.location.reload();
  });


  