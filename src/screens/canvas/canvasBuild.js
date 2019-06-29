import canvasHoverfunc from "./canvasHoverfunc.js";
import disableHover from "./disableHover.js";

export default class canvasBuild {
    constructor(state) {
        this.state = state;
        this.canvasBlock = document.querySelector(".canvasBlock");
        this.canvasSettings = state.canvasSettings;
        this.rows = this.canvasSettings.rows;
        this.columns = this.canvasSettings.columns;
        this.onclickFunc = state.canvasEventFunc;
        this.currFrame = state.frames[state.currFrame].matrix;
        this.canvas = this.createCanvas();
        this.canvasHover = this.createCanvasHover();
        this.pixelSize = Math.ceil(this.canvas.scrollWidth / this.rows);
        this.ctx = this.canvas.getContext("2d");
    }
    createCanvasHover() {
        let range = 39.3;
        let canvasBlockWidth = this.canvasBlock.scrollWidth;
        let canvasWidth = Math.floor(canvasBlockWidth / range) * this.rows;
        let canvasHeight = Math.floor(canvasBlockWidth / range) * this.columns;
        let canvas = document.createElement("canvas");
        canvas.setAttribute("id", "canvasHover");
        canvas.setAttribute("width", canvasWidth);
        canvas.setAttribute("height", canvasHeight);
        canvas.style.cssText = `
        position: absolute;
        pointer-events: none;
        transform: scale(${this.canvasSettings.scale})
        `;
        this.canvasBlock.appendChild(canvas);
    }

    createCanvas() {
        let range = 39.3;
        let canvasBlockWidth = this.canvasBlock.scrollWidth;
        let canvasWidth = Math.floor(canvasBlockWidth / range) * this.rows;
        let canvasHeight = Math.floor(canvasBlockWidth / range) * this.columns;
        let canvas = document.createElement("canvas");
        canvas.addEventListener("mousedown", disableHover());
        canvas.addEventListener("mousedown", this.onclickFunc);

        canvas.setAttribute("id", "canvas");
        canvas.setAttribute("width", canvasWidth);
        canvas.setAttribute("height", canvasHeight);
        canvas.style.cssText = `
        position: absolute;
        transform: scale(${this.canvasSettings.scale});
        `;

        this.canvasBlock.appendChild(canvas);
        canvas.addEventListener("mousemove", canvasHoverfunc(this.state));

        return canvas;
    }
    createMatrix() {
        for (let i = 0; i < this.columns; i++) {
            this.currFrame[i] = [];
            for (let q = 0; q < this.rows; q++) {
                this.currFrame[i][q] = "transparent";
            }
        }
        this.drawField(this.currFrame);
    }

    drawField(currFrame) {
        this.ctx.clearRect(
            0,
            0,
            this.canvas.scrollWidth,
            this.canvas.scrollHeight
        );
        if (currFrame.length == 0) {
            this.createMatrix();
        } else {
            for (let i = 0; i < currFrame.length; i++) {
                for (let q = 0; q < currFrame[i].length; q++) {
                    this.ctx.fillStyle = currFrame[i][q];
                    this.ctx.fillRect(
                        i * this.pixelSize,
                        q * this.pixelSize,
                        this.pixelSize,
                        this.pixelSize
                    );
                }
            }
        }
    }

    draw() {
        this.drawField(this.currFrame);
    }
}
