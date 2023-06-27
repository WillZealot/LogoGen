// Import the required shape classes
const { Triangle, Square, Circle } = require('./shapes');
// Test the Triangle class
describe('triangle', () => {
  test('should return the proper rendering of an image according to class name', () => {
    const triangle = new Triangle(); // Create a new instance of the Triangle class
    triangle.setColor('#FF0000'); // Set the color of the triangle
    expect(triangle.render()).toEqual('<polygon points="150,18 244,182 56,182" width="300" height="200" fill="#FF0000" />');
    // Verify that the rendered SVG representation of the triangle matches the expected output
  });
});

// Test the Square class
describe('square', () => {
  test('should return the proper rendering of an image according to class name', () => {
    const square = new Square(); // Create a new instance of the Square class
    square.setColor('#FF0000'); // Set the color of the square
    expect(square.render()).toEqual('<rect x="60" y="60" width="300" height="200" fill="#FF0000"/>');
    // Verify that the rendered SVG representation of the square matches the expected output
  });
});

// Test the Circle class
describe('circle', () => {
  test('should return the proper rendering of an image according to class name', () => {
    const circle = new Circle(); // Create a new instance of the Circle class
    circle.setColor('#FF0000'); // Set the color of the circle
    expect(circle.render()).toEqual('<circle cx="150" cy="100" r="80" width="300" height="200" fill="#FF0000"/>');
    // Verify that the rendered SVG representation of the circle matches the expected output
  });
});
