

function eraserToolFunc(state, setState, that){
    function eraserTool(e){
        let canvas = document.getElementById("canvas");
        let penWidth = state.penWidth;
        let curColor = "transparent";

        let firstTouch = msMove(e);

        canvas.addEventListener("mousemove", msMove);
        window.addEventListener("mouseup", msUp);

        
        function msMove(e){
            let x = Math.floor(e.offsetX/(canvas.scrollWidth/state.canvasSettings.rows));
            let y = Math.floor(e.offsetY/(canvas.scrollWidth/state.canvasSettings.columns));
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
        }

        function msUp(){
            canvas.removeEventListener("mousemove", msMove);
            window.removeEventListener("mouseup", msUp);
            that.setState(state);
        }

        
    }
    return function(){
        state.canvasEventFunc = eraserTool;
        that.setState(state);
    }
}
export default eraserToolFunc;