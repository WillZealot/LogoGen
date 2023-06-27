const { Triangle, Square, Circle } = require('./shapes');

describe('triangle', () => {
  test('should return the proper rendering of an image according to class name', () => {
    const triangle = new Triangle();
    triangle.setColor('blue');
    expect(triangle.render()).toEqual('<polygon points="150,18 244,182 56,182" width="300" height="200" fill="blue" />');
  });
});