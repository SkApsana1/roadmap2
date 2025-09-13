
document.querySelector('form').addEventListener('submit', function(e) {
    const name = document.getElementById('firstname-input').value.trim();
    const email = document.getElementById('email-input').value.trim();
    const password = document.querySelectorAll('input[type="password"]')[0].value;
    const repeatPassword = document.querySelectorAll('input[type="password"]')[1].value;

  
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordPattren=/^[A-Z][a-z]+@\d$/;
    if (!name) {
        alert('Please enter your name.');
        e.preventDefault();
        return;
    }
    if (!email || !emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        e.preventDefault();
        return;
    }
    if (!password) {
        alert('Please enter a password.');
        e.preventDefault();
        return;
    }
    if (password !== repeatPassword) {
        alert('Passwords do not match.');
        e.preventDefault();
        return;
    }
    if(password.length<8){
        alert("Password Should Containes 8 Characters")
        e.preventDefault()
    }
     if (!passwordPattren.test(password)) {
        alert('Password Should contains 1Uppercase letter followed by lowecase letters and @ with numbers.');
        e.preventDefault();
        return;
     }

});
