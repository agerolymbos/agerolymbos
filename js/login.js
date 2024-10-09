document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const errorElement = document.getElementById('error');

    // Check if user is already logged in
    if (localStorage.getItem('loggedIn') === 'true') {
        window.location.href = 'index.html'; // Redirect to the home page if already logged in
    }

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Basic example of username and password check
        if (username === 'user' && password === 'password') {
            localStorage.setItem('loggedIn', 'true');
            window.location.href = 'index.html'; // Redirect to home page upon successful login
        } else {
            errorElement.textContent = 'Λάθος όνομα χρήστη ή κωδικός.';
        }
    });
});
