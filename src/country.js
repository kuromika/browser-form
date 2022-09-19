const { getNames } = require('country-list');

const selectCountry = document.querySelector('#country');

const countries = getNames();

function createOptions() {
    for (let i = 0; i < countries.length; i++){
        const option = document.createElement('option');
        option.value = countries[i];
        option.textContent = countries[i];
        selectCountry.appendChild(option);
    }
}

export { createOptions };