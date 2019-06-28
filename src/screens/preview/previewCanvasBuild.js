
export default class previewCanvasBuild {
    constructor(state){
        this.fps = state.animationSettings.fpsValue;
        this.frames = state.frames;
        this.count = 0;
        this.canvasBlock = document.querySelector(".animation");
        this.canvasSettings = state.canvasSettings;
        this.rows = this.canvasSettings.rows
        this.columns = this.canvasSettings.columns;
        this.canvas = this.createCanvas();
        this.pixelSize = Math.ceil(this.canvas.scrollWidth / this.rows);
        this.ctx = this.canvas.getContext("2d");       
    }   

    createCanvas(){
        let range = 32;
        let canvasBlockWidth = this.canvasBlock.scrollWidth;
        let canvasWidth = Math.floor(canvasBlockWidth/range) * this.rows;
        let canvasHeight = Math.floor(canvasBlockWidth/range) * this.columns;

        let canvas = document.createElement("canvas");
   
     
        canvas.setAttribute("width", canvasWidth);
        canvas.setAttribute("height", canvasHeight);
        canvas.style.cssText = `
        position: absolute;
        pointer-events: none;
        left: ${Math.floor((canvasBlockWidth - canvasWidth)/2)}px;
        top: 7%;`;
        this.canvasBlock.insertBefore(canvas, this.canvasBlock.children[0])

        return canvas;
    }

    drawField(currFrame){
            this.ctx.clearRect(0, 0, this.canvas.scrollWidth, this.canvas.scrollHeight);
            for(let i = 0; i < currFrame.length; i++){
                for(let q = 0; q < currFrame[i].length; q++){
                        this.ctx.fillStyle = currFrame[i][q]
                        this.ctx.fillRect(i*this.pixelSize, q*this.pixelSize, this.pixelSize, this.pixelSize)
                }
            }
    }

    draw(){
        setInterval(() => {
            if(this.count < this.frames.length){ 
                this.drawField(this.frames[this.count].matrix)
                this.count += 1;
            }else{
                this.count = 0;
                this.drawField(this.frames[this.count].matrix);      
            }
        }, 1000/this.fps);
    }
};