import { createOptions } from "./country.js";
import FormElement from "./FormElement.js";

const form = document.querySelector('form');

const elements = [];

function createElements() {
    elements.push(FormElement('#mail', 'input', 'Invalid email', /\w+@\w+.com/, 4));
    elements.push(FormElement('#zip', 'input', 'Invalid ZipCode', /\d{5}-\d{4}/), 9);
}

function build() {
    createOptions();
    createElements();
}


form.addEventListener('submit', (event) => {
    event.preventDefault();
});


export default build;