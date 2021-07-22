COUNT_H = 16;
COUNT_V = 16;

function creat(COUNT_H, COUNT_V) {
    let div_container = document.createElement("div");

    div_container.classList.add("container");

    for (let i =  0; i < COUNT_V; i++){
        let div_container_row = document.createElement("div");

        div_container_row.classList.add("container_row");
        div_container.appendChild(div_container_row);

        for (let i =  0; i < COUNT_H; i++){
            let div_item = document.createElement("div")

            div_item.classList.add("item");
            div_container_row.appendChild(div_item);   
        }       
    }
    return div_container;
}

const div_container = creat(COUNT_H, COUNT_V);
console.log(div_container);
document.body.appendChild(div_container);
