const express = require('express')
const app = express()
const mongoose = require('mongoose')
const routes = require('./routes')
const dotenv = require('dotenv')
dotenv.config()

mongoose.connect(process.env.DATABASE_ACCESS, () => console.log('Database connected'))
const db = mongoose.connection
db.on('error', error => console.log(error))
db.once('open', () => console.log('Connected to mongoose'))

app.use(express.json())
app.set('view engine', 'ejs')
app.use('/', routes)

app.listen(process.env.PORT || 3000, () => { // 3 -> El localhost htdek cannot get htro7 t3ml 4
    console.log('Server is up on your port !!')
})