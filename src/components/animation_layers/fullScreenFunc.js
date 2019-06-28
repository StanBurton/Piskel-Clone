function fullScreenFunc(state, setState, that){

    return function(){
            this.parentNode.requestFullscreen();
            
    }
}
export default fullScreenFunc;