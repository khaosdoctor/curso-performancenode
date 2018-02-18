const concat = require('./concat')
const difference = require('./difference')
const fill = require('./fill')
const flatten = require('./flatten')
const head = require('./head')
const indexOf = require('./indexOf')
const initial = require('./initial')
const intersect = require('./intersect')
const join = require('./join')
const last = require('./last')
const tail = require('./tail')

let arr = []

console.log('-- CONCAT --')
arr = [1]
const other = concat(arr, 2, [3], [[4]])
console.log('Array original ', arr)
console.log('Array alterado ', other)

console.log('-- DIFFERENCE --')
console.log('Diferença [2, 1] e [2, 3] =>', difference([2, 1], [2, 3]))

console.log('-- INTERSECT --')
console.log('Intersecção [2, 1] e [2, 3] =>', intersect([2, 1], [2, 3]))

arr = [1, 2, 3]
console.log('-- FILL --')
console.log('Tudo ', fill(arr, 'a'))
console.log('Com array ', fill(Array(3), 2))
console.log('Limitado ', fill([4, 6, 8, 10], '*', 1, 3))

arr = [1, 2, 3]
console.log('-- HEAD --')
console.log(arr, '=>', head(arr))

console.log('-- LAST --')
console.log(arr, '=>', last(arr))

console.log('-- TAIL --')
console.log(arr, '=>', tail(arr))

console.log('-- INITIAL --')
console.log(arr, '=>', initial(arr))

console.log('-- JOIN --')
arr = ['a', 'b', 'c']
console.log(arr, '=>', join(arr, '~'))

console.log('-- INDEXOF DE 2 --')
arr = [1, 2, 1, 2]
console.log(arr, '=>', indexOf(arr, 2))

console.log('-- FLATTEN --')
arr = [1, [2, [3, [4]], 5]]
console.log(arr, '=>', flatten(arr))
console.log('Mais um ', arr, '=>', flatten(flatten(arr)))
console.log('Mais um ainda ', arr, '=>', flatten(flatten(flatten(arr))))
