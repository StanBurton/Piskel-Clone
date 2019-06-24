import style from "./index.scss";
import addFrameFunc from "./addFrameFunc.js"
import deleteFrameFunc from "./deleteFrameFunc.js"
import copyFrameFunc from "./copyFrameFunc.js"

class Frames {
    constructor(state, setState, that) {
        this.state = state;
        this.setState = setState;
        this.that = that;
    }

    createFrames() {
        let arr = [];
        for (let i = 0; i < this.state.frames.length; i++) {
            let frame = document.createElement("div");
            frame.dataset.id = this.state.frames[i].id;
            frame.dataset.position = i + 1;
            frame.setAttribute("class", "frame");
            ///need to add canvas here
            let iconNum = document.createElement("div");
            iconNum.innerHTML = `<i>${frame.getAttribute("data-position")}</i>` ;
            iconNum.setAttribute("class", "iconNum");
            frame.appendChild(iconNum);

            let iconCopy = document.createElement("div");
            iconCopy.innerHTML = `<i class="far fa-copy"></i>`;
            iconCopy.setAttribute("class", "iconCopy");
            iconCopy.dataset.info = "Copy this frame";
            iconCopy.onclick = copyFrameFunc(this.state, this.setState, this.that);
            frame.appendChild(iconCopy);

            if (this.state.frames.length > 1) {
                let iconDel = document.createElement("div");
                iconDel.innerHTML = `<i class="far fa-trash-alt"></i>`;
                iconDel.setAttribute("class", "iconDel");
                iconDel.dataset.info = "Delete this frame";
                iconDel.onclick = deleteFrameFunc(this.state, this.setState, this.that);
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

    render() {

        const mainDiv = document.createElement("div");
        mainDiv.className = "frames";
    
        this.createFrames().forEach(frame => mainDiv.appendChild(frame));
    
        let addFrameButton = document.createElement("button");
        addFrameButton.onclick = addFrameFunc(this.state, this.setState, this.that);
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
