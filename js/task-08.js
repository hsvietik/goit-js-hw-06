const loginForm = document.querySelector(".login-form");
loginForm.addEventListener("submit", formControl);
function formControl(event) {
  event.preventDefault();
  if (
    !event.target.elements.email.value ||
    !event.target.elements.password.value
  ) {
    window.alert(`Bсі поля повинні бути заповнені`);
  } else {
    const formData = {
      email: event.target.elements.email.value,
      password: event.target.elements.password.value,
    };
    console.log(formData);
  }
  event.target.elements.email.value = "";
  event.target.elements.password.value = "";
}
