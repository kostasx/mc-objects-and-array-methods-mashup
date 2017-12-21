var test = require('tape')
var solution = require('./exercise3.js')
var sinon = require('sinon')

var numbersArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
var numbersAndStrings = [1, 2, '3', '4']
var fruits = ['apple', 'banana', 'orange', 'tomato']

function isEven(n) {
  return n % 2 === 0
}
function addOne(n) {
  return n + 1
}
function isString(n) {
  return typeof n === 'string'
}
function isNumber(n) {
  return typeof n === 'number'
}

function arrayReduceSpy(array) {
  return sinon.spy(array, 'reduce')
}

// test('tests filterMap', function(t) {
//   t.plan(2)
//   var numbersArrReduceSpy = arrayReduceSpy(numbersArr)
//   var expected = numbersArr.filter(isEven).map(addOne)
//   var actual = solution.filterMap(isEven, addOne, numbersArr)
//   t.deepEqual(actual, expected, `actual: ${actual}, expected: ${expected}`)
//   t.ok(numbersArrReduceSpy.calledOnce, 'reduce should have been used once')
//   t.end()
// })
