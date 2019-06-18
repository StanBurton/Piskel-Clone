import header from "./components/header";
import tools from "./components/tools";
import frames from "./components/frames";
import canvas from "./components/canvas";
import animation_layers from "./components/animation_layers";
import optionalPanel from "./components/optionalPanel";

const state = {
    canvasEventFunc: null,
    frames: [
        {
            id: 1
        },
        {
            id: 2
        }
    ],
    spriteName: "value",
    colors: {
        current: "red",
        previous: "#ffffff"
    },
    shortCuts: {
        "Pen Tool": "P"
    }
};

class APP {
    constructor() {
        this.components = [
            header(state),
            tools(state),
            frames(state),
            canvas,
            animation_layers,
            optionalPanel
        ];
    }
    render() {
        return this.packaging();
    }
    packaging() {
        let mainDiv = document.createElement("div");
        mainDiv.className = "main";
        this.components.forEach(item => mainDiv.appendChild(item));

        return mainDiv;
    }
}

export default APP;
