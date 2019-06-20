import style from "./index.scss";
import canvasWheelEvent from "./events.js"

class Canvas {
    constructor(state, setStage) {
        this.state = state;
    }
    render() {
        const mainDiv = document.createElement("div");
        mainDiv.setAttribute("class", "canvasBlock");
        mainDiv.onwheel = canvasWheelEvent(this.state);

        let canvas = document.createElement("canvas");
        canvas.setAttribute("id", "canvas");
        mainDiv.appendChild(canvas);

        return mainDiv;
    }
}

export default Canvas;
