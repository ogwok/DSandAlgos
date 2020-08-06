class Cookie {
    constructor(color) {
        this.color = color;
    }

    getColor(){
        return this.color
    }

    setColor(color){
        this.color = color;
    }
}

const cookieOne = new Cookie('green');
const cookieTwo = new Cookie('blue');

cookieOne.setColor('yellow');
console.log(cookieOne.getColor());