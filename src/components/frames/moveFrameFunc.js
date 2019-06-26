function moveFrameFunc(state, setState, that){

    return function(e){

        
        function checkPosition(tar){
            framesArr.forEach((fr, index) => {
                if(index !== aimPosition){
                    fr.removeAttribute("style")
                }
            })

            for(let i = 0; i < framesArr.length; i++){
                if(i !== aimPosition){
                    if((tar > (framesArr[i].offsetTop - framesArr[i].offsetHeight/4)) && (tar < (framesArr[i].offsetTop + framesArr[i].offsetHeight/4))){
                        framesArr[i].style.borderTop = "4px solid #8E7A0E";
                        framesArr[i].style.opacity = "0.5";
                        
                    }
                    else if(tar > (framesArr[framesArr.length-1].offsetTop + framesArr[framesArr.length-1].offsetHeight)){
                        framesArr[framesArr.length-1].style.borderBottom = "4px solid #8E7A0E";
                        framesArr[i].style.opacity = "0.5";
                        
                    }
                }
            }
        }


        function msUp(){
            window.removeEventListener("mousemove", msMove);
            window.removeEventListener("mouseup", msUp);
            let siblerArr = Array.from(document.querySelectorAll(".frame")).filter((fr, index) => {
                if(index !== aimPosition) {
                    return fr.hasAttribute("style")
                }
            });
            let sibler = siblerArr[0];
            if(sibler){
                // console.log(siblerArr)
                // console.log(sibler)
                // console.log(+sibler.getAttribute("data-position"))
                // console.log(framesArr.length)
                if(+sibler.getAttribute("data-position") == framesArr.length){
                    // console.log(state.frames)
                    // console.log("last")
                    let newArr = state.frames.splice(aim.getAttribute("data-position")-1, 1);
                    state.frames.splice(+sibler.getAttribute("data-position"), 0, newArr[0]);
                    // console.log(state.frames.indexOf(newArr[0]))
                    that.setState(state);
                }else{
                    // console.log(state.frames)
                    // console.log("first")
                    let newArr = state.frames.splice(aim.getAttribute("data-position")-1, 1);
                    state.frames.splice(+sibler.getAttribute("data-position")-1, 0, newArr[0]);
                    // state.currFrame = 
                    // console.log(state.frames.indexOf(newArr[0]))
                    that.setState(state);
                }
            }else{
                that.setState(state)
            }
        }

        function msMove(e){
            let coorY = (e.pageY - (aim.offsetHeight - aim.offsetHeight / 10)) - headerHeight;
            aim.style.position = "absolute";
            aim.style.zIndex = 5;
            aim.style.top = `${coorY}px`
            checkPosition(coorY);
        
        }

        let headerHeight = document.querySelector(".header").offsetHeight;
        let framesArr = Array.from(document.querySelectorAll(".frame"));
        let aim = Array.from(document.querySelectorAll(".frame")).filter(el => e.target.parentNode.parentNode.getAttribute("data-id") == el.getAttribute("data-id"))[0];
        let aimPosition = framesArr.indexOf(aim);
        
        window.addEventListener("mouseup", msUp);
        window.addEventListener("mousemove", msMove);
    }
}
export default moveFrameFunc;