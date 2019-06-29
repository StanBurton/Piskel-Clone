function canvasWheelSize(state, that) {
    return function(e) {
        let delta = e.deltaY;
        if (delta > 0) {
            if (state.canvasSettings.scale < 2) {
                state.canvasSettings.scale += 0.05;
            }
        } else {
            if (state.canvasSettings.scale > 0.2) {
                state.canvasSettings.scale -= 0.05;
            }
        }
        document.querySelector("#canvas").style.transform = `scale(${
            state.canvasSettings.scale
        })`;

        that.setState(state);
    };
}

export default canvasWheelSize;
