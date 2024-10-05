const container = document.querySelector("#container");
const b = document.querySelector("button");
const erase = document.querySelector("#erase");

function getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = '#';

    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }

    return color;
}

let isMouseDown = false;

document.addEventListener("mousedown", () => {
    isMouseDown = true;
});

document.addEventListener("mouseup", () => {
    isMouseDown = false;
});

function gen(num) {
    const style = getComputedStyle(container);
    let h = parseInt(style.height, 10);
    let n = h / num;

    for (let i = 0; i < num * num; i++) {
        let node = document.createElement("div");
        node.classList.add("node");

        node.style.height = n + "px";
        node.style.width = n + "px";
        container.appendChild(node);

        container.addEventListener("mouseleave", () => {
            isMouseDown = false;
        });

        let isColored = false; 

        node.addEventListener("mousedown", () => {
            if (!isColored) { 
                node.style.backgroundColor = getRandomColor();
                isColored = true; 
            }
        });

        node.addEventListener("mousemove", () => {
            if (isMouseDown && !isColored) {
                node.style.backgroundColor = getRandomColor();
                isColored = true; 
            }
        });
    }
}

gen(16);

let num = 16;

b.addEventListener("click", () => {
    num = prompt("Enter the number of squares per side for the new grid");

    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    gen(num);
});

erase.addEventListener("click", () => {
    const nodes = container.querySelectorAll(".node");
    nodes.forEach(node =>{
        node.style.backgroundColor = "white";
    });
});