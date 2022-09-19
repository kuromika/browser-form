import { createOptions } from "./country";
import FormElement from "./FormElement";

const form = document.querySelector('form');

const elements = [];

function createElements() {
    elements.push(FormElement('#mail', 'input', 'Invalid email', /\w+@\w+.com/gi, 4));
    elements.push(FormElement('#zip', 'input', 'Invalid ZipCode', /\d{5}-\d{4}/gi, 9));
    elements.push(FormElement('#password', 'input',
        'Your password needs to be alphanumeric and contain one symbol',
        /\w*\d*[-!$%^&*()_+|~=`{}[\]:";'<>?,./@]/gi, 7));
    elements.push(FormElement('#confirm-password', 'input',
        'You need to confirm your password', /.*/, 1));
}

function build() {
    createOptions();
    createElements();
}


form.addEventListener('submit', (event) => {
    event.preventDefault();

    const flag = true;

    if (elements[2].getValue() !== elements[3].getValue() && elements[2].getValue().length > 0) {
        elements[3].getElement().className = "invalid";
        elements[3].getElement().nextElementSibling.className = 'error active';
        elements[3].getElement().nextElementSibling.textContent = 'The passwords do not match';
    }

    for (let i = 0; i < elements.length; i += 1){
        if (elements[i].getElement().value.length < 1) {
            elements[i].getElement().className = "invalid";
            elements[i].getElement().nextElementSibling.className = 'error active';
            elements[i].getElement().nextElementSibling.textContent = "This field can't be empty";
        }
    }
});


export default build;