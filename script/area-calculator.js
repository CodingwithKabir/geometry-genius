function getInputValueById(inputId){
    const inputField = document.getElementById(inputId);
    const inputFieldString = inputField.value;
    const fieldValue = parseFloat(inputFieldString);
    return fieldValue;
}

function setInputValue(elementId, elementValue){
    const elementText = document.getElementById(elementId);
    elementText.innerText = elementValue;
}