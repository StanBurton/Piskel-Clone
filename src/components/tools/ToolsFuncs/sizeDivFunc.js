function sizeDivFunc(state, setState, that){

    return function(e){
        state.penWidth = +e.target.getAttribute('data-pen-width')
        that.setState(state);
    }
}
export default sizeDivFunc;