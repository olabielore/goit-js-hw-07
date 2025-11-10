const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", onSubmit);

function onSubmit(event) {
  event.preventDefault();
  const formSub = event.currentTarget;
  const email = formSub.elements.email.value.trim();
  const password = formSub.elements.password.value.trim();

  if (email === "" || password === "") {
    return alert("All form fields must be filled in");
  }

  const data = {
    email,
    password,
  };

  console.log(data);

  formSub.reset();
}
