const { Router } = require('express')
const UserController = require('../controllers/UserController')
const UserRouter = Router()



UserRouter.post('/newUser', UserController.createUser)
UserRouter.get('/allUsers',UserController.allUsers)
UserRouter.delete('/deleteUser',UserController.deleteUser)







module.exports = UserRouter