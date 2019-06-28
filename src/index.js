import App from "./app.js"
import mainstyles from "./styles/mainstyles.scss"

const body = document.querySelector("body");

let mainApp = new App();
body.appendChild(mainApp.render(1));
mainApp.drawCanvas()

// window.onresize = function(){
//     mainApp.render()
// }