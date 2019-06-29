function changePrevColor(state, setState, that) {
    return function(e) {
        state.colors.previous = `#${e.target.value}`;
        e.target.parentNode.style.backgroundColor = state.colors.previous;
        that.setStateSilent(state);
    };
}
export default changePrevColor;
