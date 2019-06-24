function bucketTool(){
    console.log("privet")
}

function bucketToolFunc(state, setState, that){

    return function(){
        state.canvasEventFunc = bucketTool;
        that.setState(state);
    }
}
export default bucketToolFunc;