const validationInput = document.querySelector("#validation-input");
validationInput.addEventListener("blur", validation);
function validation(event) {
  if (
    event.currentTarget.value.length === Number(validationInput.dataset.length)
  ) {
    validationInput.classList.contains("invalid")
      ? validationInput.classList.replace("invalid", "valid")
      : validationInput.classList.add("valid");
  } else {
    validationInput.classList.contains("valid")
      ? validationInput.classList.replace("valid", "invalid")
      : validationInput.classList.add("invalid");
  }
}
