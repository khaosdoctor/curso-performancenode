const cluster = require('cluster')
const http = require('http')
const PORT = 7866

if (cluster.isMaster) {
  const numWorkers = require('os').cpus().length

  console.log('Iniciando Cluster com ', numWorkers, ' workers')

  for (let i = 0; i < numWorkers; i++) {
    cluster.fork()
  }

  cluster.on('online', function (worker) {
    console.log('Worker ' + worker.process.pid + ' está online')
  })

  cluster.on('exit', function (worker, code, signal) {
    console.log('Worker ' + worker.process.pid + ' morreu com código: ' + code + ', e sinal: ' + signal)
    console.log('Iniciando outro worker')
    cluster.fork()
  })
} else {
  http.createServer((req, res) => {
    res.writeHead(200)
    for (let i = 0; i < 9999999; i++) {}
    setTimeout(() => res.end('processo ' + process.pid + ' diz oi!'), 5000)
  }).listen(PORT, () => console.log(`Servidor ${process.pid} iniciado na porta ${PORT}`))
}
