// Polaris Space Agency - main.js
// Register Form Validation
function validateForm1() {
  var name = document.getElementById("reg-fname").value;
  var email = document.getElementById("reg-email").value;
  var password = document.getElementById("reg-password").value;

  if (name == "") {
    alert("name is required");
    return false;
  }

  if (password == "") {
    alert("please enter password");
    return false;
  }

  var at_position = email.indexOf("@");
  var dot_position = email.lastIndexOf(".");
  if ((at_position < 1) || ((dot_position - at_position) < 2)) {
    alert("Please enter correct email ID");
    return false;
  }

  alert("Account created successfully!");
  return true;
}

// Contact Form Validation
function validateForm2() {
  var name = document.getElementById("con-fname").value;
  var email = document.getElementById("con-email").value;
  var mobile_no = document.getElementById("con-phone").value;

  if (name == "") {
    alert("name is required");
    return false;
  }

  var at_position = email.indexOf("@");
  var dot_position = email.lastIndexOf(".");
  if ((at_position < 1) || ((dot_position - at_position) < 2)) {
    alert("Please enter correct email ID");
    return false;
  }

  var mobile_no_format = /^\d{10}$/;
  if (!mobile_no.match(mobile_no_format)) {
    alert("Input is not a valid 10-digit number");
    return false;
  }

  alert("Message sent successfully!");
  return true;
}

// Sign In Form Validation
function validateForm3() {
  var email = document.getElementById("login-email").value;
  var password = document.getElementById("login-password").value;

  if (email == "") {
    alert("email is required");
    return false;
  }

  var at_position = email.indexOf("@");
  var dot_position = email.lastIndexOf(".");
  if ((at_position < 1) || ((dot_position - at_position) < 2)) {
    alert("Please enter correct email ID");
    return false;
  }

  if (password == "") {
    alert("please enter password");
    return false;
  }

  alert("Sign In successful!");
  return true;
}
