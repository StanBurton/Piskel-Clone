import App from "./app.js"
import mainstyles from "./styles/mainstyles.scss"

const body = document.querySelector("body");

body.appendChild(new App().render());