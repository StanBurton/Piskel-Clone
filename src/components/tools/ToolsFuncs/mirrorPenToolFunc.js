function mirrorPen(){
    console.log("privet 2")
}

function mirrorPenToolFunc(state, setState, that){

    return function(){
        state.canvasEventFunc = mirrorPen;
        that.setState(state);
    }
}
export default mirrorPenToolFunc