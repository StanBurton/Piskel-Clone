function addFrameFunc(state, setState, that){

    return function(){
        let emptyFrame = {
            id: ++that.count,
            matrix: []
        }
        state.frames.push(emptyFrame);
        state.currFrame = state.frames.length -1;
        that.setState(state);
    }
}
export default addFrameFunc;