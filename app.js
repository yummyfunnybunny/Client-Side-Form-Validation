const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

form.addEventListener("submit", (el) => {
  el.preventDefault();

  checkInput();
});

function checkInput() {
  // get the values from the inputs
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim();

  // check username input
  if (usernameValue === "") {
    setErrorFor(username, "Username cannot be blank");
  } else {
    // add success class
    setSuccessFor(username);
  }

  // check Email input
  if (emailValue === "") {
    setErrorFor(email, "Email cannot be blank");
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, "Email is not valid");
  } else {
    setSuccessFor(email);
  }

  // check password input
  if (passwordValue === "") {
    setErrorFor(password, "Password cannot be blank");
  } else {
    // add success class
    setSuccessFor(password);
  }

  // check password2 input
  if (password2Value === "") {
    setErrorFor(password2, "Password cannot be blank");
  } else if (passwordValue !== password2Value) {
    setErrorFor(password2, "Password does not match");
  } else {
    // add success class
    setSuccessFor(password2);
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement; // .form-control div
  const small = formControl.querySelector("small");

  // add error message inside small
  small.innerText = message;

  // add error class
  formControl.className = "form-control error";
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
