const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const passport = require('passport')

const passportStrategy = require('./middleware/passportStrategy')
const authRoutes = require('./routes/auth.route')
const keys = require('./keys')

const app = express()

mongoose.connect(keys.MONGO_URL)
  .then(() => {
    consola.ready({
      message: 'MongoDB connected',
      badge: true
    })
  })
  .catch(err => console.error(err))

app.use(passport.initialize())
passport.use(passportStrategy)

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use('/api/auth', authRoutes)

module.exports = app