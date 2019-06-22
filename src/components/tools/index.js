import style from "./index.scss";
import penToolFunc from "./toolsFuncs/penToolFunc.js"

class Tools {
    constructor(state, setState, that) {
        this.state = state;
        this.toolsFuncs = {
            "pentoolFunc": penToolFunc,
        }
        this.setState = setState;
        this.that = that
    }

    render() {
        function liGenerate(state, setState, that) {
            let arr = [];
            for (let i = 1; i < state.tools.length; i++) {
                let li = document.createElement("li");
                if(state.canvasEventFunc.name == state.tools[i].slug){
                    li.setAttribute("class", "ul_item_active");
                }else {
                    li.setAttribute("class", "ul_item");
                }
                li.dataset.description = `${state.tools[i].name} (${state.tools[i].shortCut.hint || "none"})`;
                li.onclick = penToolFunc(state, setState, that);
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
        liGenerate(this.state, this.setState, this.that).forEach(li => ul.appendChild(li));
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
