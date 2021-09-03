const { Schema } = require('mongoose')

const Anime = new Schema({
  img: {
  type: String
  },
  name: { 
    type: String, 
    required: true,
    unique: true, 
    sparse: true },

  description: {
    type: String,
    required: true,
  }
 },
{ timestamps: true }
)

module.exports = Anime