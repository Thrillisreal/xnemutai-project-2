const { Router } = require('express')
const UserRouter = require('./UserRouter')
const AnimeRouter = require('./AnimeRouter')
const AppRouter = Router()

AppRouter.use('/users', UserRouter)
AppRouter.use('/animes', AnimeRouter)

module.exports = AppRouter