const signupFormHandler = async (event) => {
    event.preventDefault();

    const username = document.querySelector('#username-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();

    if (username && password && email) {
        const response = await fetch('/api/user-routes', {
            method: 'POST',
            body: JSON.stringify({ 
                username: username.value, 
                email: email.value,
                password: password.value, 
            }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Failed to sign up.');
        }
    }
};

document
    .querySelector('.signup-form')
    .addEventListener('submit', signupFormHandler);