function changeCurrColor(state, setState, that) {
    return function(e) {
        state.colors.current = `#${e.target.value}`;
        e.target.parentNode.style.backgroundColor = state.colors.current;
        that.setStateSilent(state);
    };
}
export default changeCurrColor;
