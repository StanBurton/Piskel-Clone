function frameClickFunc(state, setState, that){

    return function(e){
        if(e.target.getAttribute("data-position") - 1 > -1){
            state.currFrame = e.target.getAttribute("data-position") - 1;
            that.setState(state);
        }
    }
}

export default frameClickFunc;