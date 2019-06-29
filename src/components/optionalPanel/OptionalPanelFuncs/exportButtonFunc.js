import GIF from "./gif.js";

function exportButtonFunc(state) {
    return function() {
        let gif = new GIF({
            workers: 2,
            quality: 10
        });

        let range = 39.3;
        let frames = state.frames;
        let canvasBlockWidth = document.querySelector(".canvasBlock")
            .scrollWidth;
        let canvas = document.createElement("canvas");
        let canvasWidth =
            Math.floor(canvasBlockWidth / range) * state.canvasSettings.rows;
        let canvasHeight =
            Math.floor(canvasBlockWidth / range) * state.canvasSettings.columns;
        canvas.setAttribute("id", "gifCanvas");
        canvas.setAttribute("width", canvasWidth);
        canvas.setAttribute("height", canvasHeight);
        let ctx = canvas.getContext("2d");
        let fps = 1000 / state.animationSettings.fpsValue;
        document.body.appendChild(canvas);
        let pixelSize = Math.ceil(
            canvas.clientWidth / state.canvasSettings.rows
        );
        for (let i = 0; i < frames.length; i++) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            for (let j = 0; j < frames[i].matrix.length; j++) {
                for (let q = 0; q < frames[i].matrix[j].length; q++) {
                    ctx.fillStyle = frames[i].matrix[j][q];
                    ctx.fillRect(
                        j * pixelSize,
                        q * pixelSize,
                        pixelSize,
                        pixelSize
                    );
                }
            }

            gif.addFrame(canvas, { copy: true, delay: fps });
        }

        gif.on("finished", function(blob) {
            var url = window.URL.createObjectURL(blob);
            var a = document.createElement("a");
            document.body.appendChild(a);
            a.style = "display: none";
            a.href = url;
            a.download = state.spriteName;
            a.click();
            window.URL.revokeObjectURL(url);
            a.remove();
        });

        gif.render();
        document.querySelector("#gifCanvas").remove();
    };
}
export default exportButtonFunc;
