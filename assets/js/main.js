// Polaris Space Agency - main.js

function validateForm1() {
  var f = document.getElementById("reg-fname").value;
  var l = document.getElementById("reg-lname").value;
  var e = document.getElementById("reg-email").value;
  var p = document.getElementById("reg-password").value;
  var c = document.getElementById("reg-confirm").value;

  if (f.trim() == "" || l.trim() == "") {
    alert("First name and Last name are required.");
    return false;
  }

  var at = e.indexOf("@");
  var dot = e.lastIndexOf(".");
  if (at < 1 || (dot - at) < 2) {
    alert("Please enter a valid email address.");
    return false;
  }

  if (p.length < 8) {
    alert("Password must contain at least 8 characters.");
    return false;
  }

  if (p != c) {
    alert("Password and Confirm Password must be same.");
    return false;
  }

  var ok = confirm("Are you sure you want to create this account?");
  if (ok) {
    alert("Account created successfully!");
    return true;
  } else {
    alert("Action cancelled.");
    return false;
  }
}

function validateForm2() {
  var f = document.getElementById("con-fname").value;
  var e = document.getElementById("con-email").value;
  var ph = document.getElementById("con-phone").value;
  var m = document.getElementById("con-msg").value;

  if (f.trim() == "") {
    alert("First Name is required.");
    return false;
  }

  var at = e.indexOf("@");
  var dot = e.lastIndexOf(".");
  if (at < 1 || (dot - at) < 2) {
    alert("Please enter a valid email address.");
    return false;
  }

  if (isNaN(ph) || ph.length != 10) {
    alert("Contact number must be exactly 10 digits and only numbers.");
    return false;
  }

  if (m.trim() == "") {
    alert("Please enter your message.");
    return false;
  }

  alert("Message sent successfully! Our team will respond shortly.");
  return true;
}

function validateForm3() {
  var f = document.getElementById("apply-fname").value;
  var e = document.getElementById("apply-email").value;
  var r = document.getElementById("apply-role").value;

  if (f.trim() == "") {
    alert("First Name is required.");
    return false;
  }

  var at = e.indexOf("@");
  var dot = e.lastIndexOf(".");
  if (at < 1 || (dot - at) < 2) {
    alert("Please enter a valid email address.");
    return false;
  }

  if (r == "") {
    alert("Please select a position.");
    return false;
  }

  var ok = confirm("Do you want to submit your application for " + r + "?");
  if (ok) {
    alert("Application Submitted Successfully!");
    return true;
  } else {
    return false;
  }
}
