function fibonacci (terms) {
  if (terms <= 1) return terms
  let cur = 1
  let prev = 1

  for (let i = 2; i < terms; i++) {
    let temp = cur
    cur += prev
    prev = temp
  }

  return cur
}

console.time('Fibonacci Iterativo')
console.log(fibonacci(process.argv[2]))
console.timeEnd('Fibonacci Iterativo')
