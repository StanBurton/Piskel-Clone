import App from "./app.js"
import mainstyles from "./styles/mainstyles.scss"

const body = document.querySelector("body");

let mainApp = new App();
body.appendChild(mainApp.render(1));
mainApp.drawCanvas()

document.addEventListener("fullscreenchange", function() {
    if(!document.fullscreenElement){
        mainApp.fullScreen = false
        mainApp.render()
    }
  });

window.onresize = function(){
        if(mainApp.fullScreen){
            return
        }else{
            mainApp.render()
        }
}

