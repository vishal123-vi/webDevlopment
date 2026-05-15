// SubmitButton
document
  .getElementById("RegistrationForm")
  .addEventListener("submit", (event) => {
    event.preventDefault();

    const fullName = document.getElementById("fullName").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const dob = document.getElementById("dob").value;
    const gender = document.querySelector(
      "input[name='gender']:checked",
    )?.value;
    const qualification = document.getElementById("qualification").value;
    const marks = document.getElementById("marks").value;
    const course = document.getElementById("course").value;
    const address = document.getElementById("address").value;
    const city = document.getElementById("city").value;
    const pin = document.getElementById("pin").value;
    const guardianName = document.getElementById("guardianName").value;
    const guardianPhone = document.getElementById("guardianPhone").value;
    const hearAbout = document.getElementById("hearAbout").value;
    const specialRequirements = document.getElementById(
      "specialRequirements",
    ).value;

    // if (!/^[A-Za-z\s]+$/.test(fn)) {
    //   document.getElementById("NameError").innerText = "Invalid Full Name";
    // }
    // if (!/^[A-Za-z\.\_\d]+@gmail.com$/.test(em)) {
    //   document.getElementById("emailError").innerText = "Invalid Email";
    // }
    // if (!/^[6-9]\d{9}$/.test(ph)) {
    //   document.getElementById("phoneError").innerText = "Invalid phone number";
    // }
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
    // if (!/^[A-Za-z\s]+$/.test(city)) {
    //   document.getElementById("cityError").innerText = " inValid City Name";
    //  }
    // //  pin
    // if (!/^[0-9]{6}$/.test(pin)) {
    //   document.getElementById("pinError").innerText =
    //     "Enter Valid 6 Digit Pin Code";
    // }

    const timings = [];
    document
      .querySelectorAll("input[name='timings']:checked")
      .forEach((item) => {
        timings.push(item.value);
      });
    // console.log(fn);
    // console.log(em);
    // console.log(ph);
    // console.log(dob);
    // console.log(gndr);
    // console.log(qualification);
    // console.log(marks);
    // console.log(course);
    // console.log(address);
    // console.log(pin);
    // console.log(timings);
    const registrationData = {
      fullName: fullName,
      email: email,
      phone: phone,
      dob: dob,
      gender: gender,
      qualification: qualification,
      marks: marks,
      course: course,
      address: address,
      city: city,
      pin: pin,
      timings: timings,
      guardianName: guardianName,
      guardianPhone: guardianPhone,
      hearAbout: hearAbout,
      specialRequirements: specialRequirements,
    };
    validateData(registrationData)
      ? (console.log("Registration Data:", registrationData),
        alert("Registration successful! Check console for details."))
      : alert("Registration unsuccessfull! Enter valid Data.");
  });

// ResetButton
document
  .getElementById("RegistrationForm")
  .addEventListener("reset", (event) => {
    event.preventDefault();

    window.location.reload();
  });
