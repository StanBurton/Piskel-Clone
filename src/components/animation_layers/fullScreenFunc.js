function fullScreenFunc(state, setState, that) {
    return function() {
        that.fullScreen = true;
        that.setState(state);
        document.querySelector(".animation").requestFullscreen();
    };
}
export default fullScreenFunc;
