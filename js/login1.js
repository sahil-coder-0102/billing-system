function handleLogin(event) {
    event.preventDefault(); // Prevent form submission

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // You can change these credentials for your actual login logic
    const userCredentials = { username: "user", password: "user123" };
    const adminCredentials = { username: "admin", password: "admin123" };

    const errorMessage = document.getElementById("error");

    if (username === userCredentials.username && password === userCredentials.password) {
        window.location.href = "login.html"; // Redirect to user page
    } else if (username === adminCredentials.username && password === adminCredentials.password) {
        window.location.href = "adminfeedback.html"; // Redirect to admin page
    } else {
        errorMessage.innerText = "Invalid username or password. Please try again.";
    }
}
