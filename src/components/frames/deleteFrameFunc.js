function deleteFrameFunc(state, setState, that){

    return function(e){
        state.frames.splice(+e.target.parentNode.parentNode.getAttribute("data-position") - 1, 1);
        if(state.currFrame - 1 < 0){
            state.currFrame = 0;
        }else{
            state.currFrame -= 1;
        }
        that.setState(state);
        console.log(state.currFrame)
    }
}

export default deleteFrameFunc;