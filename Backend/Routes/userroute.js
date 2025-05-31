const express = require('express')
const userRouter = express.Router()


const registerUser = require('../Services/userservice')
const userController = require('../Controllers/userController')
const loginUser = require('../Services/userservice')


userRouter.get('/register',(req,res)=>{
    res.send("Hello This is register route ")
})

userRouter.post('/register',
    userController,
    registerUser

)
userRouter.post('/login',
    loginUser


)



module.exports = userRouter