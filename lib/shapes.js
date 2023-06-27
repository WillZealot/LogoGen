// Define the base shape class
class Shape {
    constructor(shapeColor) {
      this.shapeColor = shapeColor; // Store the shape color
    }
  
    setColor(shapeColor) {
      this.shapeColor = shapeColor; // Set the shape color
    }
  
    render() {
      // This method will be implemented by the derived classes
      // and should return the SVG representation of the shape
    }
  }
  
  // Define the triangle class which extends the shape class
  class Triangle extends Shape {
    render() {
      return `<polygon points="150,18 244,182 56,182" width="300" height="200" fill="${this.shapeColor}" />`;
      // Return the SVG representation of a triangle with the assigned color
    }
  }
  
  // Define the circle class which extends the shape class
  class Circle extends Shape {
    render() {
      return `<circle cx="150" cy="150" r="100" fill="${this.shapeColor}" />`;
      // Return the SVG representation of a circle with the assigned color
    }
  }
  
  // Define the square class which extends the shape class
  class Square extends Shape {
    render() {
      return `<rect x="60" y="60" width="300" height="200" fill="${this.shapeColor}" />`;
      // Return the SVG representation of a square with the assigned color
    }
  }
  
  // Export the shape, triangle, circle, and square classes
  module.exports = { Shape, Triangle, Circle, Square };

