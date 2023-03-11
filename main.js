const BtnEl = document.getElementById("form-submit");

function Validate() {
  const emailEl = document.getElementById("email").value;

  if (emailEl === "") {
    alert("Please enter your email");
  } else if (emailEl === document.getElementById("email").value) {
    alert("Login Successful");
  }
}

BtnEl.addEventListener("click", Validate);