function validateData(data) {
  document.querySelectorAll("small").forEach((item) => {
    item.innerText = "";
  });

  let isValid = true;

  console.log(data);

  // Name
  if (!data.fullName || data.fullName.trim() === "") {
    document.getElementById("NameError").innerText =
      "Please enter a valid name";
    isValid = false;
  } else if (!/^[A-Za-z\s]+$/.test(data.fullName)) {
    document.getElementById("NameError").innerText =
      "Please enter a valid name";
    isValid = false;
  }

  //Email
  if (!data.email || data.email.trim() === "") {
    document.getElementById("emailError").innerText =
      "Please enter a valid email address";
    isValid = false;
  } else if (
    !/^[A-Za-z\d\.\_]+@(gmail.com|outlook.com|ricr.in)$/.test(data.email)
  ) {
    document.getElementById("emailError").innerText =
      "Please enter a valid email address";
    isValid = false;
  }

  //Phone
  if (!data.phone || data.phone.toString().trim() === "") {
    document.getElementById("phoneError").innerText =
      "Enter a 10-digit Indian mobile number";
    isValid = false;
  } else if (!/^[6-9]\d{9}$/.test(data.phone)) {
    document.getElementById("phoneError").innerText =
      "Enter a 10-digit Indian mobile number";
    isValid = false;
  }

  // DOB and Age (must be at least 15 years old)
  if (!data.dob || data.dob.trim() === "") {
    document.getElementById("dobError").innerText =
      "You must be at least 15 years old";
    isValid = false;
  } else {
    const birthDate = new Date(data.dob);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }
    if (age < 15) {
      document.getElementById("dobError").innerText =
        "You must be at least 15 years old";
      isValid = false;
    }
  }

  // Validate Gender
  if (!data.gender || data.gender.trim() === "") {
    document.getElementById("dobError").innerText = "Please select your gender";
    isValid = false;
  }

  //  Qualification
  if (!data.qualification || data.qualification.trim() === "") {
    document.getElementById("Qualification").innerText =
      "Please select a qualification";
    isValid = false;
  }

  // Marks
  if (!data.marks || data.marks.trim() === "") {
    document.getElementById("marksError").innerText =
      "Enter a valid percentage or grade";
    isValid = false;
  } else if (!/^\d+(\.\d+)?%?$|^[A-F][-+]?$/.test(data.marks)) {
    document.getElementById("marksError").innerText =
      "Enter a valid percentage or grade";
    isValid = false;
  }

  // Course
  if (!data.course || data.course.trim() === "") {
    document.getElementById("courseError").innerText = "Select a course";
    isValid = false;
  }

  // Timings
  if (!data.timings || data.timings.length === 0) {
    document.getElementById("timingsError").innerText = "Select a batch timing";
    isValid = false;
  }

  // Address
  if (!data.address || data.address.trim() === "") {
    document.getElementById("addressError").innerText =
      "Enter your full address";
    isValid = false;
  } else if (!/^[A-Za-z0-9\s,.\-/#]+$/.test(data.address)) {
    document.getElementById("addressError").innerText =
      "Enter your full address";
    isValid = false;
  }

  //City
  if (!data.city || data.city.trim() === "") {
    document.getElementById("cityError").innerText =
      "Please enter a valid city name";
    isValid = false;
  } else if (!/^[A-Za-z\s]+$/.test(data.city)) {
    document.getElementById("cityError").innerText =
      "Please enter a valid city name";
    isValid = false;
  }

  // Pin Code
  if (!data.pin || data.pin.trim() === "") {
    document.getElementById("pinError").innerText =
      "Enter a valid 6-digit pin code";
    isValid = false;
  } else if (!/^[0-9]{6}$/.test(data.pin)) {
    document.getElementById("pinError").innerText =
      "Enter a valid 6-digit pin code";
    isValid = false;
  }

  // Guardian Name
  if (!data.guardianName || data.guardianName.trim() === "") {
    document.getElementById("guardianNameError").innerText =
      "Enter guardian's full name";
    isValid = false;
  } else if (!/^[A-Za-z\s]+$/.test(data.guardianName)) {
    document.getElementById("guardianNameError").innerText =
      "Enter guardian's full name";
    isValid = false;
  }

  // Guardian Phone
  if (!data.guardianPhone || data.guardianPhone.toString().trim() === "") {
    document.getElementById("guardianPhoneError").innerText =
      "Enter a valid 10-digit contact number";
    isValid = false;
  } else if (!/^[6-9]\d{9}$/.test(data.guardianPhone)) {
    document.getElementById("guardianPhoneError").innerText =
      "Enter a valid 10-digit contact number";
    isValid = false;
  }
  if (!data.hearAbout || data.hearAbout.trim() === "") {
    document.getElementById("hearAboutError").innerText = "Select an option";
    isValid = false;
  }FFFfff
  return isValid;
}
