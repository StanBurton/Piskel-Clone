import style from "./index.scss";
import Choosecolor from "./ToolsFuncs/chooseColor.js"
import changeCurrColor from "./ToolsFuncs/changeCurrColor.js"
import switchColorsFunc from "./ToolsFuncs/switchColorsFunc.js"
import penToolFunc from "./toolsFuncs/penToolFunc.js"
import sizeDivFunc from "./toolsFuncs/sizeDivFunc.js"
import bucketToolFunc from "./toolsFuncs/bucketToolFunc.js"
import eraserToolFunc from "./toolsFuncs/eraserToolFunc.js"


class Tools {
    constructor(state, setState, that) {
        this.state = state;
        this.setState = setState;
        this.that = that,
        this.toolsFuncs = {
            "sizeDiv": sizeDivFunc(this.state, this.setState, this.that),
            "penTool": penToolFunc(this.state, this.setState, this.that),
            "bucketTool": bucketToolFunc(this.state, this.setState, this.that),
            "eraserTool": eraserToolFunc(this.state, this.setState, this.that)
        }
    }

    liGenerate() {
        let arr = [];
        for (let i = 1; i < this.state.tools.length; i++) {
            let li = document.createElement("li");
            if(this.state.canvasEventFunc.name == this.state.tools[i].slug){
                li.setAttribute("class", "ul_item_active");
            }else {
                li.setAttribute("class", "ul_item");
            }
            li.dataset.description = `${this.state.tools[i].name} (${this.state.tools[i].shortCut.hint || "none"})`;
            li.onclick = this.toolsFuncs[this.state.tools[i].slug] || null;
            arr.push(li);
        }
        return arr;
    }

    penWidthGenerate(){
        let divForSize = document.createElement("div");
        divForSize.setAttribute("class", "pen_width");
        for (let i = 1; i < 5; i++) {
            let sizeDiv = document.createElement("div");
            sizeDiv.dataset.penWidth = i;
            if(this.state.penWidth === i){
                sizeDiv.setAttribute("class", "sizeDiv_active");
            }else{
                sizeDiv.setAttribute("class", "sizeDiv")
            }
            sizeDiv.onclick = this.toolsFuncs["sizeDiv"];
            divForSize.appendChild(sizeDiv);
        }
        return divForSize;
    }
  
    render() {

        const mainDiv = document.createElement("div");
        mainDiv.setAttribute("class", "tools");

        mainDiv.appendChild(this.penWidthGenerate());

        let ul = document.createElement("ul");
        this.liGenerate().forEach(li => ul.appendChild(li));
        mainDiv.appendChild(ul);

        let divColor = document.createElement("div");
        divColor.setAttribute("class", "colorChoose");

        let divOne = document.createElement("div");
        divOne.setAttribute("class", "colorDiv");
        divOne.dataset.type = "Primary - LMB";
        divOne.dataset.color = this.state.colors.current;
        divOne.style.backgroundColor = this.state.colors.current;
        let inputOne = document.createElement("input");
        inputOne.className = "jscolor";
        console.log(Choosecolor)
        inputOne.onchange = changeCurrColor(this.state, this.setState, this.that)
        divOne.appendChild(inputOne);
        divColor.appendChild(divOne);

        let divTwo = document.createElement("div");
        divTwo.setAttribute("class", "colorDiv");
        divTwo.dataset.color = this.state.colors.previous;
        divTwo.dataset.type = "Secondary - RMB";
        divTwo.style.backgroundColor = this.state.colors.previous;
        divColor.appendChild(divTwo);

        let divThree = document.createElement("div");
        divThree.innerHTML = `<i class="fas fa-exchange-alt"></i>`;
        divThree.onclick = switchColorsFunc(this.state, this.setState, this.that)
        divColor.appendChild(divThree);
        mainDiv.appendChild(divColor);

        let divKeycommands = document.createElement("div");
        divKeycommands.innerHTML = `<i class="fas fa-keyboard"></i>`;
        divKeycommands.setAttribute("class", "keyCommands");
        mainDiv.appendChild(divKeycommands);

        return mainDiv;
    }
}

export default Tools;
