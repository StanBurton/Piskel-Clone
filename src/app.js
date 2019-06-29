import Header from "./components/header";
import Tools from "./components/tools";
import Frames from "./components/frames";
import Canvas from "./components/canvas";
import Animation_layers from "./components/animation_layers";
import Optional_panel from "./components/optionalPanel";
import canvasBuild from "./screens/canvas/canvasBuild.js";
import previewCanvasBuild from "./screens/preview/previewCanvasBuild.js";
import frameCanvasBuild from "./screens/frame/frameCanvasBuild.js"



class APP {
    constructor() {
        this.fullScreen = false;
        this.that = this;
        this.count = this.getCount();
        this.state = this.getState();
        this.components = [
            new Header(this.state, this.setState),
            new Tools(this.state, this.setState, this.that),
            new Frames(this.state, this.setState, this.that),
            new Canvas(this.state, this.setState, this.that),
            new Animation_layers(this.state, this.setState, this.that),
            new Optional_panel(this.state, this.setState, this.that)
        ];
    }
    getCount() {
        if(localStorage.getItem("count")){
            return JSON.parse(localStorage.getItem("count"))
        }else{
            return 0
        }
    }
    getState() {
        if(localStorage.getItem("state")){
            console.log(JSON.parse(localStorage.getItem("state")))
            return JSON.parse(localStorage.getItem("state"), function(key, value){
                if (typeof value === "string" &&
                value.startsWith("/Function(") &&
                value.endsWith(")/")) {
                    value = value.substring(10, value.length - 2);
                    return eval("(" + value + ")");
                }
                return value;
            })
        }else{
            return {
                animationSettings: {
                    fpsValue: 1
                },
                canvasSettings: {
                    top: "-10%",
                    left: "10%",
                    rows: 32,
                    columns: 32,
                    scale: 0.8
                },
                canvasEventFunc: function penTool() {
                    alert("Choose Tool!")
                },
                currFrame: 0,
                frames: [
                    {
                        id: ++this.count,
                        matrix: []
                    }
                ],
                spriteName: null,
                colors: {
                    current: "#000000",
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
        }
    }
    drawCanvas(){
        new canvasBuild(this.state).draw();
        new frameCanvasBuild(this.state).draw();
        new previewCanvasBuild(this.state, this.that).draw();
    }
    setStateSilent(newState){
        this.state = Object.assign(this.state, newState);
        console.log("MAIN STATE Silent: ");
        console.log(this.state);
    }

    setState(newState){
        this.state = Object.assign(this.state, newState);
        localStorage.setItem("state", JSON.stringify(this.state, function(key, value){
            if(typeof value === "function"){
                return "/Function(" + value.toString() + ")/";
            }
            return value
        }));
        localStorage.setItem("count", JSON.stringify(this.count));
        console.log("MAIN STATE: ");
        console.log(this.state);
        this.render();
    }

    render(first) {
        if(first){
            this.spriteName();
            return this.packaging();
        }else{
            document.querySelector(".main").remove();
            document.querySelector("body").appendChild(this.packaging());
            this.drawCanvas();
        }
    }

    packaging() {
        let mainDiv = document.createElement("div");
        mainDiv.setAttribute("class", "main");
        this.components.forEach(component => mainDiv.appendChild(component.render()));
        return mainDiv;
    }

    spriteName(){
        if(this.state.spriteName == null){
            this.state.spriteName = prompt("Enter sprite name", "New Sprite *");
        }else{
            return
        }
    }
}

export default APP;
