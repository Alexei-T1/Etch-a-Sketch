const rangeSizeHor = document.querySelector('#horisontal');
const rangeSizeVer = document.querySelector('#vertical');

const fieldStyle = document.querySelector('.container_field');
rangeSizeVer.style.width = fieldStyle.clientHeight + 'px';

function setRange(e) {
    if(e.target.closest('#horisontal')) {
        const vertLabel = document.querySelector('.vertical');
        vertLabel.style.transform = `rotate(-90deg) translate(calc(50% + 2rem + 13px), 
            calc(-200px - 15px - 2rem + ${(400 - rangeSizeHor.value) / 2}px))`;
        fieldStyle.style.width = rangeSizeHor.value + 'px';
    }
    if(e.target.closest('#vertical')) {
        fieldStyle.style.height = rangeSizeVer.value + 'px';
        rangeSizeVer.style.width = fieldStyle.clientHeight + 'px';
    }
}

fieldStyle.clientHeight


rangeSizeVer.addEventListener('change', setRange);
rangeSizeHor.addEventListener('change', setRange);