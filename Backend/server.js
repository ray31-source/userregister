const http = require('http')
const app = require('./app')
const connectTodb = require('./db/db')
const server = http.createServer(app)
const port  = 5000

connectTodb()

server.listen(port,()=>{
    console.log("The server is running")
})
