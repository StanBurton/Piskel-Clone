import style from "./index.scss";
import resizeButtonFunc from "./OptionalPanelFuncs/resizeButtonFunc.js"
import menuOpenFunc from "./OptionalPanelFuncs/toogleEventfunc.js";
import inputWidthAndHeightFunc from "./OptionalPanelFuncs/inputWidthAndHeightFunc.js"

class Optional_panel {
    constructor(state, setState, that){
        this.state = state;
        this.setState = setState;
        this.that = that;

    }
    render() {

        const arrSettings = ["Preferences", "Resize", "Save", "Export", "Import"];

        const mainDiv = document.createElement("div");
        mainDiv.setAttribute("class", "optional_panel");

        let divToogle = document.createElement("div");
        divToogle.setAttribute("class", "divToogle");
        mainDiv.appendChild(divToogle);

        let divToogleCentered = document.createElement("div");
        divToogleCentered.setAttribute("class", "divToogleCentered");
        divToogle.appendChild(divToogleCentered);

        for(let i = 0; i < arrSettings.length; i++){
            let toogle = document.createElement("div");
            toogle.setAttribute("class", "toogle");
            toogle.dataset.description = arrSettings[i];
            toogle.onclick = menuOpenFunc(this.state, arrSettings[i]);
            divToogleCentered.appendChild(toogle);
        }

        let menus = document.createElement("div");
        menus.setAttribute("class", "menus");
        mainDiv.appendChild(menus);

        let menusCentered = document.createElement("div");
        menusCentered.setAttribute("class", "menusCentered");
        menus.appendChild(menusCentered);

        let menuPreferences = document.createElement("div");
        menuPreferences.setAttribute("class", `menu${arrSettings[0]}`);
        menusCentered.appendChild(menuPreferences);

        ///RESIZE
        let menuResize = document.createElement("div");
        menuResize.setAttribute("class", `menu${arrSettings[1]}`);
        menusCentered.appendChild(menuResize);

        let h3Resize = document.createElement("h3");
        h3Resize.setAttribute("class", "h3Resize");
        h3Resize.textContent = "RESIZE";
        menuResize.appendChild(h3Resize);

        let inputWidthBlock = document.createElement("div");
        inputWidthBlock.setAttribute("class", "inputWidthBlock");
        menuResize.appendChild(inputWidthBlock);

        let widthSpan = document.createElement("span");
        widthSpan.setAttribute("class", "widthSpan");
        widthSpan.textContent = "Width";
        inputWidthBlock.appendChild(widthSpan);

        let inputWidth = document.createElement("input");
        inputWidth.setAttribute("id", "inputWidth");
        inputWidth.setAttribute("type", "number");
        inputWidth.setAttribute("min", "0");
        inputWidth.setAttribute("max", "500");
        inputWidth.setAttribute("placeholder", this.state.canvasSettings.rows);
        inputWidth.onchange = inputWidthAndHeightFunc(this.state);
        inputWidthBlock.appendChild(inputWidth);

        let pxSpanWidth = document.createElement("span");
        pxSpanWidth.setAttribute("class", "pxSpanWidth");
        pxSpanWidth.textContent = "px";
        inputWidthBlock.appendChild(pxSpanWidth);
        ///Height
        let inputHeightBlock = document.createElement("div");
        inputHeightBlock.setAttribute("class", "inputHeightBlock");
        menuResize.appendChild(inputHeightBlock);

        let heightSpan = document.createElement("span");
        heightSpan.setAttribute("class", "heightSpan");
        heightSpan.textContent = "Height";
        inputHeightBlock.appendChild(heightSpan);

        let inputHeight = document.createElement("input");
        inputHeight.setAttribute("id", "inputHeight");
        inputHeight.setAttribute("type", "number");
        inputHeight.setAttribute("min", "0");
        inputHeight.setAttribute("max", "500");
        inputHeight.setAttribute("placeholder", this.state.canvasSettings.columns);
        inputHeight.onchange = inputWidthAndHeightFunc(this.state, this.setState, this.that);
        inputHeightBlock.appendChild(inputHeight);

        let pxSpanHeight = document.createElement("span");
        pxSpanHeight.setAttribute("class", "pxSpanHeight");
        pxSpanHeight.textContent = "px";
        inputHeightBlock.appendChild(pxSpanHeight);

        let buttonBlock = document.createElement("div");
        buttonBlock.setAttribute("class", "buttonBlock");
        menuResize.appendChild(buttonBlock);

        let buttonResize = document.createElement("button");
        buttonResize.setAttribute("class", "buttonResize");
        buttonResize.textContent = "Resize";
        buttonResize.onclick = resizeButtonFunc(this.state, this.setState, this.that);
        buttonBlock.appendChild(buttonResize);

        ///SAVE
        let menuSave = document.createElement("div");
        menuSave.setAttribute("class", `menu${arrSettings[2]}`);
        menusCentered.appendChild(menuSave);
        ///EXPORT
        let menuExport = document.createElement("div");
        menuExport.setAttribute("class", `menu${arrSettings[3]}`);
        menusCentered.appendChild(menuExport);
        ///IMPORT
        let menuImport = document.createElement("div");
        menuImport.setAttribute("class", `menu${arrSettings[4]}`);
        menusCentered.appendChild(menuImport);

        return mainDiv
    }
}

export default Optional_panel;