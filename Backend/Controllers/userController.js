const userController = (req,res,next)=>{
const {name , password} = req.body
if(!name || !password){
    throw new Error("All fields are required")
} else{
    console.log("Fields are OK")
    next()
}
}
module.exports = userController