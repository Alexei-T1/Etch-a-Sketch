const colorInptut = document.querySelector('#color');
const currentColor = colorInptut.value;

function setColor(e) {
    if(currentColor !=  colorInptut.value) {
        const labelColor = document.querySelector('.set_color');
        labelColor.style.backgroundColor = colorInptut.value;
    }
}

colorInptut.addEventListener('change', setColor);
