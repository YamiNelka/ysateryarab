const express = require('express')
const router = express.Router()
const path = require('path')
const app = express()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { userInfo } = require('os')
const signUpTemplate = require('./models/register-model')
const bodyParser = require("body-parser")
/************************************************/
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
//const publicDirectoryPath = path.join(__dirname, './public/')
//router.use(express.static(publicDirectoryPath))
/************************************************/

router.get('/', (req, res) => {
    res.render('main')
})

router.get('/register', (req, res) => {
    res.render('register')
})

router.post('/register', (req, res) => {

    console.log(req.body)

    
        bcrypt.hash(req.body.password, 10, function(error, hashedPassword){
            
    
            let registeredUser =  new signUpTemplate({
                email: req.body.email,
                name: req.body.name,
                password: hashedPassword
            })
    
            registeredUser.save().then(user => {
                res.json({ message: 'User created successfully!' })
            }).catch(error => {
                res.json({ message:'User did not get created !' })
            })
        })
    
})











module.exports = router