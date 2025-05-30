const mongoose = require('mongoose')
const MONGO_URI = 'mongodb+srv://rayhantaj517:jSnnfthUmAx7XgLn@cluster0.k8kjera.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
const connectTodb = ()=>{ 
    mongoose.connect(MONGO_URI)
.then(()=>{
    console.log('Connection Successful')

})
.catch((err)=>{
    console.log("Failed To connect" , err)
})
}

module.exports = connectTodb;