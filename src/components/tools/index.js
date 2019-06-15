import style from "./index.scss";
import div from "../canvas";

function tools(state) {
    function liGenerate() {
        let arr = [];
        for(let i = 0; i < arrIcons.length; i++){
            let li = document.createElement("li");
            li.innerHTML = arrIcons[i];
            arr.push(li)
        }
        return arr;
    }

    const arrIcons = [
        `<i class="fas fa-pen" />`,
        `<i class="fas fa-edit" />`,
        `<i class="fas fa-fill" />`,
        `<i class="fas fa-fill-drip" />`,
        `<i class="fas fa-eraser" />`,
        `<i class="fas fa-arrows-alt-h" />`,
        `<i class="far fa-square" />`,
        `<i class="far fa-circle" />`,
        `<i class="fas fa-arrows-alt" />`,
        `<i class="fas fa-magic" />`,
        `<i class="fas fa-vector-square" />`,
        `<i class="far fa-heart" />`,
        `<i class="fas fa-adjust" />`,
        `<i class="fab fa-flipboard" />`,
        `<i class="fas fa-eye-dropper" />`
    ]

    const mainDiv = document.createElement("div");
    mainDiv.className = "tools";

    let divForSize = document.createElement("div");
    for (let i = 0; i < 4; i++){
        let sizeDiv = document.createElement("div");
        sizeDiv.setAttribute('class', "sizeDiv");
        divForSize.appendChild(sizeDiv);
    }
    mainDiv.appendChild(divForSize);


    let ul = document.createElement("ul");
    liGenerate().forEach(li => ul.appendChild(li));
    mainDiv.appendChild(ul);

    let divColor = document.createElement("div");
    divColor.setAttribute("class", "colorChoose");
    let divOne = document.createElement("div");
    divOne.setAttribute("class", "colorDiv");
    divColor.appendChild(divOne);
    let divTwo = document.createElement("div");
    divTwo.setAttribute("class", "colorDiv");
    divColor.appendChild(divTwo);
    let divThree = document.createElement("div");
    divThree.innerHTML = `<i class="fas fa-exchange-alt"></i>`;
    divColor.appendChild(divThree);
    mainDiv.appendChild(divColor);

    let divKeycommands = document.createElement("div");
    divKeycommands.innerHTML = `<i class="fas fa-keyboard"></i>`
    divKeycommands.setAttribute("class", "keyCommands");
    mainDiv.appendChild(divKeycommands)


    return mainDiv;
}

export default tools;
