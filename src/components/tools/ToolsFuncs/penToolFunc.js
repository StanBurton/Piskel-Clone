

function penToolFunc(state, setState, that){
    function penTool(e){
        let canvas = this;
        let pixelSize = Math.ceil(canvas.scrollWidth / state.canvasSettings.rows);
        let penWidth = state.penWidth;
        let curColor = state.colors.current;
        let ctx = this.getContext("2d");

        let firstTouch = msMove(e);

        canvas.addEventListener("mousemove", msMove);
        window.addEventListener("mouseup", msUp);

        
        function msMove(e){
            let x = Math.floor(e.offsetX/(canvas.scrollWidth/state.canvasSettings.rows));
            let y = Math.floor(e.offsetY/(canvas.scrollWidth/state.canvasSettings.columns));
            console.log(x, y)
            switch(penWidth){
                case 1:
                state.frames[state.currFrame].matrix[x][y] = curColor;
                break;
                case 2:
                state.frames[state.currFrame].matrix[x][y] = curColor;
                state.frames[state.currFrame].matrix[x][y-1] = curColor;
                state.frames[state.currFrame].matrix[x-1][y] = curColor;
                state.frames[state.currFrame].matrix[x-1][y-1] = curColor;
                break;
                case 3:
                state.frames[state.currFrame].matrix[x][y] = curColor;
                state.frames[state.currFrame].matrix[x][y+1] = curColor;
                state.frames[state.currFrame].matrix[x][y-1] = curColor;
                state.frames[state.currFrame].matrix[x-1][y] = curColor;
                state.frames[state.currFrame].matrix[x-1][y+1] = curColor;
                state.frames[state.currFrame].matrix[x-1][y-1] = curColor;
                state.frames[state.currFrame].matrix[x+1][y] = curColor;
                state.frames[state.currFrame].matrix[x+1][y+1] = curColor;
                state.frames[state.currFrame].matrix[x+1][y-1] = curColor;
                break;
                case 4:
                state.frames[state.currFrame].matrix[x][y] = curColor;
                state.frames[state.currFrame].matrix[x][y+1] = curColor;
                state.frames[state.currFrame].matrix[x][y-1] = curColor;
                state.frames[state.currFrame].matrix[x][y-2] = curColor;
                state.frames[state.currFrame].matrix[x+1][y] = curColor;
                state.frames[state.currFrame].matrix[x+1][y+1] = curColor;
                state.frames[state.currFrame].matrix[x+1][y-1] = curColor;
                state.frames[state.currFrame].matrix[x+1][y-2] = curColor;
                state.frames[state.currFrame].matrix[x-1][y] = curColor;
                state.frames[state.currFrame].matrix[x-1][y+1] = curColor;
                state.frames[state.currFrame].matrix[x-1][y-1] = curColor;
                state.frames[state.currFrame].matrix[x-1][y-2] = curColor;
                state.frames[state.currFrame].matrix[x-2][y] = curColor;
                state.frames[state.currFrame].matrix[x-2][y+1] = curColor;
                state.frames[state.currFrame].matrix[x-2][y-1] = curColor;
                state.frames[state.currFrame].matrix[x-2][y-2] = curColor;
                break;               
            }


            ctx.clearRect(0, 0, canvas.scrollWidth, canvas.scrollHeight);   

            for(let i = 0; i < state.frames[state.currFrame].matrix.length; i++){
                for(let q = 0; q < state.frames[state.currFrame].matrix[i].length; q++){
                    ctx.fillStyle = state.frames[state.currFrame].matrix[i][q]
                    ctx.fillRect(i*pixelSize, q*pixelSize, pixelSize, pixelSize)
                }
            }

        }

        function msUp(){
            canvas.removeEventListener("mousemove", msMove);
            window.removeEventListener("mouseup", msUp);
            that.setState(state);
        }

        
    }
    return function(){
        state.canvasEventFunc = penTool;
        that.setState(state);
    }
}
export default penToolFunc;