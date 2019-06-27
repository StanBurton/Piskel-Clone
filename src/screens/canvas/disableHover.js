

function disableHover(state){

    return function(){
       let canvas = document.querySelector("#canvasHover");
       canvas.style.opacity = "0";
       window.addEventListener("mouseup", msUp);
       function msUp(){
            canvas.style.opacity = "1";
            window.removeEventListener("mouseup", msUp);
       }
    }
}
export default disableHover;