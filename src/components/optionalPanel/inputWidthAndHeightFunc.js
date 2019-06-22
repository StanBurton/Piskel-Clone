function inputWidthAndHeightFunc(state){
    return function(e){
        state.canvasSettings.rows = +e.target.value;
        state.canvasSettings.columns = +e.target.value;
        if(e.target.getAttribute('id') == "inputWidth"){       
            document.querySelector("#inputHeight").value = e.target.value;
        }else {       
            document.querySelector("#inputWidth").value = e.target.value;
        }
    }
}
export default inputWidthAndHeightFunc;