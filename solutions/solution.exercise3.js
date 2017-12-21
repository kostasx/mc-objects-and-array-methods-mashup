function filterMap(filterFn, mapFn, array) {
  return array.reduce(function(acc, el) {
    return filterFn(el) ? acc.concat(mapFn(el)) : acc
  }, [])
}

module.exports = {
  filterMap: filterMap
}
