const { User } = require('../models')

const createUser = async (req,res)=> {
  console.log(req.body);
  try{
  const newUser = await new User(req.body)
  await newUser.save()
  return res.status(201).json(newUser)
  } catch(error){
  console.log(error)
  }

}

const allUsers = async (req,res)=>{
  try{
    const allUsers = await User.find()
    return res.status(200).json(allUsers)

  }catch(error){
    console.log(error);
  }

}
const deleteUser = async (req, res) => {
  try {
    const deleted = await User.findByIdAndDelete(req.body.id)
    if (!deleted) throw new Error('User not found')
    return res.status(200).send('User deleted')
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

module.exports = {
  createUser,
  allUsers,
  deleteUser
}