

function fpsChangeFunc(state, setState, that){

    return function(e){
        state.animationSettings.fpsValue = +e.target.value;
        console.log(+e.target.value)
        that.setState(state);
    }
}
export default fpsChangeFunc;