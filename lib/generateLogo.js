const generateLogo = (data) => {
    const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200">
    <polygon points="${this.shapedimensions}" fill="${this.shapecolor}" />

    <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${this.txtcolor}" font-size="20">
    "${this.logotext}"
  </text>
  </svg>`;
}