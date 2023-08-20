document.getElementById('triangle-calc').addEventListener('click', function(){
    const triangleBaseValue = getInputValueById('triangle-base');
    const triangleHeightValue = getInputValueById('triangle-height');
    const triangleValue = 0.5 * triangleBaseValue * triangleHeightValue;
    setInputValue('triangle-area', triangleValue);
})