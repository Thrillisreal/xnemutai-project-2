const { Router } = require('express')
const controllers = require('../controllers/Controller')
const AppRouter = Router()

AppRouter.get('/', (req, res) => res.send('This is root!'))

AppRouter.post('/', controllers.)
AppRouter.get('//:id', controllers.)

AppRouter.post('/users/:/', controllers.)
AppRouter.get('/users/:/', controllers.)
AppRouter.get('/users/:userName//:id', controllers.)

AppRouter.post('/users', controllers.createUser)
AppRouter.get('/users/', controllers.userByName)








module.exports = AppRouter