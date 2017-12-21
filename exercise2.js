'use strict'

// INSTRUCTIONS
// DO NOT UNCOMMENT THIS CODE
//
// All the functions you must write will take as one of their arguments an
// Object. This object contains some information about some buildings. The key
// of the object will be the ID of the building, and the value will be an object
// with various properties describing the building. You can see an example of
// what this object looks like below:
//
//
// var buildings = {
//   14358: {
//     address: '1010 Yorkshire Circle, Rocky Mount, North Carolina, 75141',
//     rooms: 3,
//     value: 450000,
//   },
//   98343: {
//     address: '2367 Parkway Street, Palm Springs, California, 92262',
//     rooms: 2,
//     value: 375000,
//   },
//   ...
//   01942: {
//     address: '4079 Dola Mine Road, Raleigh, North Carolina, 27601',
//     rooms: 3,
//     value: 413000,
//   },
//   73826: {
//     address: '3979 Sunrise Road, SCHELL CITY, Missouri, 64783',
//     rooms: 4,
//     value: 490000,
//   },
//   73826: {
//     address: '738 Paradise Lane, Claremont, California, 91711',
//     rooms: 7,
//     value: 1200000,
//   },
// };
//
// This is just an example, but you can use it to decide how you will complete
// the functions below.

// This function should take the buildings object (`bldngs`) and return an array
// of objects that each describe a building. Using the `buildings` object above
// as an example input, this function would return:
// [
//   {
//     address: '1010 Yorkshire Circle, Rocky Mount, North Carolina, 75141',
//     rooms: 3,
//     value: 450000,
//   },
//   {
//     address: '2367 Parkway Street, Palm Springs, California, 92262',
//     rooms: 2,
//     value: 375000,
//   },
//   ...
// ]
function getListOfBuildingObjects(bldngs) {
  // CODE HERE
}

// This function should take the buildings object (`bldngs`) and return an array
// of strings where each string is the building address. Using the `buildings`
// object above as an example input, this function would return:
// [
//   '1010 Yorkshire Circle, Rocky Mount, North Carolina, 75141',
//   '2367 Parkway Street, Palm Springs, California, 92262',
//   ...
// ]
function getListOfBuildingAddresses(bldngs) {
  // CODE HERE
}

// This function should take the buildings object (`bldngs`) and a number
// (`minValue`), and should return an object that contains only those buildings
// that have a value at least as big as that given in `minValue`.
//
// Using the `buildings` object above as an example input, and assuming
// `minValue` = 400000, this function should return:
//
// {
//   14358: {
//     address: '1010 Yorkshire Circle, Rocky Mount, North Carolina, 75141',
//     rooms: 3,
//     value: 450000,
//   },
// }
function filterBuildingsByMinValue(bldngs, minValue) {
  // CODE HERE
}

// This function should take the buildings object (`bldngs`), and should return
// an object that contains all the buildings objects, with an extra key added
// called `id`, whose value is the top-level key of the object.
//
// Using the `buildings` object above as an example input, this function should
// return:
//
// {
//   14358: {
//     id: 14358,
//     address: '1010 Yorkshire Circle, Rocky Mount, North Carolina, 75141',
//     rooms: 3,
//     value: 450000,
//   },
//   98343: {
//     id: 98343,
//     address: '2367 Parkway Street, Palm Springs, California, 92262',
//     rooms: 2,
//     value: 375000,
//   },
// }
function addBuildingIdsToObjects(bldngs) {
  // CODE HERE
}

// This function should take the buildings object (`bldngs`), and should return
// an object that contains all the buildings objects, but where the value of the
// `address` key is an object, whose keys are `street`, `town`, `state` and
// `zipcode`.
//
// Using the `buildings` object above as an example input, this function should
// return:
//
// {
//   14358: {
//     address: {
//       street: '1010 Yorkshire Circle',
//       town: 'Rocky Mount',
//       state: 'North Carolina',
//       zipcode: 75141,
//     },
//     rooms: 3,
//     value: 450000,
//   },
//   98343: {
//     address: {
//       street: '2367 Parkway Street',
//       town: 'Palm Springs',
//       state: 'California',
//       zipcode: 92262,
//     },
//     rooms: 2,
//     value: 375000,
//   },
// }
function parseBuildingAddresses(bldngs) {
  // CODE HERE
}

module.exports = {
  getListOfBuildingObjects,
  getListOfBuildingAddresses,
  filterBuildingsByMinValue,
  addBuildingIdsToObjects,
  parseBuildingAddresses
}
