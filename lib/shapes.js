class shape{
    constructor(logotext, txtcolor, shapecolor){
    this.logotext = logotext,
    this.txtcolor = txtcolor,
    this.shapecolor = shapecolor
    }
}

const createTriangle = (data) => {
    class triangled extends shape{
        constructor(logotext, txtcolor, shapecolor, shape){
        super(logotext, txtcolor,shapecolor),
        this.shape = shape
        }
    }

    const newtriangle = new triangled("ttt","black", "yellow", "triangle" );
    console.log(newtriangle);
}

const createCircle = (data) => {
    class circled extends shape{
        constructor(logotext, txtcolor, shapecolor, shape){
            super(logotext, txtcolor,shapecolor),
            this.shape = shape
            }
    }

    const newcircle = new circled("ttt","black", "yellow", "circle");
    console.log(newcircle);
}

const createSquare = (data) => {
    class squared extends shape{
        constructor(logotext, txtcolor, shapecolor, shape){
            super(logotext, txtcolor,shapecolor);  
            this.shape = shape  
            }
    }

    const newsquare = new squared("ttt","black", "yellow", "square");
    console.log(newsquare);

}

createCircle();
createSquare();
createTriangle();

