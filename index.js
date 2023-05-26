const inquirer = require('inquirer');
const fs = require('fs');
const {Square, Circle, Triangle} = require('./lib/shapes');

//questions
const questions = [
    {
        type: "input",
        name: "text",
        message: "TEXT: 3 Characters maximum:"
    },
    {
        type: "input",
        name: "text-color",
        message: "TEXT COLOR: Enter a color or hexidecimal number:"
    },
    {
        type: "list",
        name: "shape",
        message: "Choose a shape:",
        choices: ["Circle", "Triangle", "Square"]
    },
    {
        type: "input",
        name: "shape-color",
        message: "SHAPE COLOR: Enter a color or hexidecimal number:"
    }
];



//svg class constructor
class Svg{
    constructor(){
        this.textElement='';
        this.shapeElement='';
    }
    render(){
        return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">${this.shapeElement}${this.textElement}</svg>`
    }
    setTextEl(text, color){
        this.textElement = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.color}">${text}</text>`
    }
    setShapeEl(shape){
        this.shapeElement = shape.render()
    }
};

//function to writefile
function createFile(name, data){
    fs.writeFile(name,data, function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("SUCCESS, you have generated a logo.svg");
    })
};

async function init() {
    let svgString="";
    let svg_file="logo.svg";

    const answers = await inquirer.prompt(questions);
    let userText = "";
    if(answers.text.length > 0 && answers.text.length < 4) {
        userText = answers.text;
    } else {
        console.log("Invalid ammount of characters! Must be 1-3.")
        return;
    }
    userTextColor = answers["text-color"];
    userShapeColor = answers["shape-color"];
    userShapeType = answers.shape;
    let userShape;
    if(userShapeType === "Square"){
        userShape = new Square();
    } else if(userShapeType === "Triangle"){
        userShape = new Triangle();
    } else if(userShapeType === "Circle"){
        userShape = new Circle();
    } else {
        console.log("Invalid shape!")
    }
    userShape.setColor(userShapeColor);
    
    var svg = new Svg();
    svg.setTextEl(userText, userTextColor);
    svg.setShapeEl(userShape);
    svgString = svg.render();
    createFile(svg_file,svgString);
}
init();