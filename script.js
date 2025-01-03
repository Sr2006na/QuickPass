function generatePassword() {
    const length = document.getElementById('length').value;

    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const numberChars = '0123456789';
    const symbolChars = '!@#$%^&*()_=`+[]{}|;:,.<>?';
    let password = [
        uppercaseChars[Math.floor(Math.random() * uppercaseChars.length)],
        lowercaseChars[Math.floor(Math.random() * lowercaseChars.length)],
        numberChars[Math.floor(Math.random() * numberChars.length)],
        symbolChars[Math.floor(Math.random() * symbolChars.length)]
    ].join('');
    const allChars = uppercaseChars + lowercaseChars + numberChars + symbolChars;
    for (let i = password.length; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allChars.length);
        password += allChars[randomIndex];
    }

    password = password.split('').sort(() => Math.random() - 0.5).join('');
    document.getElementById('password').value = password;
}

function copyPassword() {
    const passwordField = document.getElementById('password');
    passwordField.select();
    document.execCommand('copy');
    const popup = document.getElementById('custom-popup');
    popup.classList.add('show');

    
    setTimeout(() => {
        popup.classList.remove('show');
    }, 2000);
}