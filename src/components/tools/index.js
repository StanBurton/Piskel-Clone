import style from "./index.scss";

function tools(state) {
    function liGenerate() {
        let arr = [];
        for (let i = 0; i < arrIcons.length; i++) {
            let li = document.createElement("li");
            li.setAttribute("class", "ul_item");
            li.innerHTML = arrIcons[i][0];
            li.dataset.description = arrIcons[i][1];
            arr.push(li);
        }
        return arr;
    }
    function checkColor() {
        if (state.colors) {
            divOne.style.backgroundImage = "none";
            divOne.style.backgroundColor = state.colors.current;
            divTwo.style.backgroundImage = "none";
            divTwo.style.backgroundColor = state.colors.previous;
        }
        else {
            divOne.removeAttribute("style");
            divTwo.removeAttribute("style");
        }
    }

    const arrIcons = [
        [`<i class="fas fa-pen" />`, "Pen Tool"],
        [`<i class="fas fa-edit" />`, "Vertical Mirror Pen"],
        [`<i class="fas fa-fill" />`, "Paint Bucket Tool"],
        [`<i class="fas fa-fill-drip" />`, "Paint all pixels of the same color"],
        [`<i class="fas fa-eraser" />`, "Eraser Tool"],
        [`<i class="fas fa-arrows-alt-h" />`, "Stroke Tool"],
        [`<i class="far fa-square" />`, "Rectangle Tool"],
        [`<i class="far fa-circle" />`, "Circle Tool"],
        [`<i class="fas fa-arrows-alt" />`, "Move Tool"],
        [`<i class="fas fa-magic" />`, "Shape Selection"],
        [`<i class="fas fa-vector-square" />`, "Rectangle Selection"],
        [`<i class="far fa-heart" />`, "Lasso Selection"],
        [`<i class="fas fa-adjust" />`, "Lighten"],
        [`<i class="fab fa-flipboard" />`, "Dithering Tool"],
        [`<i class="fas fa-eye-dropper" />`, "Color Picker"]
    ];

    const mainDiv = document.createElement("div");
    mainDiv.className = "tools";

    let divForSize = document.createElement("div");
    for (let i = 0; i < 4; i++) {
        let sizeDiv = document.createElement("div");
        sizeDiv.setAttribute("class", "sizeDiv");
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
    checkColor();

    let divKeycommands = document.createElement("div");
    divKeycommands.innerHTML = `<i class="fas fa-keyboard"></i>`;
    divKeycommands.setAttribute("class", "keyCommands");
    mainDiv.appendChild(divKeycommands);

    return mainDiv;
}

export default tools;
