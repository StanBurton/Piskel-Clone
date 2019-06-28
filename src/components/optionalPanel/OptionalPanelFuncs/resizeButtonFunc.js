function resizeButtonFunc(state, setState, that){
    return function(){
        let y = state.canvasSettings.columns;
        let x = state.canvasSettings.rows;
        
        for(let i = 0; i < state.frames.length; i++){
            for(let z = 0; z < state.frames[i].matrix.length; z++){
                for(let p = state.frames[i].matrix[z].length; p < x; p++){
                    state.frames[i].matrix[z][p] = "transparent";  
                }
            }
            for(let q = state.frames[i].matrix.length; q < y; q++){
                state.frames[i].matrix[q] = [];
                for(let j = 0; j < x; j++){
                    state.frames[i].matrix[q][j] = "transparent";  
                }
            }
        }

        that.setState(state)
    }
}
export default resizeButtonFunc;