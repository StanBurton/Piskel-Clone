
function canvasHoverFunc(state){

    return function(e){
        let canvas = document.querySelector("#canvasHover");
        let ctx = canvas.getContext("2d");
        let matrix = [];
        let curColor = "rgba(21, 157, 255, 0.300)"
        let pixelSize = Math.ceil(canvas.scrollWidth / state.canvasSettings.rows);
        let x = Math.floor(e.offsetX/(canvas.scrollWidth/state.canvasSettings.rows));
        let y = Math.floor(e.offsetY/(canvas.scrollWidth/state.canvasSettings.columns));
        if ((x < 1) || (x > 31) || (y < 1) || (y > 31)) {
            ctx.clearRect(0, 0, canvas.scrollWidth, canvas.scrollHeight);   
            return
        }
        for(let i = 0; i < state.canvasSettings.columns; i++){
            matrix[i] = [];
            for(let q = 0; q < state.canvasSettings.rows; q++){
                matrix[i][q] = "transparent";  
            }
        }
        
        switch(state.penWidth){
            case 1:
                matrix[x][y] = curColor;
            break;
            case 2:
                matrix[x][y] = curColor;
                matrix[x][y-1] = curColor;
                matrix[x-1][y] = curColor;
                matrix[x-1][y-1] = curColor;
            break;
            case 3:
                matrix[x][y] = curColor;
                matrix[x][y+1] = curColor;
                matrix[x][y-1] = curColor;
                matrix[x-1][y] = curColor;
                matrix[x-1][y+1] = curColor;
                matrix[x-1][y-1] = curColor;
                matrix[x+1][y] = curColor;
                matrix[x+1][y+1] = curColor;
                matrix[x+1][y-1] = curColor;
            break;
            case 4:
                matrix[x][y] = curColor;
                matrix[x][y+1] = curColor;
                matrix[x][y-1] = curColor;
                matrix[x][y-2] = curColor;
                matrix[x+1][y] = curColor;
                matrix[x+1][y+1] = curColor;
                matrix[x+1][y-1] = curColor;
                matrix[x+1][y-2] = curColor;
                matrix[x-1][y] = curColor;
                matrix[x-1][y+1] = curColor;
                matrix[x-1][y-1] = curColor;
                matrix[x-1][y-2] = curColor;
                matrix[x-2][y] = curColor;
                matrix[x-2][y+1] = curColor;
                matrix[x-2][y-1] = curColor;
                matrix[x-2][y-2] = curColor;
            break;               
        }

        ctx.clearRect(0, 0, canvas.scrollWidth, canvas.scrollHeight);   

            for(let i = 0; i < matrix.length; i++){
                for(let q = 0; q < matrix[i].length; q++){
                    ctx.fillStyle = matrix[i][q]
                    ctx.fillRect(i*pixelSize, q*pixelSize, pixelSize, pixelSize)
                }
            }



    }
}
export default canvasHoverFunc;