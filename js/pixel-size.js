import { setRange, rangeSizeHor,  rangeSizeVer } from './size-field.js';

const main = document.querySelector('.main');
const select = document.querySelector('#sizePixel');


function creat(COUNT_H = select.value, COUNT_V  = select.value) {
    COUNT_H = select.value;
    COUNT_V = COUNT_H;
    console.log('here creat  ', select.value);

    let div_container = document.createElement("div");

    div_container.classList.add("container_field");

    for (let i =  0; i < COUNT_V; i++){
        let div_container_row = document.createElement("div");

        div_container_row.classList.add("container_row");
        div_container.append(div_container_row);

        for (let i =  0; i < COUNT_H; i++){
            let div_item = document.createElement("div")

            div_item.classList.add("item");
            div_container_row.append(div_item);   
        }       
    }
    return div_container;
}

const div_container = creat();
main.insertAdjacentElement("afterbegin", div_container);
rangeSizeVer.style.width = div_container.clientHeight + 'px';

select.onchange = () => {
    const currentField = document.querySelector('.container_field');

    console.log('here event   ', select.value);

    currentField.replaceWith(creat(select.value, select.value));
    rangeSizeHor.value = 400;
    rangeSizeVer.value = 400;
    setRange();
}
