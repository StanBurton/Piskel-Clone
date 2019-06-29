function copyFrameFunc(state, setState, that) {
    return function(e) {
        let copyObject = JSON.parse(
            JSON.stringify(
                state.frames[
                    +e.target.parentNode.parentNode.getAttribute(
                        "data-position"
                    ) - 1
                ]
            )
        );
        copyObject.id = ++that.count;
        state.frames.splice(
            +e.target.parentNode.parentNode.getAttribute("data-position"),
            0,
            copyObject
        );
        state.currFrame = +e.target.parentNode.parentNode.getAttribute(
            "data-position"
        );
        that.setState(state);
    };
}
export default copyFrameFunc;
