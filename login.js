const email = document.getElementById('email-login');
const password = document.getElementById('password-login');

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault(); 
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailValue === '' || passwordValue === '') {
        alert("Please fill in all fields.");
        return;
    }

    if (!emailPattern.test(emailValue)) {
        alert("Please enter a valid email.");
        return;
    }

    if (passwordValue.length < 8) {
        alert("Password should contain at least 8 characters.");
        return;
    }
    
    alert("Login Successful!");
    email.value = "";
    password.value = "";
});
