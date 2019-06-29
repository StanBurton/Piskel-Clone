function switchColorFunc(state, setState, that) {
    return function() {
        let cur = state.colors.current;
        state.colors.current = state.colors.previous;
        state.colors.previous = cur;
        that.setState(state);
    };
}
export default switchColorFunc;
