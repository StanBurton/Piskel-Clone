function penTool(){
    console.log("privet")
}

function penToolFunc(state, setState, that){

    return function(){
        state.canvasEventFunc = penTool;
        that.setState(state);
    }
}
export default penToolFunc;