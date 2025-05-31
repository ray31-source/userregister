const User = require('../Models/usermodel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const JWT_SECRET = "login123"

const registerUser = async (req,res)=>{
    const {name , password} = req.body
    try {
        const newUser = User({
            name,
            password
        })
        newUser.password = await bcrypt.hash(password , 10)
        await newUser.save().then(()=>{
            console.log("Successfully Saved")
        })
        
        

        
    } catch (error) {
        res.status(500).send('Failed To save')
        
    }


}

const loginUser = async (req,res,next)=>{

    try{
    const {name , password} = req.body
    const user = await User.findOne({name })
    if(!user){
       return res.status(500).send("Invalid user or password")
    }
    const isMatch = await bcrypt.compare(password , user.password)
    if(!isMatch){
       return res.status(500).send("Invalid user or password")
    }
    const token = jwt.sign({_id:user._id} , JWT_SECRET , {
        expiresIn : '1h'
    } )

    console.log("Login Successful" ,token)
    next()
}
catch(error) {
    console.log(error)
   
    
}



}

module.exports = registerUser
module.exports = loginUser