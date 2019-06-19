import style from "./index.scss";

class Frames {
    constructor(state, setState) {
        this.state = state;
    }

    render() {
        function createFrames(state) {
            let arr = [];
            for (let i = 0; i < state.frames.length; i++) {
                let frame = document.createElement("div");
                frame.setAttribute("class", "frame");
                ///need to add canvas here
                let iconNum = document.createElement("div");
                iconNum.innerHTML = `<i>${state.frames[i].id}</i>` ;
                iconNum.setAttribute("class", "iconNum");
                frame.appendChild(iconNum);
    
                let iconCopy = document.createElement("div");
                iconCopy.innerHTML = `<i class="far fa-copy"></i>`;
                iconCopy.setAttribute("class", "iconCopy");
                iconCopy.dataset.info = "Copy this frame";
                frame.appendChild(iconCopy);
    
                if (state.frames.length > 1) {
                    let iconDel = document.createElement("div");
                    iconDel.innerHTML = `<i class="far fa-trash-alt"></i>`;
                    iconDel.setAttribute("class", "iconDel");
                    iconDel.dataset.info = "Delete this frame";
                    frame.appendChild(iconDel);
    
                    let iconMove = document.createElement("div");
                    iconMove.innerHTML = `<i class="fas fa-arrows-alt"></i>`;
                    iconMove.setAttribute("class", "iconMove");
                    iconMove.dataset.info = "Move this frame";
                    frame.appendChild(iconMove);
                }
    
                arr.push(frame);
            }
            return arr;
        }
        const mainDiv = document.createElement("div");
        mainDiv.className = "frames";
    
        createFrames(this.state).forEach(frame => mainDiv.appendChild(frame));
    
        let addFrameButton = document.createElement("button");
        let plus = document.createElement("i");
        plus.setAttribute("class", "fas fa-plus");
        addFrameButton.appendChild(plus);
        let span = document.createElement("span");
        span.setAttribute("class", "addFrame_text");
        span.textContent = "Add new frame";
        addFrameButton.appendChild(span);
        mainDiv.appendChild(addFrameButton);
    
        return mainDiv;
    }
}

export default Frames;
