const main = document.getElementById("main");
const subscribe = document.getElementById("subscribe");
const error = document.getElementById("error");
const input = document.getElementById("email");
const success = document.getElementById("success__container");
const dismiss = document.getElementById("dismiss");

// Validates Email against the RegEx
function validateEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return emailPattern.test(email);
}

//Listen to a click on the submit button
subscribe.addEventListener("click", () => {
  //if EMail format is ok hide main and display success
  if (validateEmail(input.value)) {
    console.log("c'estOK");
    main.style.display = "none";
    success.style.display = "flex";
    const useremail = document.getElementById("user-email");
    useremail.textContent = input.value;
    //if Email format is not ok show error message and box highlighting
  } else {
    error.style.display = "block";
    input.classList.add("active");
  }
});
//On click on dismiss button show main card
dismiss.addEventListener("click", () => {
  input.classList.remove("active");
  success.style.display = "none";
  error.style.display = "none";
  main.style.display = "grid";
});
