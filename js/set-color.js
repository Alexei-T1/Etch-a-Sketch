const colorInput = document.querySelector('#color');

colorInput.value = '#C4C3C3';
let currentColor = colorInput.value;



function setColor(e) {
    const labelColor = document.querySelector('.set_color');
    if(labelColor.style.backgroundColor !=  colorInput.value) {
        labelColor.style.backgroundColor = colorInput.value;
        currentColor = colorInput.value
    }
}

function getRandomColor() {
    let r = Math.floor(Math.random() * 255 + 1).toString(16);
    let g = Math.floor(Math.random() * 255 + 1).toString(16);
    let b = Math.floor(Math.random() * 255 + 1).toString(16);
    const color = `#${r}${g}${b}`

    return color;
}

colorInput.addEventListener('input', setColor);
window.addEventListener('load', setColor);

export { currentColor, getRandomColor };