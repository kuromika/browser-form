
const FormElement = (selector, listener, errorText, regex, length) => {
    const element = document.querySelector(selector);
    const error = element.nextElementSibling;

    element.addEventListener(listener, () => {

        if (!regex.test(element.value) || element.value.length < length) {
        element.className = "invalid";
        error.textContent = errorText;
        error.className = "error active";
        } else {
        element.className = "valid";
        error.textContent = "";
        error.className = "error";
        }
          
    });

    return { element };
}

export default FormElement;