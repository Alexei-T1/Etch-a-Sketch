const COUNT_H = 16;
const COUNT_V = 16;

function creat(COUNT_H, COUNT_V) {
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

const div_container = creat(COUNT_H, COUNT_V);
console.log(div_container);
const main = document.querySelector('.main');
main.insertAdjacentElement("afterbegin", div_container);
