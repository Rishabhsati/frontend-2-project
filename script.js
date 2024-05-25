// scripts.js
document.addEventListener("DOMContentLoaded", () => {
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const emailError = document.getElementById("email-error");
  const passwordError = document.getElementById("password-error");
  const successMessage = document.getElementById("success-message");
  const form = document.getElementById("signup-form");

  // OnChange functions for email and password validation
  emailInput.addEventListener("input", validateEmail);
  passwordInput.addEventListener("input", validatePassword);

  // OnClick event for form submission
  form.addEventListener("submit", handleSubmit);

  // Validate email function
  function validateEmail() {
    const emailValue = emailInput.value;
    if (
      emailValue.length > 3 &&
      emailValue.includes("@") &&
      emailValue.includes(".")
    ) {
      emailError.textContent = "";
      checkFormValidity();
    } else {
      emailError.textContent =
        "Make sure email is more than 3 characters and has @ and a .";
      successMessage.style.display = "none";
    }
  }

  // Validate password function
  function validatePassword() {
    const passwordValue = passwordInput.value;
    if (passwordValue.length > 8) {
      passwordError.textContent = "";
      checkFormValidity();
    } else {
      passwordError.textContent = "Password must be more than 8 characters";
      successMessage.style.display = "none";
    }
  }

  // Check form validity and display success message
  function checkFormValidity() {
    if (!emailError.textContent && !passwordError.textContent) {
      successMessage.style.display = "block";
      successMessage.textContent = "All good to go!";
    }
  }

  // Handle form submission
  function handleSubmit(event) {
    event.preventDefault();
    if (!emailError.textContent && !passwordError.textContent) {
      if (confirm("Do you want to submit the form?")) {
        alert("Successful signup!");
        form.reset();
        successMessage.style.display = "none";
      } else {
        // Clear input values if form submission is canceled
        form.reset();
        successMessage.style.display = "none";
        emailError.textContent = "";
        passwordError.textContent = "";
      }
    }
  }
});
