// import style from "./index.scss"


export default class frameCanvasBuild {
    constructor(state){
        this.frames = state.frames;
        this.canvasBlock = Array.from(document.querySelectorAll(".frame"));
        this.canvasSettings = state.canvasSettings;
        this.rows = this.canvasSettings.rows
        this.columns = this.canvasSettings.columns
        this.canvas = this.createCanvas();
        this.pixelSize = Math.ceil(this.canvas.scrollWidth / this.rows);
        this.ctx = this.canvas.map((el) => el.getContext("2d"));         
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
            this.canvasBlock[i].insertBefore(canvas, this.canvasBlock[i].children[0])
            canvasArr.push(canvas);
        }
        return canvasArr;
    }

    drawField(currFrame){
        for(let j = 0; j < this.ctx.length; j++){
            // this.ctx[j].clearRect(0, 0, this.canvas[j].scrollWidth, this.canvas[j].scrollHeight);
            for(let i = 0; i < currFrame.length; i++){
                for(let q = 0; q < currFrame[i].length; q++){
                    this.ctx[j].fillStyle = currFrame[i][q]
                    this.ctx[j].fillRect(i*this.pixelSize, q*this.pixelSize, this.pixelSize, this.pixelSize)
                }
            }
        }
    }

    draw(){
        for(let i = 0; i < this.frames.length; i++){
            this.drawField(this.frames[i].matrix);
        }
    }
};