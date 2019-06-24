function deleteFrameFunc(state, setState, that){

    return function(e){
        state.frames.splice(e.target.parentNode.parentNode.getAttribute("data-position") - 1, 1);
        that.setState(state);
    }
}

export default deleteFrameFunc;