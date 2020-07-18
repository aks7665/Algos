const matrix = require('./index');

test('matrix is a function', () => {
  expect(typeof matrix).toEqual('function');
});

test('matrix produces a 2x2 array', () => {
  expect(matrix(2)).toEqual("1,2,4,3");
});

test('matrix produces a 3x3 array', () => {
  expect(matrix(3)).toEqual("1,2,3,6,9,8,7,4,5");
});

test('matrix produces a 4x4 array', () => {
  expect(matrix(4)).toEqual("1,2,3,4,8,12,16,15,14,13,9,5,6,7,11,10");
});
