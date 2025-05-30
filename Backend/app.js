const express = require('express')
const cors = require('cors')
const userRouter = require('./Routes/userroute')
const app = express()
app.use(express.static('public'))
app.use(cors())
app.use(express.json())
app.use('/user',userRouter)

app.get('/',(req,res)=>{
res.send("Hello World")
})

module.exports = app
