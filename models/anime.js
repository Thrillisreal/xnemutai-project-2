const { Schema } = require('mongoose')

const Anime = new Schema({
  Img: {
  type: String,
  required: true,
  },
  Name: { 
    type: String, 
    required: true, 
    unique: true, 
    sparse: true },

  Description: {
    type: String,
    required: true,
  }

 },
{ timestamps: true }
)

module.exports = Anime