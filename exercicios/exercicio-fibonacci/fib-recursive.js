function fibonacci (terms) {
  if (terms <= 1) return terms
  return fibonacci(terms - 1) + fibonacci(terms - 2)
}

console.time('Fibonacci Recursivo')
console.log(fibonacci(process.argv[2]))
console.timeEnd('Fibonacci Recursivo')
