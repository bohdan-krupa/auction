const { model, Schema } = require('mongoose')

const userSchema = new Schema({
  email: {
    type: String,
    unique: true,
    required: true
  },
  username: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true,
    minlength: 6
  }
})

module.exports = model('user', userSchema)