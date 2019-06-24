function eraserTool(){
    console.log("privet")
}

function eraserToolFunc(state, setState, that){

    return function(){
        state.canvasEventFunc = eraserTool;
        that.setState(state);
    }
}
export default eraserToolFunc;