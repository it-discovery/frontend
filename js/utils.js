function getInputValue(elementId) {

    const inputElement = document.getElementById(elementId);
    return inputElement.value;
}

function updateHTML(elementId, value) {

    const inputElement = document.getElementById(elementId);
    inputElement.innerHTML = value;
}

document.getElementById('').addEventListener('click', () => {
});
