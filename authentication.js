const register = require('./models/register-model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { userInfo } = require('os')

const singUp = (req, res, next) => {
    bcrypt.hash(req.body.password, 10, function(err, hashedPassword){
        if(error) {
            res.json({ error: error })
        }

        let registeredUser = new register({
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword
        })

        registeredUser.save().then(user => {
            res.json({ message: 'User created successfully!' })
        }).catch(error => {
            res.json({ message:'User did not get created !' })
        })
    })
}

module.exports = { singUp }