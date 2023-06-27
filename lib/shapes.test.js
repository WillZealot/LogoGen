const { Triangle, Square, Circle } = require('./shapes');

describe('triangle', () => {
  test('should return the proper rendering of an image according to class name', () => {
    const triangle = new Triangle();
    triangle.setColor('#FF0000');
    expect(triangle.render()).toEqual('<polygon points="150,18 244,182 56,182" width="300" height="200" fill="#FF0000" />');
  });
});

describe('square', () => {
    test('should return the proper rendering of an image according to class name', () => {
      const square = new Square();
      square.setColor('#FF0000');
      expect(square.render()).toEqual('<rect x="60" y="60" width="300" height="200" fill="#FF0000"/>');
    });
  });
