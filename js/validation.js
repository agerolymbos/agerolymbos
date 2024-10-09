<script>
document.getElementById('registrationForm').addEventListener('submit', function(event) {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm_password').value;
    const errorMessage = document.getElementById('error-message');
    
    // Clear previous error messages
    errorMessage.textContent = '';

    // Password strength regex
    const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!strongPasswordRegex.test(password)) {
        errorMessage.textContent = 'Ο κωδικός πρέπει να περιέχει τουλάχιστον 8 χαρακτήρες, ένα κεφαλαίο γράμμα, έναν αριθμό και ένα ειδικό χαρακτήρα.';
        event.preventDefault();
        return;
    }

    if (password !== confirmPassword) {
        errorMessage.textContent = 'Οι κωδικοί δεν ταιριάζουν.';
        event.preventDefault();
        return;
    }
});
</script>
