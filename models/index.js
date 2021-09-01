const mongoose = require('mongoose')
const UserSchema = require('./user')
const AnimeSchema = require('./anime')
const User = mongoose.model('user',UserSchema)
const Anime = mongoose.model('anime',AnimeSchema)

module.exports = {
  User,
  Anime
}