const cluster = require('cluster')
function factorial (num) {
  if (num === 1 || num === 0) return 1
  return num * factorial(num - 1)
}

if (cluster.isMaster) {
  const numWorkers = require('os').cpus().length

  console.log('Master criando ' + numWorkers + ' workers...')

  for (var i = 0; i < numWorkers; i++) {
    let worker = cluster.fork()
    worker.on('message', function (message) {
      console.log(message.from + ': ' + message.type + ' ' + message.data.number + ' = ' + message.data.result)
    })
  }

  for (let wid in cluster.workers) {
    cluster.workers[wid].send({
      type: 'factorial',
      from: 'master',
      data: {
        number: Math.floor(Math.random() * 50 + wid)
      }
    })
  }

  cluster.on('online', function (worker) {
    console.log('Worker ' + worker.process.pid + ' online')
    // cluster.workers[worker.id].send({
    //   type: 'factorial',
    //   from: 'master',
    //   data: {
    //     number: Math.floor(Math.random() * 50)
    //   }
    // })
  })

  cluster.on('exit', function (worker, code, signal) {
    console.log('Worker ' + worker.process.pid + ' morreu com código: ' + code + ', e sinal: ' + signal)
    console.log('Criando novo')
    let newWorker = cluster.fork()
    newWorker.on('message', function (message) {
      console.log(message.from + ': ' + message.type + ' ' + message.data.number + ' = ' + message.data.result)
    })
  })
}
process.on('message', function (message) {
  if (message.type === 'factorial') {
    process.send({
      type: 'factorial',
      from: 'Worker ' + process.pid,
      data: {
        number: message.data.number,
        result: factorial(message.data.number)
      }
    })
    // process.exit(0)
  }
})
