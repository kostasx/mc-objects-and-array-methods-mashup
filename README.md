# Array methods, reduce, and you

Authors: Zeliooes (Zooey & Elias)

This morning challenge is a mash up of the following two mcs:

* [mc-array-methods-reduce](https://github.com/foundersandcoders/mc-array-methods-reduce)
* [mc-objects-and-arrays](https://github.com/foundersandcoders/mc-objects-and-arrays)

## Learning Outcomes

* To understand how a number of useful array methods work
* To understand how reduce works
* To be able to manipulate objects with a array methods
* To never need a for loop ever again :nerd_face:

## Intro

This is a morning challenge designed to make you more confident using array methods in javascript, and apply this knowlege to manipulate objects in fun, interesting and safe ways.

## Let's Get Comfortable - Challenge 1

Array methods are used day in, day out by javascript developers, so you want to be as comfortable with them as a summers breeze. In this first challenge you are going to recreate array methods using reduce.

### Do's

The only array methods you are allowed to use are:

* `.reduce`
* `.concat`

### Don'ts

* NO `for` loops
* NO `while` loops
* NO `for` `in`

The only way arrays can be iterated over is reduce

### Useful Resources

* [MDN's .reduce() docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)

### Run Tips

* clone and cd into the repo
* run `npm i`
* challenges can be found in `exercise1.js`, read the comments, and get working on the functions!
* run `npm test` and look at the results

_As a note, rewriting these array methods yourself with reduce is not good practice for code you're going to use, this is more just a learning exercise. It's especially sub-optimal for `some` and `every` (can you think of why?)._

## Let's Get Manipulating - Challenge 2

Your next challenge is to use your new found array knowlege to manipulate data.

### Do's

Use array methods like:

* `.map`
* `.filter`
* `.reduce`

### Don'ts

* NO `for` loops
* NO `while` loops
* NO `Array.push`
* NO `delete` keyword
* NO mutating your data

### Useful Resources

* [Object.keys()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)
* [Object.assign()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)

### Run Tips

* challenges can be found in `exercise2.js`, read the comments, and get working on the functions!
* uncomment the tests in `exercise2.tests.js`
* run `npm test` and look at the results

## SUPER BONUS EXTRA LEVEL

Woah, did you make it this far? We're going to return to our super trusty `.reduce` method to make something new! We're going to make filterMap.

This is a function which takes:

* a function which returns a boolean
* a function which maps the array element
* an array

It should be functionally the same as array.filter(filterFn).map(mapFn), without having to iterate over the array twice.

### Do's

Use:

* `.reduce`
* `.concat`

### Don'ts

Don't use anything else!

### Run Tips

* final challenge can be found in `exercise3.js`
* uncomment the tests in `exercise3.tests.js`
* run `npm test` and look at the results

When you're done, can you think of other ways you could have solved the challenges in exercise 2? What do you think tradeoffs are for using all-in-one filter functions to using composable array methods?
