const loginForm = document.getElementById('login-form');
const errorMessage = document.getElementById('error-message');

loginForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent form submission

    // Validate user credentials here (e.g., send a request to a server)

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Placeholder for validation:
    setTimeout(() => {
        if (username === 'admin' && password === '123') {
            // Redirect to the main page or perform other actions on successful login
            window.location.href = 'main.html';
        } else {
            errorMessage.textContent = 'Invalid username or password.';
        }
    }, 500); // Simulate a delay for validation
});
