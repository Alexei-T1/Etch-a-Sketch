import { setRange, rangeSizeHor,  rangeSizeVer } from './size-field.js';
import { currentColor, getRandomColor } from './set-color.js';

const main = document.querySelector('.main');
const select = document.querySelector('#sizePixel');

const rainbowButton = document.querySelector('.rainbow_mode');
const simpleButton = document.querySelector('.mode');
const easeButton = document.querySelector('.ease_mode');
const switcherHover = document.querySelector('#checkbox');


let check = 'simple';
let checkHover = false;
switcherHover.checked = checkHover;

rainbowButton.onclick = () => {
    check = 'random';
 }
simpleButton.onclick = () => {
    check = 'simple';
 }
easeButton.onclick = () => {
    check = 'ease';
 }
 switcherHover.onclick = () => {
    checkHover = switcherHover.checked;
 }


function creat(COUNT_H = select.value, COUNT_V  = select.value) {
    let beforeColor;
    COUNT_H = select.value;
    COUNT_V = COUNT_H;

    let div_container = document.createElement("div");

    div_container.classList.add("container_field");

    for (let i =  0; i < COUNT_V; i++){
        let div_container_row = document.createElement("div");

        div_container_row.classList.add("container_row");
        div_container.append(div_container_row);

        for (let i =  0; i < COUNT_H; i++){
            let div_item = document.createElement("div");
            div_item.classList.add("item");
            beforeColor = getComputedStyle(div_item, null).backgroundColor;

            div_item.onmouseover = () => {
                div_item.classList.remove('hovering_mode-item');

                beforeColor = div_item.style.backgroundColor;
                div_item.style.backgroundColor = currentColor;
                if(check == 'random') {
                    div_item.style.backgroundColor = getRandomColor();

                }
                if (check == 'ease'){
                    div_item.style.backgroundColor = '#ffffff'
                }   
            }

                div_item.onmouseout = () => {
                    if (checkHover) {
                        div_item.classList.add('hovering_mode-item');
                        div_item.style.backgroundColor = beforeColor;
                    } 
                }
                div_item.ontransitionend = () => {
                    div_item.classList.remove('hovering_mode-item');
                }
            
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
