class shape {
    constructor(logotext, txtcolor, shapecolor){
    this.logotext = logotext,
    this.txtcolor = txtcolor,
    this.shapecolor = shapecolor
    }
}

const createTriangle = (data) => {
    class triangled extends shape{
        constructor(logotext, txtcolor, shapecolor, shape, shapedimensions){
        super(logotext, txtcolor,shapecolor),
        this.shape = shape,
        shapedimensions = "150,150 200,50 250,150"
        }
    }

    const newtriangle = new triangled(`${this.logotext}`,`${this.txtcolor}`,`${this.shapecolor}`, `${this.shape}` );
    console.log(newtriangle);
}

const createCircle = (data) => {
    class circled extends shape{
        constructor(logotext, txtcolor, shapecolor, shape, shapedimensions){
            super(logotext, txtcolor,shapecolor),
            this.shape = shape,
            shapedimensions = "150,150 200,50 250,150" //To Do change this to circle dimenscions
            }
    }

    const newcircle = new circled(`${this.logotext}`,`${this.txtcolor}`,`${this.shapecolor}`, `${this.shape}` );
    console.log(newcircle);
}

const createSquare = (data) => {
    class squared extends shape{
        constructor(logotext, txtcolor, shapecolor, shape, shapedimensions){
            super(logotext, txtcolor,shapecolor);  
            this.shape = shape,
            shapedimensions = "150,150 200,50 250,150" //To Do change this to square dimenscions
            }
    }

    const newsquare = new squared(`${this.logotext}`,`${this.txtcolor}`,`${this.shapecolor}`, `${this.shape}` );
    console.log(newsquare);
}

createCircle();
createSquare();
createTriangle();

