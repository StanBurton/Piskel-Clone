import style from "./index.scss";

function header(state) {
    const mainDiv = document.createElement("div");
    mainDiv.className = "header";

    let a = document.createElement("a");
    a.setAttribute("href", "#");
    let span = document.createElement("span");
    span.textContent = "PISKEL";
    a.appendChild(span);
    mainDiv.appendChild(a);

    let projectName = document.createElement("h2");
    projectName.textContent = state.spriteName || "New Sprite *";
    mainDiv.appendChild(projectName);

    let divButtons = document.createElement("div");
    mainDiv.appendChild(divButtons);
    let btnCreateSprite = document.createElement("button");
    btnCreateSprite.textContent = "Create Sprite";
    divButtons.appendChild(btnCreateSprite);
    let btnSignIn = document.createElement("button");
    btnSignIn.textContent = "Sign In";
    divButtons.appendChild(btnSignIn);

    return mainDiv;
}

export default header;
