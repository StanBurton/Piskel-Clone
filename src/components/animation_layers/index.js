import style from "./index.scss";

class Animation_layers {
    constructor(state, setStage) {
        this.state = state;
    }
    render() {
        const mainDiv = document.createElement("div");
        mainDiv.setAttribute("class", "animation_player");

        let divAnimation = document.createElement("div");
        divAnimation.setAttribute("class", "animationBlock");

        let animation = document.createElement("div");
        animation.setAttribute("class", "animation");
        divAnimation.appendChild(animation);

        let animationSettings = document.createElement("div");
        animationSettings.setAttribute("class", "animation_settings");

        let layersButton = document.createElement("div");
        layersButton.innerHTML = `<i class="fas fa-layer-group"></i>`;
        layersButton.dataset.description = `${this.state.tools[0].name} (${this.state.tools[0]
            .shortCut.hint})`;
        layersButton.setAttribute("class", "layersButton");
        animationSettings.appendChild(layersButton);

        let fpsView = document.createElement("span");
        fpsView.textContent = `${+this.state.animationSettings.fpsValue} fps`;
        fpsView.setAttribute("class", "fpsView");
        animationSettings.appendChild(fpsView);

        let fpsRange = document.createElement("input");
        fpsRange.setAttribute("class", "fpsRange");
        fpsRange.setAttribute("type", "range");
        fpsRange.setAttribute("min", "0");
        fpsRange.setAttribute("max", "24");
        animationSettings.appendChild(fpsRange);

        divAnimation.appendChild(animationSettings);
        mainDiv.appendChild(divAnimation);

        return mainDiv;
    }
}

export default Animation_layers;
