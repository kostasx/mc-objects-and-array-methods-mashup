var test = require('tape')
var solution = require('./exercise1.js')
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

test('tests map', function(t) {
  t.plan(2)
  var reduceSpy = arrayReduceSpy(numbersArr)
  var expected = numbersArr.map(addOne)
  var actual = solution.map(numbersArr, addOne)
  t.ok(reduceSpy.called, 'reduce should have been used')
  reduceSpy.restore()
  t.deepEqual(actual, expected, `actual: ${actual}, expected: ${expected}`)
  t.end()
})

test('tests filter', function(t) {
  t.plan(2)
  var reduceSpy = arrayReduceSpy(numbersArr)
  var expected = numbersArr.filter(isEven)
  var actual = solution.filter(numbersArr, isEven)
  t.ok(reduceSpy.called, 'reduce should have been used')
  reduceSpy.restore()
  t.deepEqual(actual, expected, `actual: ${actual}, expected: ${expected}`)
  t.end()
})

test('tests some', function(t) {
  t.plan(4)
  var numAndStringReduceSpy = arrayReduceSpy(numbersAndStrings)
  var expected = numbersAndStrings.some(isString)
  var actual = solution.some(numbersAndStrings, isString)
  t.ok(numAndStringReduceSpy.called, 'reduce should have been used')
  numAndStringReduceSpy.restore()
  t.equal(actual, expected, `actual: ${actual}, expected: ${expected}`)

  var numReduceSpy = arrayReduceSpy(numbersArr)
  expected = numbersArr.some(isString)
  actual = solution.some(numbersArr, isString)
  t.ok(numReduceSpy.called, 'reduce should have been used')
  numReduceSpy.restore()
  t.equal(actual, expected, `actual: ${actual}, expected: ${expected}`)
  t.end()
})

test('tests every', function(t) {
  t.plan(4)

  var numAndStringReduceSpy = arrayReduceSpy(numbersAndStrings)
  var expected = numbersAndStrings.every(isString)
  var actual = solution.every(numbersAndStrings, isString)
  t.ok(numAndStringReduceSpy.called, 'reduce should have been used')
  numAndStringReduceSpy.restore()
  t.equal(actual, expected, `actual: ${actual}, expected: ${expected}`)

  var numReduceSpy = arrayReduceSpy(numbersArr)
  expected = numbersArr.every(isNumber)
  actual = solution.every(numbersArr, isNumber)
  t.ok(numReduceSpy.called, 'reduce should have been used')
  numReduceSpy.restore()
  t.equal(actual, expected, `actual: ${actual}, expected: ${expected}`)
  t.end()
})
