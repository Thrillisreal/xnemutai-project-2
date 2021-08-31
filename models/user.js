const { Schema } = require('mongoose')

const User = new Schema(
  {
    userName: { 
      type: String, 
      required: true, 
      unique: true, 
      sparse: true }
  },
  { timestamps: true }
)

module.exports = User
