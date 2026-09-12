// Space Agency Website - main.js

// This function checks the Create Account form
function checkRegisterForm() {
  // Get all the values that the user typed in
  var firstName = document.getElementById("firstName").value;
  var lastName = document.getElementById("lastName").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var confirmPassword = document.getElementById("confirmPassword").value;

  // Check if first name or last name is empty
  if (firstName.trim() == "" || lastName.trim() == "") {
    alert("First name and Last name are required.");
    return false; // Stop the form from submitting
  }

  // Find where the @ and . are in the email
  var atPosition = email.indexOf("@");
  var dotPosition = email.lastIndexOf(".");
  
  // Make sure the email has an @ and a . in the correct places
  if (atPosition < 1 || (dotPosition - atPosition) < 2) {
    alert("Please enter a valid email address.");
    return false;
  }

  // Password must be at least 8 characters long
  if (password.length < 8) {
    alert("Password must contain at least 8 characters.");
    return false;
  }

  // Make sure both passwords match
  if (password != confirmPassword) {
    alert("Password and Confirm Password must be same.");
    return false;
  }

  // Ask the user if they are sure
  var userChoice = confirm("Are you sure you want to create this account?");
  if (userChoice == true) {
    alert("Account created successfully!");
    return true; // Submit the form
  } else {
    alert("Action cancelled.");
    return false;
  }
}

// This function checks the Contact Us form
function checkContactForm() {
  // Get values from the contact form
  var firstName = document.getElementById("firstName").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var message = document.getElementById("message").value;

  // Check if first name is empty
  if (firstName.trim() == "") {
    alert("First Name is required.");
    return false;
  }

  // Check if email is valid
  var atPosition = email.indexOf("@");
  var dotPosition = email.lastIndexOf(".");
  if (atPosition < 1 || (dotPosition - atPosition) < 2) {
    alert("Please enter a valid email address.");
    return false;
  }

  // Phone number must be numbers only and exactly 10 digits
  if (isNaN(phone) || phone.length != 10) {
    alert("Contact number must be exactly 10 digits and only numbers.");
    return false;
  }

  // Check if they typed a message
  if (message.trim() == "") {
    alert("Please enter your message.");
    return false;
  }

  alert("Message sent successfully! Our team will respond shortly.");
  return true;
}

// This function checks the Job Application form
function checkJobForm() {
  // Get values from the jobs form
  var firstName = document.getElementById("firstName").value;
  var email = document.getElementById("email").value;
  var jobRole = document.getElementById("jobRole").value;

  if (firstName.trim() == "") {
    alert("First Name is required.");
    return false;
  }

  // Check if email is valid
  var atPosition = email.indexOf("@");
  var dotPosition = email.lastIndexOf(".");
  if (atPosition < 1 || (dotPosition - atPosition) < 2) {
    alert("Please enter a valid email address.");
    return false;
  }

  // Check if a job position was selected from the dropdown
  if (jobRole == "") {
    alert("Please select a position.");
    return false;
  }

  // Ask if they are sure they want to apply for that specific job
  var userChoice = confirm("Do you want to submit your application for " + jobRole + "?");
  if (userChoice == true) {
    alert("Application Submitted Successfully!");
    return true;
  } else {
    return false;
  }
}
