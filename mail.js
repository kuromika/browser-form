
const mailRegex = /\w+@\w+.com/;
const mail = document.querySelector('#mail');
const error = mail.nextElementSibling;

mail.addEventListener('input', () => {
    
    if (!mailRegex.test(mail.value)) {
        mail.className = "invalid";
        error.textContent = "Invalid Email"
        error.className = "error active";
    } else {
        mail.className = "valid";
        error.textContent = "";
        error.className = "error";
    }
})

export default mail;