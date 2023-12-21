export function getInputValue(elementId) {

    const inputElement = document.getElementById(elementId);
    return inputElement.value;
}

export function updateHTML(elementId, value) {

    const inputElement = document.getElementById(elementId);
    inputElement.innerHTML = value;
}

