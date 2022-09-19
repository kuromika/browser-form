
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

    function getValue() {
        return element.value;
    }

    function getElement() {
        return element;
    }

    return { getElement, getValue };
}

export default FormElement;