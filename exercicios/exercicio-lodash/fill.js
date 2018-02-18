function fill (arr, fill, start = 0, end = false) {
  if (!end) end = arr.length
  return arr.fill(fill, start, end)
}

module.exports = fill
