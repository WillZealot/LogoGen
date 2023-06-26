class shape {
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

    const newtriangle = new triangled(`${this.logotext}`,`${this.txtcolor}`,`${this.shapecolor}`, `${this.shape}` );
    console.log(newtriangle);

    const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200">
    <polygon points="150,150 200,50 250,150" fill="${this.shapecolor}" />

    <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${this.txtcolor}" font-size="20">
    "${this.logotext}"
  </text>
  </svg>`;
}

const createCircle = (data) => {
    class circled extends shape{
        constructor(logotext, txtcolor, shapecolor, shape){
            super(logotext, txtcolor,shapecolor),
            this.shape = shape
            }
    }

    const newcircle = new circled(`${this.logotext}`,`${this.txtcolor}`,`${this.shapecolor}`, `${this.shape}` );
    console.log(newcircle);

    const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200">
    <polygon points="150,150 200,50 250,150" fill="${this.shapecolor}" />

    <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${this.txtcolor}" font-size="20">
    "${this.logotext}"
  </text>
  </svg>`;
}

const createSquare = (data) => {
    class squared extends shape{
        constructor(logotext, txtcolor, shapecolor, shape){
            super(logotext, txtcolor,shapecolor);  
            this.shape = shape  
            }
    }

    const newsquare = new squared(`${this.logotext}`,`${this.txtcolor}`,`${this.shapecolor}`, `${this.shape}` );
    console.log(newsquare);
    
    const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200">
    <polygon points="150,150 200,50 250,150" fill="${this.shapecolor}" />

    <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${this.txtcolor}" font-size="20">
    "${this.logotext}"
  </text>
  </svg>`;

}

createCircle();
createSquare();
createTriangle();

