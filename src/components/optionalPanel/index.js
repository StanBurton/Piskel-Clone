import style from "./index.scss";
class Optional_panel {
    constructor(state, setStage){
        this.state = state;
    }
    render() {
        const mainDiv = document.createElement("div");
        mainDiv.setAttribute("class", "optional_panel");

        let divToogle = document.createElement("div");
        divToogle.setAttribute("class", "divToogle");
        mainDiv.appendChild(divToogle);

        let divToogleCentered = document.createElement("div");
        divToogleCentered.setAttribute("class", "divToogleCentered");
        divToogle.appendChild(divToogleCentered);

        for(let i = 0; i < 5; i++){
            let toogle = document.createElement("div");
            toogle.setAttribute("class", "toogle");
            divToogleCentered.appendChild(toogle);
        }

        let menus = document.createElement("div");
        menus.setAttribute("class", "menus");
        mainDiv.appendChild(menus);

        let menusCentered = document.createElement("div");
        menusCentered.setAttribute("class", "menusCentered");
        menus.appendChild(menusCentered);

        let menuSettings = document.createElement("div");
        menuSettings.setAttribute("class", "menuSettings");
        menusCentered.appendChild(menuSettings);


        let menuResize = document.createElement("div");
        menuResize.setAttribute("class", "menuResize");
        menusCentered.appendChild(menuResize);

        let menuSave = document.createElement("div");
        menuSave.setAttribute("class", "menuSave");
        menusCentered.appendChild(menuSave);

        let menuExport = document.createElement("div");
        menuExport.setAttribute("class", "menuExport");
        menusCentered.appendChild(menuExport);

        let menuImport = document.createElement("div");
        menuExport.setAttribute("class", "menuImport");
        menusCentered.appendChild(menuImport);

        return mainDiv
    }
}

export default Optional_panel;