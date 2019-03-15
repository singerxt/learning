const twoNumberSum = require('./index');
const { expect } = require('chai');

it('Test Case #1', function () {
  expect(twoNumberSum(
    [4, 6],
    10
  )).to.deep.eql([4, 6]);
});

it('Test Case #2', function () {
  expect(twoNumberSum(
    [4, 6, 1],
    5
  )).to.deep.eql([1, 4]);
});

it('Test Case #3', function () {
  expect(twoNumberSum(
    [4, 6, 1, -3],
    3
  )).to.deep.eql([-3, 6]);
});

it('Test Case #4', function () {
  expect(twoNumberSum(
    [3, 5, -4, 8, 11, 1, -1, 6],
    10
  )).to.deep.eql([-1, 11]);
});

it('Test Case #5', function () {
  expect(twoNumberSum(
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    17
  )).to.deep.eql([8, 9]);
});

it('Test Case #6', function () {
  expect(twoNumberSum(
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 15],
    18
  )).to.deep.eql([3, 15]);
});


it('Test Case #7', function () {
  expect(twoNumberSum(
    [-7, -5, -3, -1, 0, 1, 3, 5, 7],
    -5
  )).to.deep.eql([-5, 0]);
});

it('Test Case #8', function () {
  expect(twoNumberSum(
    [-21, 301, 12, 4, 65, 56, 210, 356, 9, -47],
    163
  )).to.deep.eql([-47, 210]);
});

it('Test Case #9', function () {
  expect(twoNumberSum(
    [-21, 301, 12, 4, 65, 56, 210, 356, 9, -47],
    164
  )).to.deep.eql([]);
});

