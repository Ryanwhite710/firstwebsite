document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('userForm');
    console.log({form})
    const email = document.getElementById('email');
    const confirmEmail = document.getElementById('confirmEmail');
    const textArea = document.getElementById('textArea');

    confirmEmail.addEventListener('input', function () {
        if (email.value !== confirmEmail.value) {
            confirmEmail.setCustomValidity('Email addresses must match.');
        } else {
            confirmEmail.setCustomValidity('');
        }
    });
});
