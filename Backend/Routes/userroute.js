const express = require('express')
const userRouter = express.Router()

const registerUser = require('../Services/userservice')
const userController = require('../Controllers/userController')

userRouter.get('/register',(req,res)=>{
    res.send("Hello This is register route ")
})

userRouter.post('/register',
    userController,
    registerUser

)



module.exports = userRouter