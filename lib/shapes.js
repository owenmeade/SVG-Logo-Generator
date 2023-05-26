class Shape{
    constructor(){
        this.color=''
    }
    setColor(color){
        this.color = color
    }
};


//create cirle class that extends from shape
class Circle extends Shape{
    render(){
        return `<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${this.color}">`
    }
}

//create triangle class that extends from shape
class Triangle extends Shape{
    render(){
        return `<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="${this.color}">`
    }
}

//create square class that extends from shape
class Square extends Shape{
    render(){
        return `<rect x="50" height="200" width="200" fill="${this.color}">`
    }
}

//export shapes
module.exports = {Circle, Triangle, Square};