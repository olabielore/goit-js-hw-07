const spanEl = document.querySelector("#name-output");

const inputEl = document.querySelector("#name-input");

const onTextInput = (event) => {
  const inputValue = event.currentTarget.value.trim();
  if (inputValue === "") {
    spanEl.textContent = "Anonymous";
  } else {
    spanEl.textContent = inputValue;
  }
};

inputEl.addEventListener("input", onTextInput);
