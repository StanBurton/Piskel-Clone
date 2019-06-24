function copyFrameFunc(state, setState, that){

    return function(e){
        let copyObject = Object.assign({}, (state.frames[e.target.parentNode.parentNode.getAttribute("data-id") - 1]));
        copyObject.id = ++state.count
        copyObject.name = "copyied"
        console.log(e.target.parentNode.parentNode.getAttribute("data-position") - 1);
        state.frames.splice(e.target.parentNode.parentNode.getAttribute("data-position"), 0, copyObject);
        that.setState(state);
    }
}
export default copyFrameFunc;