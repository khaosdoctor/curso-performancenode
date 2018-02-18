const cluster = require('cluster')
const http = require('http')
const numCPUs = require('os').cpus().length
const PORT = 4566

if (cluster.isMaster) {
  console.log('Iniciando Cluster com ', numCPUs, ' workers')
  for (let i = 0; i < numCPUs; i++) {
    console.log(`Forkando processo ${i}`)
    cluster.fork()
  }
} else {
  http.createServer((req, res) => {
    res.writeHead(200)
    res.end(`Processo ${process.pid} diz: 'oi'`)
  }).listen(PORT, () => console.log(`Processo ${process.pid} ouvindo na porta ${PORT}`))
}

cluster.on('online', (worker) => console.log(`Worker ${worker.id} no processo ${worker.process.pid} está ativo`))
cluster.on('exit', (worker, code, signal) => {
  console.log(`Worker ${worker.id} morreu com o código ${code}, através do sinal ${signal}. Iniciando um novo`)
})

