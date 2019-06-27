// import style from "./index.scss"


export default class frameCanvasBuild {
    constructor(state){
        this.frames = state.frames;
        this.canvasBlock = Array.from(document.querySelectorAll(".frame"));
        this.canvasSettings = state.canvasSettings;
        this.rows = this.canvasSettings.rows
        this.columns = this.canvasSettings.columns
        this.canvas = this.createCanvas();
        this.pixelSize = Math.ceil(this.canvas[0].scrollWidth / this.rows);
        this.ctx = this.canvas.map(el => el.getContext("2d"));         
    }   
    createCanvas(){
        let canvasArr = []

        for(let i = 0; i < this.canvasBlock.length; i++){
            let range = 29;
            let canvasBlockWidth = this.canvasBlock[i].scrollWidth;
            let canvasWidth = Math.floor(canvasBlockWidth/range) * this.rows;
            let canvasHeight = Math.floor(canvasBlockWidth/range) * this.columns;

            let canvas = document.createElement("canvas");
            canvas.setAttribute("width", canvasWidth);
            canvas.setAttribute("height", canvasHeight);
            canvas.style.cssText = `
            position: absolute;
            z-index: 0;
            left: ${Math.floor((canvasBlockWidth - canvasWidth)/2)}px;
            top: 12%;
            `;
            canvasArr.push(canvas);
            this.canvasBlock[i].insertBefore(canvas, this.canvasBlock[i].children[0])
        }
        return canvasArr;
    }

    drawField(currFrame, index){
        // this.ctx[index].clearRect(0, 0, this.canvas[index].scrollWidth, this.canvas[index].scrollHeight);
        for(let i = 0; i < currFrame.length; i++){
            for(let q = 0; q < currFrame[i].length; q++){
                this.ctx[index].fillStyle = currFrame[i][q];
                this.ctx[index].fillRect(i*this.pixelSize, q*this.pixelSize, this.pixelSize, this.pixelSize)
            }
        }
    }

    draw(){
        for(let i = 0; i < this.frames.length; i++){
            this.drawField(this.frames[i].matrix, i);
        }
    }
};