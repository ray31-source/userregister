const User = require('../Models/usermodel')
const bcrypt = require('bcrypt')

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

module.exports = registerUser