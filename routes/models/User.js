const mongoose = require('mongoose')
const Schema = mongoose.Schema


const UserSchema = new Schema({
  username: {
    type: String
  },
  full_name: {
    type: String
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
})

module.exports = User = mongoose.model('users', UserSchema)