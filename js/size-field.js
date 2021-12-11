
const rangeSizeHor = document.querySelector('#horisontal');
const rangeSizeVer = document.querySelector('#vertical');

function setRange(e) {
    const fieldStyle = document.querySelector('.container_field');
    rangeSizeVer.style.width = fieldStyle.clientHeight + 'px';

    const vertLabel = document.querySelector('.vertical');
        vertLabel.style.transform = `rotate(-90deg) translate(calc(50% + 
            2rem + 13px), 
            calc(-200px - 15px - 2rem + ${(400 - rangeSizeHor.value) / 2}px))`;

    if(e && e.target.closest('#horisontal')) {
        fieldStyle.style.width = rangeSizeHor.value + 'px';
        console.log(fieldStyle.style.width, '    fieldStyle.style.width');
    }
    if(e && e.target.closest('#vertical')) {
        fieldStyle.style.height = rangeSizeVer.value + 'px';
        rangeSizeVer.style.width = fieldStyle.clientHeight + 'px';

        console.log(rangeSizeVer.style.width,  '    rangeSizeVer.style.width ');
    }
}

rangeSizeVer.addEventListener('change', setRange);
rangeSizeHor.addEventListener('change', setRange);

export { setRange, rangeSizeHor,  rangeSizeVer };