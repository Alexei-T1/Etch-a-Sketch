const colorInptut = document.querySelector('#color');
colorInptut.value = '#C4C3C3';
let currentColor = colorInptut.value;

function setColor(e) {
    const labelColor = document.querySelector('.set_color');
    console.log('load')
    if(labelColor.style.backgroundColor !=  colorInptut.value) {
        labelColor.style.backgroundColor = colorInptut.value;
        currentColor = colorInptut.value
    }
}

colorInptut.addEventListener('input', setColor);
window.addEventListener('load', setColor);

export { currentColor };