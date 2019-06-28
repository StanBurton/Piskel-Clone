import style from "./index.scss";
import canvasWheelEvent from "./Canvasfuncs/canvasWheelEvent.js"

class Canvas {
    constructor(state, setState, that) {
        this.state = state;
        this.setState = setState;
        this.that = that;
    }
    render() {
        const mainDiv = document.createElement("div");
        mainDiv.setAttribute("class", "canvasBlock");
        mainDiv.onwheel = canvasWheelEvent(this.state, this.that);

        return mainDiv;
    }
}

export default Canvas;
