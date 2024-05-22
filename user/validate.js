function validateForm() {
    const email = document.getElementById('email').value;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    
    if (!emailPattern.test(email)) {
        alert('Por favor, ingrese un correo electrónico válido.');
        return false;
    }
    
    // If validation passes, redirect to profile.html
    window.location.href = 'profile.html';
    return false; // Prevent actual form submission
}