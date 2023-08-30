let email = document.querySelector("input[type='email']");
let form = document.querySelector("form");
let container = document.querySelector(".container");
let successMessage = document.querySelector(".success-message");
let successEmail = document.querySelector(".success-message p span");
let failMessage = document.querySelector(".line span");

form.onsubmit = function(e) {
    e.preventDefault();

    if(validateEmail(email.value)) {
        container.style.display = "none";
        successMessage.style.display = "block";
        successEmail.textContent = email.value
    } else {
        email.classList.add("invalid-email");
        failMessage.style.display = "block";
    }
}

email.addEventListener("focus", function() {
    email.classList.remove("invalid-email");
    failMessage.style.display = "none";
})


function validateEmail(email) {
    var pattern = /^[^\s@]+@[^\s@]+\.com$/;
    return pattern.test(email);
}