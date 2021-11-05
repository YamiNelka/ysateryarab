const mongoose = require('mongoose')

const registerTemplate = new mongoose.Schema({
    
    email:{
        type: String,
        //required: true
    },
    name:{
        type: String,
        //required: true
    },
    password:{
        type: String,
        //required: true
    },
    
})

  const register = mongoose.model('register', registerTemplate)
module.exports = register