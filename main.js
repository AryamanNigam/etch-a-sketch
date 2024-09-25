const container = document.querySelector("#container");

for(let i =0; i < 256; i++){
        let node = document.createElement("div");
        node.classList.add("node");
        container.appendChild(node);
}