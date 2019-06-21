import style from "./index.scss";
import menuOpenFunc from "./toogleEventfunc.js";

class Optional_panel {
    constructor(state, setStage){
        this.state = state;
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

        let inputWidthBlock = document.createElement("div");
        inputWidthBlock.setAttribute("class", "inputWidthBlock");
        menuResize.appendChild(inputWidthBlock);

        let inputWidth = document.createElement("input");
        inputWidth.setAttribute("id", "inputWidth");
        inputWidth.setAttribute("type", "number");
        inputWidth.setAttribute("placeholder", this.state.canvasSettings.rows);
        inputWidthBlock.appendChild(inputWidth);

        let inputHeight = document.createElement("div");
        menusCentered.appendChild(menuResize);
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