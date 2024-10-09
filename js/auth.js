document.addEventListener("DOMContentLoaded", function() {
    const loggedIn = localStorage.getItem('loggedIn');
    
    // Show or hide the logout link based on login status
    const logoutLink = document.getElementById('logout');
    if (logoutLink) {
        if (loggedIn) {
            logoutLink.style.display = 'inline'; // Show logout link
        } else {
            logoutLink.style.display = 'none'; // Hide logout link
        }

        // Handle logout action
        logoutLink.addEventListener('click', function() {
            localStorage.removeItem('loggedIn');
            window.location.href = 'login.html'; // Redirect to login page
        });
    }
});
