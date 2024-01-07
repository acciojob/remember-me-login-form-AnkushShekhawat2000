//your JS code here. If required.
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the default form submission

    const usernameInput = document.getElementById('username').value;
    const passwordInput = document.getElementById('password').value;
    const rememberMeCheckbox = document.getElementById('checkbox').checked;

    if (rememberMeCheckbox) {
        // Save details to local storage
        localStorage.setItem('savedUsername', usernameInput);
        localStorage.setItem('savedPassword', passwordInput);
    } else {
        // Remove saved details from local storage
        localStorage.removeItem('savedUsername');
        localStorage.removeItem('savedPassword');
    }

    alert(`Logged in as ${usernameInput}`);

    if (localStorage.getItem('savedUsername')) {
        // Show the "Login as existing user" button
        const existingUserButton = document.createElement('button');
        existingUserButton.id = 'existing';
        existingUserButton.textContent = 'Login as existing user';
        existingUserButton.addEventListener('click', function() {
            const savedUsername = localStorage.getItem('savedUsername');
            alert(`Logged in as ${savedUsername}`);
        });

        document.body.appendChild(existingUserButton);
    }
});