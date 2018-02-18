function flatten (array) {
  return array.reduce((init, next) => init.concat(next), [])
}

module.exports = flatten
