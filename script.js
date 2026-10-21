
const form = document.getElementById("contactForm");
const response = document.getElementById("response");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (name === "" || email === "" || message === "") {
        response.textContent = "Please fill in all fields!";
        response.style.color = "red";
        return;
    }

    if (!emailPattern.test(email)) {
        response.textContent = "Please enter a valid email address!";
        response.style.color = "red";
        return;
    }

    response.textContent =
        "Thank you, " + name + "! Your form has been validated successfully.";
    response.style.color = "green";

    form.reset();
});
