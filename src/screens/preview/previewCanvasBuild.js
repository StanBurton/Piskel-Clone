export default class previewCanvasBuild {
    constructor(state, that) {
        this.fps = state.animationSettings.fpsValue;
        this.frames = state.frames;
        this.count = 0;
        this.canvasBlock = document.querySelector(".animation");
        this.canvasSettings = state.canvasSettings;
        this.canvas = this.createCanvas(that);
        this.pixelSize = Math.ceil(
            this.canvas.clientWidth / this.canvasSettings.rows
        );
        this.ctx = this.canvas.getContext("2d");
    }

    createCanvas(that) {
        let range = () => {
            if (that.fullScreen) {
                return 10;
            } else {
                return 32;
            }
        };
        let canvasBlockWidth = this.canvasBlock.offsetWidth;
        let canvasWidth =
            Math.floor(canvasBlockWidth / range()) * this.canvasSettings.rows;
        let canvasHeight =
            Math.floor(canvasBlockWidth / range()) *
            this.canvasSettings.columns;

        let canvas = document.createElement("canvas");

        canvas.setAttribute("id", "canvasPreview");
        canvas.setAttribute("width", canvasWidth);
        canvas.setAttribute("height", canvasHeight);
        canvas.style.cssText = `
        position: absolute;
        pointer-events: none;`;
        this.canvasBlock.insertBefore(canvas, this.canvasBlock.children[0]);

        return canvas;
    }

    drawField(currFrame) {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
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

    draw() {
        setInterval(() => {
            if (this.count < this.frames.length) {
                this.drawField(this.frames[this.count].matrix);
                this.count += 1;
            } else {
                this.count = 0;
                this.drawField(this.frames[this.count].matrix);
            }
        }, 1000 / this.fps);
    }
}
