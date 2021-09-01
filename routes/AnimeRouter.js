const { Router } = require('express')
const AnimeController = require('../controllers/AnimeController')
const AnimeRouter = Router()

AnimeRouter.post('/newAnime', AnimeController.createAnime)
AnimeRouter.get('/allUsers',AnimeController.allAnime)
// AnimeRouter.delete('/deleteUser',AnimeController.deleteAnime)

module.exports = AnimeRouter