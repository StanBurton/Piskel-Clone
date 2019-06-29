function bucketToolFunc(state, setState, that){
    function bucketTool(e){
        let canvas = document.getElementById("canvas");
        let fillcolor = state.colors.current;

        window.addEventListener("mouseup", msUp);

        let xX = Math.floor(e.offsetX/(canvas.scrollWidth/state.canvasSettings.rows));
        let yY = Math.floor(e.offsetY/(canvas.scrollWidth/state.canvasSettings.columns));
        let enterColor = state.frames[state.currFrame].matrix[xX][yY]

        let start = floodfill(xX, yY, enterColor, fillcolor);
        
        function floodfill(x, y, A, B) {

            function getColor(x, y){
                return state.frames[state.currFrame].matrix[x][y]
            }
            if ((x < 0) || (x > state.canvasSettings.rows-1) || (y < 0) || (y > state.canvasSettings.columns-1)) return;
            if (getColor(x, y) != A) return;
            if (A == B) return
            state.frames[state.currFrame].matrix[x][y] = B;
            floodfill(x-1, y-1, A, B);
            floodfill(x-1, y, A, B);
            floodfill(x-1, y+1, A, B);
            floodfill(x, y-1, A, B);
            floodfill(x, y+1, A, B);
            floodfill(x+1, y-1, A, B);
            floodfill(x+1, y, A, B);
            floodfill(x+1, y+1, A, B);

        }
        
        function msUp(){
            window.removeEventListener("mouseup", msUp);
            that.setState(state);
        }

        
    }
    return function(){
        state.canvasEventFunc = bucketTool;
        that.setState(state);
    }
}
export default bucketToolFunc;