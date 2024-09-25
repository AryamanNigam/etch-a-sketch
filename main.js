const container = document.querySelector("#container");
const b = document.querySelector("button");

function gen(num){
    const style = getComputedStyle(container);
    let h = parseInt(style.height, 10);

    let n = h / num;


    for(let i = 0; i < num * num; i++){
        let node = document.createElement("div");
        node.classList.add("node");

        node.style.height = n + "px";
        node.style.width = n + "px";
        container.appendChild(node);

        node.addEventListener("mouseenter", () =>{

            node.style.backgroundColor = "blue";
        })
    }
}

gen(16);



b.addEventListener("click", () => {

    let num = prompt("Enter the number of squares per side for the new grid")
    
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    gen(num);
})
