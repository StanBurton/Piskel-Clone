function addFrameFunc(state, setState, that){

    return function(){
        let emptyFrame = {
            id: ++state.count
        }
        state.frames.push(emptyFrame);
        that.setState(state);
    }
}
export default addFrameFunc;