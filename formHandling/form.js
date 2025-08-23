const form = document.getElementById('form');
form.addEventListener('input', (e) => {
    const target = e.target;
    const value = e.target.value.trim();
    if (target.name === "name") {
        if (value === "") {
            document.getElementById('name-error').textContent = "Name required";
        }
        else {
            document.getElementById('name-error').textContent = "";
        }
    }
    if (target.name === "email") {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!regex.test(value)) {
            document.getElementById('email-error').textContent = "Must be an email";
        }
        else {
            document.getElementById('email-error').textContent = "";
        }
    }
    if (target.name === "password") {
        if (value.length < 6) {
            document.getElementById('password-error').textContent = "Password Must be 6 character long";
        }
        else {
            document.getElementById('password-error').textContent = "";
        }
    }
});
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let valid = true;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const password = form.password.value.trim();
    if (name === "") {
        document.getElementById("name-error").textContent = "Name is required";
        valid = false;
    } else {
        document.getElementById("name-error").textContent = "";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        document.getElementById("email-error").textContent = "Invalid email";
        valid = false;
    } else {
        document.getElementById("email-error").textContent = "";
    }

    if (password.length < 6) {
        document.getElementById("password-error").textContent = "Password must be at least 6 characters";
        valid = false;
    } else {
        document.getElementById("password-error").textContent = "";
    }
    if (valid) {
        alert("Form Submitted Successfully");
        form.reset();
        document.getElementById("name-error").textContent = "";
        document.getElementById("email-error").textContent = "";
        document.getElementById("password-error").textContent = "";

    }
});