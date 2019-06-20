import style from "./index.scss";

class Tools {
    constructor(state, setState) {
        this.state = state;
    }

    render() {
        function liGenerate(tools) {
            let arr = [];
            for (let i = 1; i < tools.length; i++) {
                let li = document.createElement("li");
                li.setAttribute("class", "ul_item");
                li.dataset.description = `${tools[i].name} (${tools[i].shortCut.hint || "none"})`;
                arr.push(li);
            }
            return arr;
        }
        function checkColor(state) {
            if (state.colors) {
                divOne.style.backgroundImage = "none";
                divOne.style.backgroundColor = state.colors.current;
                divTwo.style.backgroundImage = "none";
                divTwo.style.backgroundColor = state.colors.previous;
            } else {
                divOne.removeAttribute("style");
                divTwo.removeAttribute("style");
            }
        }

        const mainDiv = document.createElement("div");
        mainDiv.className = "tools";

        let divForSize = document.createElement("div");
        divForSize.setAttribute("class", "pen_width");
        for (let i = 0; i < 4; i++) {
            let sizeDiv = document.createElement("div");
            sizeDiv.setAttribute("class", "sizeDiv");
            divForSize.appendChild(sizeDiv);
        }
        mainDiv.appendChild(divForSize);

        let ul = document.createElement("ul");
        liGenerate(this.state.tools).forEach(li => ul.appendChild(li));
        mainDiv.appendChild(ul);

        let divColor = document.createElement("div");
        divColor.setAttribute("class", "colorChoose");
        let divOne = document.createElement("div");
        divOne.setAttribute("class", "colorDiv");
        divOne.dataset.type = "Primary - LMB";
        divOne.dataset.color = this.state.colors.current;
        divColor.appendChild(divOne);
        let divTwo = document.createElement("div");
        divTwo.setAttribute("class", "colorDiv");
        divTwo.dataset.color = this.state.colors.previous;
        divTwo.dataset.type = "Secondary - RMB";
        divColor.appendChild(divTwo);
        let divThree = document.createElement("div");
        divThree.innerHTML = `<i class="fas fa-exchange-alt"></i>`;
        divColor.appendChild(divThree);
        mainDiv.appendChild(divColor);
        checkColor(this.state);

        let divKeycommands = document.createElement("div");
        divKeycommands.innerHTML = `<i class="fas fa-keyboard"></i>`;
        divKeycommands.setAttribute("class", "keyCommands");
        mainDiv.appendChild(divKeycommands);

        return mainDiv;
    }
}

export default Tools;
