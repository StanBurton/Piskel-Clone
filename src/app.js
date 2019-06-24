import Header from "./components/header";
import Tools from "./components/tools";
import Frames from "./components/frames";
import Canvas from "./components/canvas";
import Animation_layers from "./components/animation_layers";
import Optional_panel from "./components/optionalPanel";
import { timingSafeEqual } from "crypto";



class APP {
    constructor() {
        this.that = this;
        this.count = 0;
        this.state = {
            animationSettings: {
                fpsValue: 1
            },
            canvasSettings: {
                width: "500px",
                height: "500px",
                rows: 32,
                columns: 32,
                scale: 1
            },
            canvasEventFunc: function penTool() {
                console.log("privet");
            },
            count: 1,
            frames: [
                {
                    id: ++this.count
                },
            ],
            spriteName: "value",
            colors: {
                current: "red",
                previous: "#ffffff"
            },
            penWidth: 2,
            tools: [
                {
                    name: "Toogle onion skin",
                    slug: "toogleOnionToolFunc",
                    shortCut: {
                        key: 23,
                        hint: "Alt + 6"
                    }  
                },
                {
                    name: "Pen Tool",
                    slug: "penTool",
                    shortCut: {
                        key: 23,
                        hint: "P"
                    }  
                },
                {
                    name: "Vertical Mirror Pen",
                    slug: "mirrorPenToolFunc",
                    shortCut: {
                        key: 24,
                        hint: "H"
                    } 
                },
                {
                    name: "Paint Bucket Tool",
                    slug: "bucketTool",
                    shortCut: {
                        key: 25,
                        hint: "J"
                    } 
                },
                {
                    name: "Paint all pixels of the same color",
                    slug: "bucketSameColorToolFunc",
                    shortCut: {
                        key: 26,
                        hint: "K"
                    } 
                },
                {
                    name: "Eraser Tool",
                    slug: "eraserTool",
                    shortCut: {
                        key: 27,
                        hint: "L"
                    } 
                },
                {
                    name: "Stroke Tool",
                    slug: "strokeToolFunc",
                    shortCut: {
                        key: 28,
                        hint: "Y"
                    } 
                },
                {
                    name: "Rectangle Tool",
                    slug: "rectangleToolFunc",
                    shortCut: {
                        key: 29,
                        hint: "T"
                    } 
                },
                {
                    name: "Circle Tool",
                    slug: "circleToolFunc",
                    shortCut: {
                        key: 30,
                        hint: "R"
                    } 
                },
                {
                    name: "Move Tool",
                    slug: "moveToolFunc",
                    shortCut: {
                        key: 31,
                        hint: "Y"
                    } 
                },
                {
                    name: "Shape Selection",
                    slug: "shapeSelectToolFunc",
                    shortCut: {
                        key: 33,
                        hint: "U"
                    } 
                },
                {
                    name: "Rectangle Selection",
                    slug: "rectangleSelectToolFunc",
                    shortCut: {
                        key: 34,
                        hint: "I"
                    } 
                },
                {
                    name: "Lasso Selection",
                    slug: "lassoSelectToolFunc",
                    shortCut: {
                        key: 34,
                        hint: "O"
                    } 
                },
                {
                    name: "Lighten",
                    slug: "lightenToolFunc",
                    shortCut: {
                        key: 35,
                        hint: "Q"
                    } 
                },
                {
                    name: "Dithering Tool",
                    slug: "ditheringToolFunc",
                    shortCut: {
                        key: 37,
                        hint: "W"
                    } 
                },
                {
                    name: "Color Picker",
                    slug: "colorPickerToolFunc",
                    shortCut: {
                        key: 38,
                        hint: "C"
                    } 
                },
            ]
        };

        this.components = [
            new Header(this.state, this.setState),
            new Tools(this.state, this.setState, this.that),
            new Frames(this.state, this.setState, this.that),
            new Canvas(this.state, this.setState),
            new Animation_layers(this.state, this.setState),
            new Optional_panel(this.state, this.setState)
        ];
    }

    setState(newState){
        this.state = Object.assign(this.state, newState);
        console.log("MAIN STATE: ");
        console.log(this.state);
        this.render();
    }

    render(check) {
        if(check){
            return this.packaging();
        }else{
            document.querySelector(".main").remove();
            document.querySelector("body").appendChild(this.packaging());

        }
    }

    packaging() {
        let mainDiv = document.createElement("div");
        mainDiv.className = "main";
        this.components.forEach(component => mainDiv.appendChild(component.render()));
        return mainDiv;
    }
}

export default APP;
