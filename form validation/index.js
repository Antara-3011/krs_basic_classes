// Defining a function to display error message
function printError(elemId, hintMsg) {
  document.getElementById(elemId).innerHTML = hintMsg;
}

// Defining a function to validate form
function validateForm() {
  // Retrieving the values of form elements
  var name = document.contactForm.name.value;
  var email = document.contactForm.email.value;
  var mobile = document.contactForm.mobile.value;
  var country = document.contactForm.country.value;
  var gender = document.contactForm.gender.value;

  // Defining error variables with a default value
  var nameErr = (emailErr = mobileErr = countryErr = genderErr = true);

  // Validate name
  if (name == "") {
    printError("nameErr", "Please enter your name");
  } else {
    printError("nameErr", "");
    nameErr = false;
  }

  // Validate email address
  if (email == "") {
    printError("emailErr", "Please enter your email address");
  } else {
    // email validation
    var atIndex = email.indexOf("@");
    var dotIndex = email.lastIndexOf(".");
    if (atIndex <= 0 || dotIndex <= atIndex || dotIndex === email.length - 1) {
      printError("emailErr", "Please enter a valid email address");
      return false;
    } else {
      printError("emailErr", "");
      emailErr = false;
    }
  }

  // Validate mobile number
  if (mobile == "") {
    printError("mobileErr", "Please enter your mobile number");
  } else {
    printError("mobileErr", "");
    mobileErr = false;
  }

  // Validate country
  if (country == "Select") {
    printError("countryErr", "Please select your country");
  } else {
    printError("countryErr", "");
    countryErr = false;
  }

  // Validate gender
  if (gender == "") {
    printError("genderErr", "Please select your gender");
  } else {
    printError("genderErr", "");
    genderErr = false;
  }

  // Prevent the form from being submitted if there are any errors
  if ((nameErr || emailErr || mobileErr || countryErr || genderErr) == true) {
    return false;
  } else {
    // Creating a string from input data for preview
    var dataPreview =
      "You've entered the following details: \n" +
      "Full Name: " +
      name +
      "\n" +
      "Email Address: " +
      email +
      "\n" +
      "Mobile Number: " +
      mobile +
      "\n" +
      "Country: " +
      country +
      "\n" +
      "Gender: " +
      gender +
      "\n";

    // Display input data in a dialog box before submitting the form
    alert(dataPreview);
  }
}
