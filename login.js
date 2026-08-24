const form = document.getElementById("loginForm");
const username = document.getElementById("username");
const password = document.getElementById("password");
const showPassword = document.getElementById("showPassword");
const message = document.getElementById("message");

showPassword.addEventListener("click", function () {
    if (password.type === "password") {
        password.type = "text";
        showPassword.textContent = "Hide";
    } else {
        password.type = "password";
        showPassword.textContent = "Show";
    }
});

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const userValue = username.value.trim();
    const passwordValue = password.value;

    if (userValue === "" || passwordValue === "") {
        message.innerHTML =
            '<div class="alert alert-warning">Please fill in all fields.</div>';

        return;
    }

    if (userValue === "kenken" && passwordValue === "kenkengwapo23") {
        localStorage.setItem("username", userValue);

        message.innerHTML =
            '<div class="alert alert-success">Login successful!</div>';

        setTimeout(function () {
            window.location.href = "dashboard.html";
        }, 500);

    } else {
        message.innerHTML =
            '<div class="alert alert-danger">Incorrect username or password.</div>';
    }
});