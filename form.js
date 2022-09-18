import mail from "./mail.js";
import { createOptions } from "./country.js";

const form = document.querySelector('form');

createOptions();


form.addEventListener('submit', (event) => {
    event.preventDefault();
});


