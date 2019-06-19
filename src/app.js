import Header from "./components/header";
import Tools from "./components/tools";
import Frames from "./components/frames";
import canvas from "./components/canvas";
import animation_layers from "./components/animation_layers";
import optionalPanel from "./components/optionalPanel";

            // tools: [
            //     {
            //         "name": "Pen Tool",
            //         "slug": "colorpicker",
            //         "shortcut": {
            //             "key": 23,
            //             "hint": "P"
            //         },
            //         "icon_class": "fas fa-pen",   
            //     }
            // ]
            
class APP {
    constructor() {
        this.state = {
            canvasEventFunc: null,
            frames: [
                {
                    id: 1
        
                },
                {
                    id: 2
                }
            ],
            spriteName: "value",
            colors: {
                current: "red",
                previous: "#ffffff"
            },
            shortCuts: {
                "Pen Tool": "P",
                "Vertical Mirror Pen": "V"
            }

        };

        this.components = [
            new Header(this.state, this.setState),
            new Tools(this.state, this.setState),
            new Frames(this.state, this.setState)
            // canvas,
            // animation_layers,
            // optionalPanel
        ];
    }
    setState(newState){
        this.state = Object.assign(this.state, newState);
        this.render();
    }
    render() {
        return this.packaging();
    }
    packaging() {
        let mainDiv = document.createElement("div");
        mainDiv.className = "main";
        this.components.forEach(component => mainDiv.appendChild(component.render()));

        return mainDiv;
    }
}

export default APP;
