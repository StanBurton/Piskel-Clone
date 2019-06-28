function moveFrameFunc(state, setState, that){

    return function(e){

        
        function checkPosition(tar){
            console.log( 0 !== 0)
            if(indexR){
                for(let i = 0; i < fWA.length; i++){
                    if(indexR == fWA.length-1){
                        fWA[i].style.marginBottom = `${fWA[i].offsetHeight + fWA[i].offsetHeight/10}px`;
                        fWA[i].style.borderBottom = "4px dashed #FFD700";
                        fWA[i].dataset.last = "true";
                    }
                    if(i !== indexR){
                        fWA[i].removeAttribute("style");
                    }
                }
                fWA.forEach(fr => fr.removeAttribute("data-last"));
            }else {
                fWA.forEach(fr => fr.removeAttribute("style"));
                fWA.forEach(fr => fr.removeAttribute("data-last"));  
            }

            for(let i = 0; i < fWA.length; i++){
                    if((tar > (fWA[i].offsetTop - fWA[i].offsetHeight/4)) && (tar < (fWA[i].offsetTop + fWA[i].offsetHeight/4))){
                        fWA[i].style.marginTop = `${fWA[i].offsetHeight + fWA[i].offsetHeight/10}px`;
                        fWA[i].style.borderTop = "4px dashed #FFD700";
                        indexR = i
                    }
                    else if(tar > fWA[i].offsetTop + fWA[i].offsetHeight){
                        if(i == fWA.length-1){
                            fWA[i].style.marginBottom = `${fWA[i].offsetHeight + fWA[i].offsetHeight/10}px`;
                            fWA[i].style.borderBottom = "4px dashed #FFD700";
                            fWA[i].dataset.last = "true";
                            indexR = i
                        }
                    }
            }    
        }

        function msUp(){
            window.removeEventListener("mousemove", msMove);
            window.removeEventListener("mouseup", msUp);
            let sibler = fWA.filter(fr => fr.getAttribute("style"))[0];

            console.log(sibler)

            if(sibler){
                if((fWA.indexOf(sibler) == fWA.length-1) && (sibler.getAttribute("data-last") == "true")){
                    console.log("laast")
                    let newArr = state.frames.splice(aim.getAttribute("data-position")-1, 1);
                    state.frames.push(newArr[0]);
                    that.setState(state);
                }else{
                    console.log("not last")
                    let newArr = state.frames.splice(aim.getAttribute("data-position")-1, 1);
                    state.frames.splice(+sibler.getAttribute("data-position")-1, 0, newArr[0]);
                    that.setState(state);
                }
            }else{
                console.log("nichego")
                that.setState(state)
            }

        }

        function msMove(e){
            let coorY = (e.pageY - (aim.offsetHeight - (aim.offsetHeight / 10)) - headerHeight);
            aim.style.position = "absolute";
            aim.style.zIndex = 5;
            aim.style.top = `${coorY}px`
            checkPosition(coorY);
            
        }

        let headerHeight = document.querySelector(".header").offsetHeight;
        let framesArr = Array.from(document.querySelectorAll(".frame"));
        let indexR;
        let aim = framesArr.filter(el => +e.target.parentNode.parentNode.getAttribute("data-position") == +el.getAttribute("data-position"))[0];
        let fWA = framesArr.filter(el => +e.target.parentNode.parentNode.getAttribute("data-position") !== +el.getAttribute("data-position"));
        
        window.addEventListener("mouseup", msUp);
        window.addEventListener("mousemove", msMove);
    }
}
export default moveFrameFunc;